import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem.js';


const ExpensesList = (props) => {
    if (props.filteredExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
  
    return (
        <ul className="expenses-list">
            {props.filteredExpenses.map(expenseObj => (
            
                <ExpenseItem
                    key={expenseObj.id}
                    title={expenseObj.title}
                    amount={expenseObj.amount}
                    date={expenseObj.date}
                    />
            ))}
        </ul>
    )
};

export default ExpensesList