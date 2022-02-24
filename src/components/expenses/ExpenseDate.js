// ExpenseDate.js
import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    // receiving the date info from the expense item prop of ExpenseItem which had the data passed from the Expenses compnent
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    
    return(
        <div className='expense-date'>
            <div className='expense-dat__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate