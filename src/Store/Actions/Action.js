import * as actionTypes from './ActionTypes';
import Axios from 'axios';

export const getDetailsStart = () => ({
    type: actionTypes.GET_DETAILS_START
});

export const getDetailsSuccess = data => ({
    type: actionTypes.GET_DETAILS_SUCCESS,
    payload: data
});

export const getDetailsFailure = error => ({
    type: actionTypes.GET_DETAILS_FAILURE,
    payload: error
});

export const clearEmployeeDetails = () => ({
    type: actionTypes.CLEAR_EMPLOYEE_DETAILS
});

export const getEmployeeDetails = (id) => {
    return dispatch => {
        dispatch(getDetailsStart());
        if (id) {
            Axios.get(`https://reqres.in/api/users/${id}`)
                .then(response => {
                    dispatch(getDetailsSuccess(response.data))
                })
                .catch(err => {
                    dispatch(getDetailsFailure(err))
                })
        }
    }
}