import React, { useState } from "react";

import AddNewExpenseButton from "./AddNewExpenseButton";
import Form from "./Form";

import './Layout.css'

function Layout(props) {

    const cancelButtonHandler = () => {
        setLayoutContent(<AddNewExpenseButton onAddNewExpenseButtonClicked={addNewExpenseButtonHandler} />)
    }

    const addNewExpenseButtonHandler = () => {
        setLayoutContent(<Form onSaveExpenseData={saveExpenseDataHandler} onCancelButtonClicked={cancelButtonHandler} />)
    }

    const [layoutContent, setLayoutContent] = useState(<AddNewExpenseButton onAddNewExpenseButtonClicked={addNewExpenseButtonHandler} />);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onNewExpenseRecord(expenseData);
    }


    return(
        <div className="center">
            <div className="layout">
                {layoutContent}
            </div>
        </div>
    );
}

export default Layout;