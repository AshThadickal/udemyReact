// ExpenseItem.js
import React, { useState } from "react";
import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css'
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    
    const handleClick = () => {
        setTitle('updated') 
    };
    
    // receiving the specific item of title and amount from the Expenses component that had the entire array of data passed to it as a prop
    return(
        <Card className='expense-item'>
            {/* passing the date field by way of the information passed from Expenses */}
            <ExpenseDate 
                // funnelling data from App.js > Expense > ExpenseDate - Date had to be grabbed from App.js on the ExpenseItem component
               date={props.date}     
            />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>   
            <button onClick={handleClick}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;