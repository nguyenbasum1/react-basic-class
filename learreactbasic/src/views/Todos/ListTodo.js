import React from "react";
import './listTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify'; // npm để hiện thông báo 
class ListTodo extends React.Component {
    state = {
        listTodo:
            [
                { id: `01`, title: `working_home` },
                { id: `02`, title: `working_office` },
                { id: '03', title: `working_tolet` }
            ],
        editTodo: // dùng để lưu giá trị khi nhập input nút sửa. sau đó gán giá trị mới thay cho giá trị cũ để sửa listTodo 
        {
        }
    }
    addNewTodo = (todo) => {
        //thay đổi list để thêm đối tượng todo 
        // let currentListTodo = this.state.listTodo;
        // currentListTodo.push(todo);
        // alert(todo)
        this.setState({
            listTodo: [...this.state.listTodo, todo],
        })
        toast.success("Dễ vãi l!!");
    }
    deleteTodo = (todo) => { // trong button function dc goi la` truyen vao item qua day phai doi lai ten tham so 
        console.log(`check todo delete`, todo);// truyen vao vì phải phân biệt lấy cái đã chọn và tất cả (all)item.id !== todo.id(choised)
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);// trả ra todo có id != với id đã chọn để xoá 
        this.setState(
            {
                listTodo: currentTodo,
            }
        )
        toast.success("đã xoá !!");
    }
    EditTodo = (todo) => {
        this.setState(
            {
                editTodo: todo,
            }
        );
    }
    handleOnChangeEditTodo = (event) => {
        // alert(`abc`);
        let editTodoCopy = { ...this.state.editTodo };

        editTodoCopy.title = event.target.value;
        console.log(`edittodocopy = `, editTodoCopy);
        this.setState({
            editTodo: editTodoCopy,
        });
    }
    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0; // biến sẽ trả ra true khi length = 0
        // console.log(isEmptyObj);
        return (
            <>

                <div className="listTodo__Container">
                    <p>Sim</p>
                    <AddTodo addNewTodo={this.addNewTodo} /> {/* để lại tài sản cho con dùng  */}
                </div>
                <div className="listTodosContent">
                    {
                        listTodo && listTodo.length > 0 && listTodo.map((item, index) => {
                            return (
                                <div className="toDo_child" key={item.id}>
                                    {
                                        (isEmptyObj === true) ?
                                            <span>{index + 1} - {item.title}</span> :
                                            <>
                                                {
                                                    editTodo.id === item.id
                                                        ?
                                                        <span>
                                                            {index + 1} - <input type="text"
                                                                value={item.title}
                                                                onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                                        </span>
                                                        :
                                                        <span>{index + 1} - {item.title}</span>
                                                }
                                            </>
                                    }
                                    <button
                                        onClick={() => this.EditTodo(item)}
                                    >edit</button>
                                    <button
                                        onClick={() => this.deleteTodo(item)}
                                    >Delete</button>
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