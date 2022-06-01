import "./ExpenseItems.css";
import {useState} from'react';
function ExpenseItem(props) {
    const month=props.date.toLocaleString('en-US', {day:'2-digit'})
  return (
      <div className="expense-item">
          <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">1997</div>
            <div className="expense-date__day">26</div>
          </div>
          <div className="expense-item__description">
              <h2>{props.name}</h2>
              <div className="expense-item__price">${props.amount}</div>
          </div>
      </div>
  )
}
export default ExpenseItem;
