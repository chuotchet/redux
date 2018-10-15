import React from 'react';
import AddTodo from './AddTodo';
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store';

const setup = () => {
  const store = configureStore()({ todos: [] });
  const wrapper = shallow(<AddTodo store={store} />);

  return {
    store,
    wrapper
  };
};

describe('AddTodo',  () => {
  it('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  })

  describe('handleChange', () => {
    it('should state value', () => {
      const {wrapper} = setup();
      const deeperWrapper = wrapper.shallow();
      deeperWrapper.find('input').simulate('change', { target: { value: 'Test' }});
      expect(deeperWrapper.state().value).toEqual('Test');
    })
  });

  describe('handleSubmit', () => {
    it('should prevent event default action', () => {
      let preventDefault = jest.fn();
      const { wrapper } = setup();
      let form = wrapper.shallow().find('form');
      form.simulate('submit', { preventDefault });
      expect(preventDefault).toHaveBeenCalled();
    })

    it('should not do anything when value is empty', () => {
      let preventDefault = jest.fn();
      const { store, wrapper } = setup();
      const deeperWrapper = wrapper.shallow();
      deeperWrapper.find('input').simulate('change', { target: { value: '' } });
      deeperWrapper.shallow().find('form').simulate('submit', { preventDefault });
      expect(store.getActions()).toEqual([]);
    })
    
    it('should dispatch action and reset state value', () => {
      let preventDefault = jest.fn();
      const { store, wrapper } = setup();
      const deeperWrapper = wrapper.shallow();
      deeperWrapper.find('input').simulate('change', { target: { value: 'Test' } });
      deeperWrapper.shallow().find('form').simulate('submit', { preventDefault });
      expect(store.getActions()).toEqual([{ id: 0, text: 'Test', type: 'ADD_TODO' }]);
      expect(deeperWrapper.state().value).toEqual('');
    })
  });
});
