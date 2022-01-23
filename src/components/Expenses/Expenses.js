import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem.js';

function Expenses(props) {
    return (
        <div className="expenses">
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
        </div>
    );
}

export default Expenses;