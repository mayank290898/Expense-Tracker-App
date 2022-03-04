import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyData = [
  {
    id: `exp1`,
    expenseName:``,
    expenseDate: new Date(1999, 7, 24),
    expensePrice: 0,
  }
];

function App() {

  const [expenseItems, setExpenseItems] = useState(dummyData);

  const storeNewExpenseHandler = (newExpenseData) => {
    setExpenseItems((prevExpenseItems) => {
      return [newExpenseData, ...prevExpenseItems];
    })
  }

  return (
    <div className="App">
      <NewExpense onNewExpenseRecord={storeNewExpenseHandler} />
      <Expenses expenseItems={expenseItems} />
    </div>
  );
}

export default App;
