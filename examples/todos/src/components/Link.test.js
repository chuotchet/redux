import React from 'react';
import { shallow } from 'enzyme';

import Link from './Link';

const setup = (setupProps = {}) => {
    const defaultProps = {
        active: false,
        onClick: jest.fn(),
        children: 'Test'
    }
    const props = {...defaultProps,...setupProps};
    const wrapper = shallow(
        <Link onClick={props.onClick} active={props.active} children={props.children} />);

    return {
        props,
        wrapper
    };
};

describe('Link', () => {
    it('should match snapshot', () => {
        const wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    })
    it('should handle click button', () => {
        const { props, wrapper } = setup();

        const link = wrapper.shallow().find('button');
        link.simulate('click');

        expect(props.onClick).toBeCalled();
    })
})