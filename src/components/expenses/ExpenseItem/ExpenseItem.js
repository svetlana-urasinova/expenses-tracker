import React from 'react';
import './ExpenseItem.css';
import '../ExpenseDate/ExpenseDate.js';
import ExpensesDate from '../ExpenseDate/ExpenseDate.js';
import Card from '../../UI/Card/Card.js';

const ExpenseItem = props => {
    const { date, title, amount } = props;

    return (
        <Card className="expense-item">
            <div className="expense-item__description">
                <ExpensesDate date={date} />
                <h2 className="expense-item__title">{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;