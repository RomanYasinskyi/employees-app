import {
    EMPLOYEE_ADD, EMPLOYEE_REMOVE,
    EMPLOYEES_LIST_FAIL, EMPLOYEES_LIST_REQUEST,
    EMPLOYEES_LIST_SUCCESS, UPDATE_EMPLOYEES_CHECK_BOX
} from "../constants/employeesConstants";

const employeesReducer = (state = {employees: []}, action) => {
    switch (action.type) {
        case EMPLOYEES_LIST_REQUEST:
            return {
                loading: true,
                employees: []
            };
        case EMPLOYEES_LIST_SUCCESS:
            return {
                loading: false,
                employees: action.payload
            };
        case EMPLOYEES_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case UPDATE_EMPLOYEES_CHECK_BOX:
            return {
                loading: false,
                employees: action.payload
            };
        default:
            return state;
    }
};

const birthdayReducer = (state = {
    employeesBirthday: JSON.parse(localStorage.getItem("employeesBirthday") || "[]")
}, action) => {
    switch (action.type) {
        case EMPLOYEE_ADD:
            return {
                employeesBirthday: action.payload
            };
        case EMPLOYEE_REMOVE:
            return {
                employeesBirthday: action.payload
            };
        default:
            return state;
    }
};

export {
    employeesReducer,
    birthdayReducer
};