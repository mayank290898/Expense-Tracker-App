import React from "react";

import "./ExpenseFilterByYear.css";
import ExpenseFilterGraphs from "./ExpenseFilterGraphs";

function ExpenseFilterByYear(props) {
  const yearChangeHandler = (event) => {
    props.onYearChange(event.target.value);
  };

  const data = [
    {
      id: 1,
      month: "Jan",
      spentMoney: 0
    },
    {
      id: 2,
      month: "Feb",
      spentMoney: 0
    },
    {
      id: 3,
      month: "Mar",
      spentMoney: 0
    },
    {
      id: 4,
      month: "Apr",
      spentMoney: 0
    },
    {
      id: 5,
      month: "May",
      spentMoney: 0
    },
    {
      id: 6,
      month: "Jun",
      spentMoney: 0
    },
    {
      id: 7,
      month: "Jul",
      spentMoney: 0
    },
    {
      id: 8,
      month: "Aug",
      spentMoney: 0
    },
    {
      id: 9,
      month: "Sep",
      spentMoney: 0
    },
    {
      id: 10,
      month: "Oct",
      spentMoney: 0
    },
    {
      id: 11,
      month: "Nov",
      spentMoney: 0
    },
    {
      id: 12,
      month: "Dec",
      spentMoney: 0
    },
  ];

  for(let spentAmountByMonth of props.expenseItems) {
    data[spentAmountByMonth.expenseDate.getMonth()].spentMoney += spentAmountByMonth.expensePrice
  }

  return (
    <>
      <div className="filter-years">
        <h3>Filter by Year</h3>
        <select
          name="years"
          id="years"
          value={props.selectedYear}
          onChange={yearChangeHandler}
          className="years-dropdown"
        >
          {props.yearsList.map(year => <option key={Math.random()} value={year}>{year}</option>)}
        </select>
      </div>
      <ExpenseFilterGraphs itemsList={props.expenseItems} graphData={data} />
    </>
  );
}

export default ExpenseFilterByYear;
