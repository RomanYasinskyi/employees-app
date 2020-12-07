import React from "react";
import EmployeeScreen from "./EmployeeScreen";

const EmployeesBoxScreen = ({listBox}) => {
    let [letter, list] = listBox;

    return (
        <>
            <h3>{letter}</h3>
            <ul className='listByAlphabet'>
                {list.length
                    ? list.map((item) => <li key={item.id}><EmployeeScreen employee={item} letter={letter}/></li>)
                    : <li>------</li>
                }
            </ul>
        </>
    )
};

export default EmployeesBoxScreen;