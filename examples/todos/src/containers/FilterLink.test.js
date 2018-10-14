import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

import FilterLink from './FilterLink';

const setup = (setupProps = {filter: 'SHOW_ALL'}) => {
  const store = configureStore()({});
  const props = setupProps;
  const wrapper = shallow(<FilterLink filter={props.filter} store={store} />);

  return {
    store,
    wrapper
  };
};

describe('FilterLink', () => {
  it('should match snapshot', () => {
    const {wrapper} = setup();
    expect(wrapper).toMatchSnapshot();
  })
  it('should set the correct filter SHOW_ALL', () => {
    const {store, wrapper} = setup();
    wrapper.find('Link').simulate('click');
    expect(store.getActions()).toEqual([{"filter": "SHOW_ALL", "type": "SET_VISIBILITY_FILTER"}])
  })
  it('should set the correct filter SHOW_ACTIVE', () => {
    const {store, wrapper} = setup({filter: 'SHOW_ACTIVE'});
    wrapper.find('Link').simulate('click');
    expect(store.getActions()).toEqual([{"filter": "SHOW_ACTIVE", "type": "SET_VISIBILITY_FILTER"}])
  })
});