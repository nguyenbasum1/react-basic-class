import React from "react";
import withRouter from "./withRouter";
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigate('/todo');
        }, 2000);
    }
    render() {
        return (
            <>
                <div className="nav_menu">
                    <p>Home</p>
                </div>
            </>
        );

    }
};
export default withRouter(Home);
