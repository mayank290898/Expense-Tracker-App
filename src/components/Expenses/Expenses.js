import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilterByYear from "./ExpenseFilterByYear";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());

  const recordChangedYear = (changedYear) => {
    setSelectedYear(changedYear);
  };
  const filteredExpenseItems = props.expenseItems.filter(
    (item) =>
      item.expenseDate.getFullYear().toString() === selectedYear
  );

  let expenseContent = <h2 className="center white-font">No Expense Found</h2>

  if(filteredExpenseItems.length > 0) {
    expenseContent = filteredExpenseItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        expenseName={expense.expenseName}
        expenseDate={expense.expenseDate}
        expensePrice={expense.expensePrice}
      />
    ))
  }

  let temp = props.expenseItems.map(item => item.expenseDate.getFullYear().toString())
  temp = temp.filter(year => year>='2019')
  let years = [...new Set(temp)];
  years.sort()

  return (
    <div className="center">
      <Card className="expenses">
        <ExpenseFilterByYear
          selectedYear={selectedYear}
          onYearChange={recordChangedYear}
          expenseItems={filteredExpenseItems}
          yearsList={years}
        />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses;
