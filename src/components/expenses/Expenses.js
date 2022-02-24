// Expenses.js
import React, { useState } from "react";
import './Expense.css';
import ExpenseItem from './ExpenseItem.js'
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    
    // state for the returned year to be stored in
    const [userYear, setUserYear] = useState('');
    // create a function to pass to ExpenseFilter component to get back the data of the year choice to be saved in state here
    const saveYearHandler = (userYear) => {
        setUserYear(userYear);
    };
console.log(userYear)
    // received the entire array of data from the app.js file and am passing the title, etc. for each item in the array as props to the ExpenseItem component
    return (
        <div>
            <ExpensesFilter onSaveUserYear={saveYearHandler}/>
        <Card className='expenses'>
            <ExpenseItem 
                title={props.expenseArray[0].title}
                amount={props.expenseArray[0].amount}
                date={props.expenseArray[0].date}>

            </ExpenseItem>
            <ExpenseItem 
                title={props.expenseArray[1].title} 
                amount={props.expenseArray[1].amount} 
                date={props.expenseArray[1].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.expenseArray[2].title} 
                amount={props.expenseArray[2].amount} 
                date={props.expenseArray[2].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.expenseArray[3].title} 
                amount={props.expenseArray[3].amount} 
                date={props.expenseArray[3].date}>
            </ExpenseItem>
        </Card>
        </div>
    )
}

export default Expenses