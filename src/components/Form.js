import React from "react"

const Form = ({ handleSubmit, cityName }) => {
    return (
        <header>
            <div>
                <form className="search-form-container" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        // value={cityName || ""}
                        placeholder="Enter city name"
                        name="search"
                    // onChange={event => handleSubmit(event.target.value)}
                    ></input>
                    <button>Search</button>
                </form>
            </div>
        </header>
    )
}

export default Form