import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (entedExpenseData) => {
    const expenseData = {
      ...entedExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const editingHandler = () => {
    setIsEditing(true);
  };

  const changeEditingStateHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onChangeEditingState = {changeEditingStateHandler} />}
    </div>
  );
};

export default NewExpense;
