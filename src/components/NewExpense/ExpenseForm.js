import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [eneteredTitle, setEnteredTitle] = useState("");
  const [eneteredAmount, setEnteredAmount] = useState("");
  const [eneteredDate, setEnteredDate] = useState("");
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
    let body = {
      title: eneteredTitle,
      amount: eneteredAmount,
      date: eneteredDate,
    };
    console.log("Child Here.");
    props.onSaveExpenseData(body);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    console.log(body);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={eneteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={eneteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" value={eneteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
