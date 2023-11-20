import React from "react"

const Form = ({ handleSubmit }) => {
    return (
        <header>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter city name"
                        name="search"
                    ></input>
                    <button>Search</button>
                </form>
            </div>
        </header>
    )
}

export default Form