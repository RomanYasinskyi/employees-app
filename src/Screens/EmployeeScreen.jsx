import React from "react";
import {useDispatch} from "react-redux";
import {addToBirthdayList} from "../actions/birthdayActions";

const EmployeeScreen = (props)=>{

 const  {employee:{firstName, lastName, checked, id}, letter} = props;
    const dispatch = useDispatch();
    const handleCheck = ()=>{
        dispatch(addToBirthdayList(letter, id));
    };
    return (
        <>
            <span>{lastName} {firstName}</span><input type="checkbox" checked={checked} onChange={handleCheck} />
        </>
    )
};

export default EmployeeScreen;