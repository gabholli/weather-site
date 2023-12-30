import React from "react"

const Form = ({ handleSubmit }) => {
    return (
        <header>
            <div>
                <form className="flex gap-6" onSubmit={handleSubmit}>
                    <input
                        className="px-2 py-1 md:px-4 md:py-2 text-sm rounded border-gray-800 border-2"
                        type="text"
                        // value={cityName || ""}
                        placeholder="Enter city name"
                        name="search"
                    // onChange={event => handleSubmit(event.target.value)}
                    ></input>
                    <button className="bg-gray-300 hover:bg-gray-500 active:bg-gray-600 
                        px-2 py-1 md:px-4 md:py-2 text-sm rounded border-gray-800 border-2"
                    >Search
                    </button>
                </form>
            </div>
        </header>
    )
}

export default Form