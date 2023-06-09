import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const[userInput , setUserInput] = useState({
  //     enteredAmount :'',
  //     enteredTitle :'',
  //     enteredDate :''
  // })

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount : e.target.value
    // })
  };

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle : e.target.value
    // })

    // setUserInput((prevState) => {
    //     return { ...prevState , enteredTitle:e.target.value}
    // })
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate : e.target.value
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredAmount(""), setEnteredDate(""), setEnteredTitle("");
  };

  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls"></div>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          onChange={amountChangeHandler}
          min={0}
          max={1000}
          value={enteredAmount}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateChangeHandler}
          value={enteredDate}
        />
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
