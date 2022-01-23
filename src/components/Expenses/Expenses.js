import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem.js';
import Card from '../Card/Card.js';

function Expenses(props) {
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