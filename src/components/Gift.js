import React, {Component} from 'react'
import {
  Form, FormGroup, FormControl, ControlLabel, Button
} from 'react-bootstrap';

class Gift extends Component {

  state={
    person: '',
    present:''
  }
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Form.Label>Person</Form.Label>
            <FormControl 
              className="input-person"
              onChange={event=> this.setState({person: event.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Present</Form.Label>
            <FormControl 
              className="input-present"
              onChange={event=> this.setState({present: event.target.value})}
            />
          </FormGroup>
        </Form>
        <Button 
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift
        </Button>
      </div>
    )
  }
}

export default Gift;