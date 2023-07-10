import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    date: new Date(2021, 3, 3),
    amount: 300,
  },
  {
    id: 2,
    title: "Home Insurance",
    date: new Date(2022, 7, 15),
    amount: 500,
  },
  {
    id: 3,
    title: "Health Insurance",
    date: new Date(2022, 10, 27),
    amount: 200,
  },
  {
    id: 4,
    title: "Travel Insurance",
    date: new Date(2022, 2, 10),
    amount: 150,
  },
];

function App() {
  const [exp, setExp] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExp((prevExp) => {
      return [expense, ...prevExp];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={exp} />
    </div>
  );
}

export default App;
