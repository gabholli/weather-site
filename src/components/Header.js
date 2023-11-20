import React from "react"
import { Link, NavLink } from "react-router-dom"

const Header = ({ handleSubmit }) => {
    return (
        <header>
            <h1>Retrieve Weather Forecast</h1>
            <Link to="/">Home</Link>
            <nav>
                <NavLink
                    to="/desc"
                >
                    Description
                </NavLink>
                <NavLink
                    to="/forecast"
                >
                    3-Day Forecast
                </NavLink>
                <NavLink
                    to="/temp"
                >
                    Temperature
                </NavLink>
                <NavLink
                    to="/wind"
                >
                    Wind Speed
                </NavLink>
            </nav>

            <div>
            </div>
        </header>
    )
}

export default Header