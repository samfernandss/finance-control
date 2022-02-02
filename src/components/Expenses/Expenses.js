import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022')

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    };

    console.log(filteredYear);

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
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