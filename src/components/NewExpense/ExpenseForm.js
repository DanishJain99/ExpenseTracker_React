import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [title, setTitle] = useState(" ")
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }


    const [amount, setAmount] = useState(" ")
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }


    const [date, setDate] = useState(" ")
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData);
        setAmount('');
        setTitle('');
        setDate('');
    }

    const onCancelHandler = () => {
      props.onChangeEditingState();
    }
     
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value = {title} onChange={titleChangeHandler}/>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value = {amount} onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value = {date} onChange={dateChangeHandler}/>
          </div>
        </div>
      </div>
      <div className="new-expense__actions">
      <button type = "button" onClick={onCancelHandler}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
