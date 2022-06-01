import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
  const saveExpenseData = (val) => {
    const newBody = {
      ...val,
      id: Math.random().toString(),
    };
    props.someProperty(newBody)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
