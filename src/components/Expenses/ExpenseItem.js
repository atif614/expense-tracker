import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
// import { useState } from 'react';

const ExpenseItem = ({ expense, onDelete }) => {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expense.date} />
            <div className='expense-item__description'>
                <h2>{expense.title}</h2>
                <div className='expense-item__price'>{expense.amount}</div>
                <button onClick={() => { onDelete(expense) }} className='delete'>Delete</button>
            </div>

        </Card>
    )
}
export default ExpenseItem;