import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './TodoList';

const setup = (setupProps = {}) => {
  const defaultProps = {
    todos: [{
          text: 'Test',
          completed: false,
          id: 0
      }],
    toggleTodo: jest.fn()
  }
  const props = {...defaultProps,...setupProps};
  const wrapper = shallow(
    <TodoList todos={props.todos} toggleTodo={props.toggleTodo} />);

  return {
    props,
    wrapper
  };
};

describe('TodoList', () => {
  it('should match snapshot', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  })
  it('should handle click', () => {
    const { wrapper, props } = setup();
    wrapper.find('Todo').simulate('click');
    expect(props.toggleTodo).toHaveBeenCalled();
  })
})