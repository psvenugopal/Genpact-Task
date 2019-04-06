import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Store/Actions/Index';
import Button from '../UI/Button';


const departments = [{ name: "HR" }, { name: "ENGINEERING" }];
const employeeId = {
    HR: ["Select an option", "1", "2", "3", "4", "5"],
    ENGINEERING: ["Select an option", "6", "7", "8", "9", "10"]
};
class Filters extends Component {
    state = {
        selectedOption: '',
        empId: false
    }
    handleOnchange = event => this.setState({ [event.target.name]: event.target.value });

    getEmployeeDetails = () => {
        if (this.state.empId) {
            this.props.getemployeeData(this.state.empId);
        }
    };

    cleardetails = () => {
        this.setState({ selectedOption: '', empId: false })
        this.props.clearEmployeeData()
    }

    render() {
        const { selectedOption, empId } = this.state;
        return (
            <React.Fragment>
                <div className="filters">
                    <div className="form-control">
                        <label className="label-align" htmlFor="department">DEPARTMENT</label>
                        <select
                            id="department"
                            value={selectedOption}
                            onChange={this.handleOnchange}
                            name="selectedOption"
                        >
                            <option value="" disabled>Select an option</option>
                            {departments.map(val => (
                                <option key={val.name} value={val.name}>{val.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label-align" htmlFor="empId">EMPLOYEE ID</label>
                        <select
                            id="empId"
                            value={empId}
                            name="empId"
                            onChange={this.handleOnchange}
                        >
                            {selectedOption &&
                                employeeId[selectedOption].map((Id, i) => (
                                    <option key={i} value={Id}>{Id}</option>
                                ))}
                        </select>
                    </div>

                    <div style={{ marginTop: "35px" }}>
                        <Button handleClick={this.getEmployeeDetails} value="Get Details" />
                        <Button handleClick={this.cleardetails} value="Clear" />
                    </div>
                </div>
            </React.Fragment >
        )
    }
};
const mapDispatchToProps = dispatch => ({
    getemployeeData: (id) => dispatch(actions.getEmployeeDetails(id)),
    clearEmployeeData: () => dispatch(actions.clearEmployeeDetails())
})
export default connect(null, mapDispatchToProps)(Filters);
