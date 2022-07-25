import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../event';



describe('<EventList /> component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={[{ id: 1}, { id: 2}]} />);
    expect(EventListWrapper.find(Event)).toHaveLength(2);
  });
});