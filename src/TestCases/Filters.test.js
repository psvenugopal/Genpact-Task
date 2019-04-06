import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filters from '../Components/Filters';
import Button from '../UI/Button';

configure({ adapter: new Adapter() });

describe("<Filters/>", () => {
    it("to Test Buttons", () => {
        const wrapper = shallow(<Filters />)
        expect(wrapper.find(Button));
    })
});