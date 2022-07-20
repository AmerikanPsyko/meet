import React from 'react';
import { shallow } from 'enzyme';
import NumberofEvents from '../NumberOfEvents';
// import { mockData } from '../mock-data';
// import { getEvents } from '../api';

describe('<NumberOfEvents/> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberofEvents updateEvents={() => { }} />)
  })

  test('renders number textbox', () => {
    expect(NumberOfEventsWrapper.find('.event-count')).toHaveLength(1);
  });

  test('user can change number of events shown', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 20
    });
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.event-number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(10);
  });

  test('only numbers > 0 allowed', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 20
    });
    const eventObject = { target: { value: -2 } };
    NumberOfEventsWrapper.find('.event-number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(20);
  });

});