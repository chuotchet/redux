import React from 'react';
import { shallow } from 'enzyme';

import Todo from './Todo';

const setup = (setupProps = {}) => {
    const defaultProps = {
        completed: false,
        onClick: jest.fn(),
        text: 'Test',
        createdTime: '2018-10-12 16:58:30'
    }
    const props = {...defaultProps,...setupProps};
    const wrapper = shallow(
        <Todo onClick={props.onClick} completed={props.completed} text={props.text}  createdTime={props.createdTime}/>);

    return {
        props,
        wrapper
    };
};

describe('Todo', () => {
    it('should match snapshot', () => {
        const wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    })
    it('should handle click button', () => {
        const { props, wrapper } = setup();

        expect(wrapper.shallow().find('li').props('style').style.textDecoration).toEqual('none');
        const link = wrapper.shallow().find('li');
        link.simulate('click');

        expect(props.onClick).toBeCalled();
    })
    it('should toogle style', () => {
        const { props, wrapper } = setup({completed: true});

        expect(wrapper.shallow().find('li').props('style').style.textDecoration).toEqual('line-through');
    })
})