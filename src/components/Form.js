import React from "react"

const Form = ({ handleSubmit, cityName, handleChange }) => {
    return (
        <header>
            <div>
                <input
                    type="text"
                    value={cityName.city}
                    placeholder="Enter city name"
                    name="city"
                    onChange={handleChange}
                ></input>
                <button
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
        </header>
    )
}

export default Form