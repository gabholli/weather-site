import React from "react"

const Form = ({ handleSubmit }) => {
    return (
        <header>
            <div>
                <form className="flex gap-6" onSubmit={handleSubmit}>
                    <input
                        className="px-2 py-1 md:px-4 md:py-2 text-sm rounded"
                        type="text"
                        // value={cityName || ""}
                        placeholder="Enter city name"
                        name="search"
                    // onChange={event => handleSubmit(event.target.value)}
                    ></input>
                    <button className="bg-gray-300 px-2 py-1 md:px-4 md:py-2 text-sm rounded">Search</button>
                </form>
            </div>
        </header>
    )
}

export default Form