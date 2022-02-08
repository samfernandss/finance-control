import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsFormOpen(false);
    };

    const openFormHandler = (event) => {
        setIsFormOpen(true);
    }

    const closeFormHandler = () => {
        setIsFormOpen(false);
    }

    return (
        <div className="new-expense">
            {!isFormOpen
                ? <button onClick={openFormHandler}>Add New Expense</button>
                : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeFormHandler}/>
            }
        </div>
    );
}

export default NewExpense;