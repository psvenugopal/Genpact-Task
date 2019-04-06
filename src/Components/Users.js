import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
    displayUser = data => data && (
        <div className="panel">
            <img src={data.avatar} alt="logo" height="300" width="100%" />
            <p>Emplyee Id : {data.id}</p>
            <h4>Employee Name : {`${data.first_name} ${data.last_name}`}</h4>
        </div>
    )
    render() {
        return (
            <React.Fragment>
                {this.props.loading ? <h3 style={{ textAlign: 'center' }}>Loading....</h3> : null}
                {this.displayUser(this.props.employeeData)}
            </React.Fragment>
        )
    }
};
const mapStateToProps = state => ({
    employeeData: state.employeeData,
    loading: state.loading
})

export default connect(mapStateToProps)(Users);
