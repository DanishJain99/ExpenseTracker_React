import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onSelectedFilterHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };

  const filteredData = props.expenses.filter((item) => {
    return item.date.getFullYear() == filteredYear;
  });

  return (
    <li>
      <Card className="expenses ">
        <ExpensesFilter
          selected={filteredYear}
          onSelectFilter={onSelectedFilterHandler}
        />
        <ExpensesChart expenses = {filteredData} />
        <ExpenseList items={filteredData} />
      </Card>
    </li>
  );
};

export default Expenses;
