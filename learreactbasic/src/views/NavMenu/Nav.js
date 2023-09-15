import React from "react";
import {
     NavLink
} from 'react-router-dom';
class Nav extends React.Component {

    render() {
        return (
            <>
                <div className="topnav">
                    <nav id="home">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>
                            Home
                        </NavLink>
                        {/* <NavLink to="/" className="">Home</NavLink> */}
                        <NavLink to="/todo" className="">Todo</NavLink>
                        <NavLink to="/about" className="">About</NavLink>
                    </nav>
                </div>
                {/* link tag  keeps the website from being re-render when click the menu -- lib router  */}

            </>

        )
    };
}
export default Nav;