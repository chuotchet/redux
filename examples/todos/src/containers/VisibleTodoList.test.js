import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

import VisibleTodoList from './VisibleTodoList';
import {setVisibilityFilter, toggleTodo} from '../actions';

const setup = () => {
  const store = configureStore()({
    todos: [
      {
        text: 'Test1',
        completed: false,
        id: 0
      },
      {
        text: 'Test2',
        completed: true,
        id: 1
      }
    ],
    visibilityFilter: 'SHOW_ALL'
  });
  const wrapper = shallow(<VisibleTodoList store={store} />);

  return {
    store,
    wrapper
  };
};

describe('Test VisibleTodoList', () => {
  it('should match snapshot', () => {
    const {wrapper} = setup();
    expect(wrapper).toMatchSnapshot();
  })
  it('should toggle todo when click', () => {
    const {store, wrapper} = setup();
    wrapper.shallow().find('Todo').first().simulate('click');
    expect(store.getActions()).toEqual([toggleTodo(0)]);
  })
});