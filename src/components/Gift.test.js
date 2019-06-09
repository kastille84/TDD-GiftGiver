import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Gift from './Gift';

configure({adapter: new Adapter()});

const id = 1;
const mockRemove = jest.fn();
//used to mimick the props given to the real Gift comp by App comp
const props = {
  gift: {id: id}, 
  removeGift: mockRemove
}
const gift = shallow(<Gift {...props} />);

describe("Gift", () => {

  it('should render properly', () => {
    expect(gift).toMatchSnapshot();
  });
  it('initializes a perosn and present in `state', () => {
    expect(gift.state()).toEqual({person: '', present: ''})
  })
})

describe('when typing into the person input', () => {
  const person = 'Uncle';
  beforeEach(() => {
    gift.find('.input-person').simulate('change', {target: {value: person}})
  })
  it('updates the person in `state`', () => {
    expect(gift.state().person).toEqual(person)
  })
})

describe('when typing into the present intput', () => {
  const present = "xbox";
  beforeEach(() => {
    gift.find('.input-present').simulate('change', {target:{value: present}})
  })
  it(`updates the present in state`, () => {
    expect(gift.state().present).toEqual(present);
  })
})

describe('when clicking the "Remove Gift" button', () => {
  beforeEach(() => {
    gift.find('.btn-remove').simulate('click')
  })

  it("calls the removeGift callback", () => {
    //jest's Mock Function, defined  at top 
    expect(mockRemove).toHaveBeenCalledWith(id);
  })
}) 