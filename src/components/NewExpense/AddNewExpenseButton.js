import './AddNewExpenseButton.css'

function AddNewExpenseButton(props) {

    const addNewExpenseButtonHandler = () => {
        props.onAddNewExpenseButtonClicked();
    }

    return (
        <div className="button-class">
            <button className='button' onClick={addNewExpenseButtonHandler}>Add New Expense</button>
        </div>
    );
}

export default AddNewExpenseButton;