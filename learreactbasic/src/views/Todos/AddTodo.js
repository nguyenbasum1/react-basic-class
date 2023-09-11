import React from "react";
class AddTodo extends React.Component {

    render() {
        return (
            <div className="add_Todo">
                <input type="text"></input>
                <button type="button">Add</button>
            </div>
        );
    }
}
export default AddTodo;