import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className='expenses'>
            {props.data.map(expense => {
                return (<ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />)
            })}
        </Card>
    )
}

export default Expenses;