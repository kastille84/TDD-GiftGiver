import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Gift from './Gift';
import {max_number} from '../helper';

class App extends Component {
  state = {
    gifts: []
  };

  addGift = () => {
    const { gifts } = this.state;

    const ids = this.state.gifts.map(gift => gift.id);
    gifts.push({ id: max_number(ids) + 1 });
    this.setState({gifts});
  };

  renderGiftList = () => {
    return this.state.gifts.map(gift => {
      return (
        <Gift 
          key={gift.id}
          gift={gift}
          removeGift={this.removeGift}
        /> 
      )
    })
  }

  removeGift = (id) => {
    const gifts = [...this.state.gifts].filter(gift => {
      if(gift.id !== id) return true;
    })
    this.setState({gifts})
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.renderGiftList()}
        </div>
        <Button className="btn-add" onClick={()=>this.addGift()}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
