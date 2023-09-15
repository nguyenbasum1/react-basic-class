import React from "react";
import {toast} from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        //tao state để lưu trữ data để đẩy đi
        title: '',
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        // alert('abc'); ceck ket noi 
        // goi nguoc len thay doi state cua component cha 
        if(!this.state.title)// dk là title bằngd rỗng thì kq là true
        {
            toast.error("trống kìa, mù à !")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000), //ramdom
            title: this.state.title,
        }
        this.props.addNewTodo(todo);
    }
    render() {
        let { title } = this.state.title;
        return (
            <div className="add_Todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                ></input>
                <button type="button"
                    onClick={() => this.handleAddTodo()}
                >Add</button>
            </div>
        );
    }
}
export default AddTodo;