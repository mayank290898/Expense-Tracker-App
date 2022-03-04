import React, { useState } from "react";

import "./Form.css";

function Form(props) {
  const curDate = new Date().toISOString().slice(0, 10);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("dd-mm-yyyy");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      expenseName: enteredTitle,
      expensePrice: parseInt(enteredAmount),
      expenseDate: new Date(enteredDate),
    };

    props.onSaveExpenseData(enteredData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("dd-mm-yyyy");
  };

  const cancelHandler = () => {
      props.onCancelButtonClicked();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="top-fields">
        <div className="field">
          <label className="label">Title</label>
          <input
            className="field-design"
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="field">
          <label className="label">Amount</label>
          <input
            className="field-design"
            type="number"
            min={1}
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="field">
          <label className="label">Date</label>
          <input
            className="field-design"
            type="date"
            min="2019-01-01"
            max={curDate}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="btn-class">
        <button type="button" className="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit" className="button">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default Form;
