import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
  const saveExpenseData = (val) => {
    const newBody = {
      ...val,
      id: Math.random().toString(),
    };
    props.someProperty(newBody)
    console.log(newBody, "Parent hereeee !!!!");
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
