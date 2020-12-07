import * as axios from 'axios';
import moment from 'moment';
import {EMPLOYEES_LIST_FAIL, EMPLOYEES_LIST_REQUEST, EMPLOYEES_LIST_SUCCESS} from "../constants/employeesConstants";

const fetchEmployees = () => async (dispatch) => {
    if(localStorage.employees){
       let employees = JSON.parse(localStorage.employees);
        dispatch({type: EMPLOYEES_LIST_SUCCESS, payload: employees})
    }else{
        try {
            dispatch({type: EMPLOYEES_LIST_REQUEST});
            const {data} = await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users');
            const newData = sortEmployees(convertedData(data));
            dispatch({type: EMPLOYEES_LIST_SUCCESS, payload: newData});
            localStorage.setItem('employees', JSON.stringify(newData));
        } catch (error) {
            dispatch({type: EMPLOYEES_LIST_FAIL, payload: error.message})
        }
    }
};

const  sortEmployees = (data)=>{
    const sortedEmployees = {
        'A':[], 'B':[], 'C':[], 'D':[], 'E':[], 'F':[], 'G':[], 'H':[], 'I':[], 'J':[], 'K':[], 'L':[], 'M':[],
        'N':[], 'O':[], 'P':[], 'Q':[], 'R':[], 'S':[], 'T':[], 'U':[], 'V':[], 'W':[], 'X':[], 'Y':[], 'Z':[]
    };
    const mapEmployees = [];
    for (let item of data) {
        let letter = item.lastName[0];
        item.checked = false;
        sortedEmployees[letter].push(item);
    }
    let map = new Map(Object.entries(sortedEmployees));
    for (let item of map) {
        mapEmployees.push(item);
    }
    return mapEmployees;
};

const convertedData = (data) => {
    return data.map((item) => {
        return {...item, dob: convetedDataBirthday(item.dob)}
    });

};

const convetedDataBirthday = (dateBirthday) => {
    const date = new Date(dateBirthday);
    const month = moment(date).format('MMMM');
    const year = moment(date).format("YYYY");
    const dateInMonth = moment(date).format("D");
    return `${dateInMonth} ${month}, ${year} year`;
};


export {fetchEmployees};