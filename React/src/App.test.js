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



  // it('check isValidCar function (mazda year: xxxx max) ', () => {
  //   const wrapper =  mount(<App />);
    
  //   let carValidTest = {make: 'mazda', year:'2006'};
  //   let carInValidTest = {make: 'mazda', year:'2007'};
  //   const expectedTrue = wrapper.instance().isValidCar(carValidTest);
  //   const expectedFalse = wrapper.instance().isValidCar(carInValidTest);
  //   expect(expectedTrue).toBe(true);
  //   expect(expectedFalse).toBe(false);
  // })


})

