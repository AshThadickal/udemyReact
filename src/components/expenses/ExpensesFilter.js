
import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    // onChange function to call the function from Expenses to store the year choice within the state in Expenses component
    const yearChangeHandler = (event) => {
         props.onSaveUserYear(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={yearChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;