import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
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