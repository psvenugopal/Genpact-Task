import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Filters from '../Components/Filters';
import Users from '../Components/Users';


configure({ adapter: new Adapter() });

describe("<App/>", () => {
    it("to Test Filters", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(Filters)).toHaveLength(1);
    })
    it("to Test Users", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(Users)).toHaveLength(1);
    })
})
