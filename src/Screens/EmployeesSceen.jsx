import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchEmployees} from "../actions/employeesActions";
import EmployeesBoxScreen from "./EmployeesBoxScreen";

const EmployeesScreen = () => {

    const employeesList = useSelector(state => state.employeesList);
    const {employees, loading, error} = employeesList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployees())
    }, []);

    return (
        <div className='blockEmployees'>
            <h1>Employees</h1>
            {loading
                ? <div>Loading...</div>
                : error
                    ? <div>error</div>
                    : <div>
                        <div className='containerEmployees'>
                            {employees.map((item) => {
                                return <div key={item[0]} className="boxEmployees">
                                    <EmployeesBoxScreen listBox={item}/>
                                </div>
                            })}
                        </div>

                    </div>}
        </div>
    )
};

export default EmployeesScreen;
