import {
    EMPLOYEE_ADD,
    EMPLOYEE_REMOVE,
    UPDATE_EMPLOYEES_CHECK_BOX
} from "../constants/employeesConstants";

const addToBirthdayList = (letter, id) => (dispatch, getState) => {
    const state = getState();
    const [newState, employeeData] = updateEmployees(state.employeesList.employees, letter, id);

    dispatch({type: UPDATE_EMPLOYEES_CHECK_BOX, payload: newState});
    localStorage.setItem('employees', JSON.stringify(newState));

    if(employeeData.checked){
        let newState = JSON.parse(JSON.stringify(state.birthdayList.employeesBirthday));
        let sortedData = sortedByMonth(employeeData, newState);

        dispatch({type: EMPLOYEE_ADD, payload: sortedData});
        localStorage.setItem('employeesBirthday', JSON.stringify(sortedData));
    }else {
        let newStateBirthday = JSON.parse(JSON.stringify(state.birthdayList.employeesBirthday));
        newStateBirthday.forEach((item) => {
            let month = employeeData.dob.split(' ')[1].slice(0, -1);
            if (item[0] === month) {
                if (item[1].length === 1) {
                    item[1] = []
                } else {
                    for (let i = 0; i <= item[1].length; i++) {
                        if (item[1][i].id === employeeData.id) {
                            item[1].splice(i, 1);
                            break;
                        }
                    }
                }
            }
        });
        dispatch({type: EMPLOYEE_REMOVE, payload: newStateBirthday});
        localStorage.setItem('employeesBirthday', JSON.stringify(newStateBirthday));
    }

};

const updateEmployees = (arrEmployees, letter, id) => {
    let employeeData;
    let newArrEmployees = JSON.parse(JSON.stringify(arrEmployees));
    let arrEmployeesByLetter = newArrEmployees.find((item) => item[0] === letter);
    arrEmployeesByLetter[1].forEach(item => {
        if (item.id === id){
            item.checked = !item.checked;
            employeeData = item;
        }
    });
    return [newArrEmployees, employeeData];
};

const sortedByMonth = (data, state) => {
    let month = data.dob.split(' ')[1].slice(0, -1);
    if (state.length) {
        return state.map((item) => {
            if (item[0] === month) {
                item[1].push(data)
            }
            return item
        });
    }else{
        const dataBirthday = {
            'January':[], 'February':[], 'March':[], 'April':[], 'May':[], 'June':[], 'July':[],
            'August':[], 'September':[], 'October':[], 'November':[], 'December':[],
        };
        dataBirthday[month].push(data);
        const arrBirthdayEnployees = [];
        let map = new Map(Object.entries(dataBirthday));
        for (let item of map) {
            arrBirthdayEnployees.push(item);
        }
        return arrBirthdayEnployees;
    }
};

export {
    addToBirthdayList
}
