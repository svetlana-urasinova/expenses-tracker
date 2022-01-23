import React from 'react';
import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem.js';
import Card from '../../UI/Card/Card.js';

const Expenses = props => {
    return (
        <Card className="expenses">
            {
                props.data.map(expense => (
                    <ExpenseItem
                        key={`item-${expense.id}`}
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                    />
                ))
            }
        </Card>
    );
}

export default Expenses;