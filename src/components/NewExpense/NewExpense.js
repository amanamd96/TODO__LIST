import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';


const NewExpense = (props) =>{

    const[isEditing , setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
      
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }

   const isEditingChangeHandler = () => {
    setIsEditing(true);
   }

   const isStopEditingChangeHandler = () => {
    setIsEditing(false);
   }


    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={isEditingChangeHandler}> Add New expenses </button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={isStopEditingChangeHandler}/>}
        </div>
    )
}
export default NewExpense;