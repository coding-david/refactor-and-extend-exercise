import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Enzyme, { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });




// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('isValidCarTest ', () => {


  it('check isValidCar function  with x year and xxxxx year', () => {
    const wrapper =  mount(<App />);
    
    let carIsValidCarWithOneYear = {make: 'mazda', year:'1'};

    let carIsValidCarWith5SignYear = {make: 'mazda', year:'19911'};
    const expectedTrue = wrapper.instance().isValidCar(carIsValidCarWithOneYear);
    const expectedFalse = wrapper.instance().isValidCar(carIsValidCarWith5SignYear);
    expect(expectedTrue).toBe(false);
    expect(expectedFalse).toBe(false);
  })


  it('check isValidCar function (mazda year: xxxx min) ', () => {
    const wrapper =  mount(<App />);
    
    let carValidTest = {make: 'mazda', year:'1997'};
    let carInValidTest = {make: 'mazda', year:'1996'};
    const expectedTrue = wrapper.instance().isValidCar(carValidTest);
    const expectedFalse = wrapper.instance().isValidCar(carInValidTest);
    
    expect(expectedTrue).toBe(true);
    expect(expectedFalse).toBe(false);
  })

  // it('marcel fooo' , () => {
  //   const { getByText } = render(<App />);

  // })

  it('stateTest ', () => {
    let carValidTest = {make: 'mazda', year:'1997'};
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    wrapper.find('input').at(0).text('mazda');
    // wrapper.getByName('year').value = '1997';
    expect(instance.state).toStrictEqual({ make: "", year: "", isValid: undefined });
    instance.setState({...carValidTest, isValid: true});
    instance.isValidCar(carValidTest);
    expect(instance.state).toStrictEqual({...carValidTest, isValid: true});
  });

  it('Button test with stateTest', () => {
    let carValidTest = {make: 'mazda', year:'1997'};
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    const event = {target: {value: "mazda"}};
    wrapper.find('input').at(0).simulate('change', event);
    const event2 = {target: {value: "1997"}};
    wrapper.find('input').at(1).simulate('change', event2);
   
   let btn =  wrapper.find('button').simulate('click');
  //  expect(btn.mock.calls.length).toEqual(1);

    expect(instance.state).toStrictEqual({...carValidTest, isValid: true});
  });




})

