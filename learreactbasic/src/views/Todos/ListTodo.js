import React from "react";
import './listTodo.scss';
import AddTodo from "./addTodo";
class ListTodo extends React.Component {
    state = {
        listTodo:
            [
                { id: `01`, title: `working_home` },
                { id: `02`, title: `working_office` },
                { id: '03', title: `working_tolet` }
            ],
    }
    render() {
        let { listTodo } = this.state;
        return (
            <>
                <div className="listTodo__Container">
                    <AddTodo/>
                </div>
                <div className="listTodosContent">
                    {
                        listTodo && listTodo.length > 0 && listTodo.map((item, index) => {
                            return (
                                <div className="toDo_child" key={item.id}>
                                    <span>{index + 1} - {item.title}</span>
                                    <button>edit</button>
                                    <button>Delete</button>
                                </div>

                            );
                        })
                    }
                </div>
            </>
        );
    };
}
export default ListTodo;