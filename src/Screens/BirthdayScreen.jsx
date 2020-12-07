import React from "react";
import {useSelector} from "react-redux";

const BirthdayScreen = () => {
    const birthdayList = useSelector(state => state.birthdayList.employeesBirthday);
    const employeesBirthday = birthdayList.filter(item => item[1].length !== 0);
    return (
        <div>
            <h1>BirthdayScreens</h1>
            {
                employeesBirthday.length
                    ? <div className='boxBirthday'>
                        {employeesBirthday.map(item => <div key={item[0]}><BirthdayMonthScreen boxList={item}/></div>)}
                    </div>
                    : <div> No selected employees</div>
            }

        </div>
    )
};

const BirthdayMonthScreen = ({boxList}) => {
    const [month, list] = boxList;
    return (
        <div>
            <h4>{month}</h4>
            <ul>
                {list.map(item => <li key={item.id}>{item.lastName} {item.firstName} - {item.dob}</li>)}
            </ul>
        </div>
    )
};


export default BirthdayScreen;