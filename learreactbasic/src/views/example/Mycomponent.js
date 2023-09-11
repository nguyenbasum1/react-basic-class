import React from "react";
import ChillComponent from ".ChillComponent";
class Mycomponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        Job:[
            {
                id: "01",
                title: "dev",   
                salary: "5000$", 
            },
            {
                id: "02",
                title: "tester",   
                salary: "2500$", 
            }
        ],
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
            // value truyen vao từ html trả ra và nhờ setState này giúp cho cập nhật dự liệu và render ngay trên screen
        });
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();        // xoá mặc định tải lại trang của input button (delete default of button input)
        console.log(`check data input  :`, this.state);
    }
    render() {
        console.log(`call render`, this.state);
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    ></input><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    ></input><br></br>
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    ></input>
                </form>

                <ChillComponent
                    lastName={this.state.lastName}
                    firstName={this.state.firstName}
                    job = {this.state.Job}
                ></ChillComponent>
            </>
        );
    }
}

export default Mycomponent;