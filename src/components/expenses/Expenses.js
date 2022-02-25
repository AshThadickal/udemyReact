// Expenses.js
import React, { useState } from "react";
import './Expense.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    
    // state for the returned year to be stored in
    const [userYear, setUserYear] = useState('2022');
    // create a function to pass to ExpenseFilter component to get back the data of the year choice to be saved in state here
    const saveYearHandler = userYear => {
        setUserYear(userYear);
    };

    // created this const to filter the data which is what will be mapped over below in the return - use it as a way to extract some data
    const filteredExpenses = props.expenseArray.filter(expense => {
        return expense.date.getFullYear().toString() === userYear;
    });
    // received the entire array of data from the app.js file and am passing the title, etc. for each item in the array as props to the ExpenseItem component 

    // statefull vs stateless components - some components that do vs do not handle states within the component (presentational and dumb components)
  
    return (
       
        <Card className='expenses'>
            {/* controlled component = both the value and changes to the value are not handled in the component but in the parent component*/}
            <ExpensesFilter onSaveUserYear={saveYearHandler} selected={userYear}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>                
        </Card>
       
    )
}

export default Expenses