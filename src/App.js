import React from "react";
import './App.css';
import EmployeesScreen from "./Screens/EmployeesSceen";
import BirthdayScreen from "./Screens/BirthdayScreen";

function App() {
    return (
        <div className= 'wrapper'>
            <EmployeesScreen/>
            <BirthdayScreen/>
        </div>
    );
}

export default App;
