import "./ExpenseItems.css";
function ExpenseItem(props) {
    const expenseDate=new Date(2022,24,3);
    const expenseTitle="Car Insurance";
    // const expenseAmount=248.46;
    const month=props.date.toLocaleString('en-US', {day:'2-digit'})
    const year=props.date.getFullYear();
  return (
      <div className="expense-item">
          <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">Year</div>
            <div className="expense-date__day">Day</div>
          </div>
          <div className="expense-item__description">
              <h2>{props.name}</h2>
              <div className="expense-item__price">${props.amount}</div>
          </div>
      </div>
  )
}
export default ExpenseItem;
