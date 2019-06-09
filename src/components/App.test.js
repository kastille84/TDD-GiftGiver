import React from 'react';
import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  App from './App.js';

configure({adapter: new Adapter()})

describe('App', () => {
  //takes in jsx and returns an object that represents our component
  const app = shallow(<App />);
  
  
  it('renders correctly', () => {
    //snapshots keep recorded hist of component. Everytime change is made snapshot updates
    //and checks other pervious snpshots to match your new one
    expect(app).toMatchSnapshot();
  });
  
  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  })

  describe("when clicking the `add-gift` button", () => {
    const id = 1;                                            
    beforeEach(() => {
      //add gift button and click it
      app.find('.btn-add').simulate('click');
    })
    afterEach( () => {
      app.setState({gifts: []})
    })

    it('adds a new gift to `state`', () => {   
      expect(app.state().gifts).toEqual([{id:id}])
    })
    
    it('adds a new gift to rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    })
    it('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    })

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id)
      })
      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      })
    })
  })  

})