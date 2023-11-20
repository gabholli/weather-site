import React from "react"
import { useState, useEffect } from "react"
import Header from "../components/Header"

const Home = () => {

    const [weatherData, setWeatherData] = useState([])
    const [cityName, setCityName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setCityName(event.target.search.value)
        console.log(cityName)
    }

    useEffect(() => {
        fetch(`https://goweather.herokuapp.com/weather/${cityName}`)
            .then(response => {
                if (!response.ok) {
                    throw Error("Data not available")
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
                setWeatherData(data)
            })
            .catch(error =>
                console.error("Fetch error: ", error)
            )
    }, [cityName])

    return (
        <div>
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
            <h1>Test</h1>
        </div>
    )
}

export default Home