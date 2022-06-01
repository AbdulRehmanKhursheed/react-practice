import "./ExpenseItems.css";
import {useState} from'react';
function ExpenseItem(props) {
  const [title, setTitle]=useState(props.name)
    const month=props.date.toLocaleString('en-US', {day:'2-digit'})
    const changeName=()=>{
      setTitle("Updated Name!");
    }
  return (
      <div className="expense-item">
          <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">1997</div>
            <div className="expense-date__day">26</div>
          </div>
          <div className="expense-item__description">
              <h2>{title}</h2>
              <div className="expense-item__price">${props.amount}</div>
          </div>
          <button onClick={changeName}> Click Me </button>
      </div>
  )
}
export default ExpenseItem;
