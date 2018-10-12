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

describe('Test AddTodo',  () => {
    it('should match snapshot', () => {
        const {wrapper} = setup();
        expect(wrapper).toMatchSnapshot();
    })
    it('should handle onSubmit preventDefault', () => {
        let preventDefault = jest.fn();
        const {wrapper} = setup();
        let form = wrapper.shallow().find('form');
        form.simulate('submit', {preventDefault});
        expect(preventDefault).toHaveBeenCalled();
    })
    it('should handle onSubmit change', () =>{
        let preventDefault = jest.fn();
        const { store, wrapper } = setup();
        const deeperWrapper = wrapper.shallow();
        deeperWrapper.find('input').simulate('change', {target: {value: 'Test'}});
        deeperWrapper.shallow().find('form').simulate('submit', {preventDefault});
        expect(store.getActions()).toEqual([{ id: 0, text: 'Test', type: 'ADD_TODO' }]);
    })
});
