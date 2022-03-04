import Layout from "./Layout";

function NewExpense(props) {

    const passNewExpenseHandler = (newExpense) => {
        props.onNewExpenseRecord(newExpense);
    }

    return (
        <div className="new-expense">
            <Layout onNewExpenseRecord={passNewExpenseHandler} />
        </div>
    );
}

export default NewExpense;