import React from "react"

const Content = ({ weatherData }) => {

    const threeDayForecast = weatherData.forecast?.map((day, index) => {
        return (
            <div key={index}>
                <h3>Day: {day.day}</h3>
                <h3>Temperature: {day.temperature}</h3>
                <h3>Wind Speed: {day.wind}</h3>
            </div>
        )
    })

    return (
        <>
            {weatherData.description ?
                <div>
                    <h1>Description: {weatherData.description}</h1>
                    <h1>Three Day Forecast:</h1>
                    {threeDayForecast}
                    <h1>Current Temperature: {weatherData.temperature}</h1>
                    <h1>Current Wind Speed: {weatherData.wind}</h1>
                </div>
                : <p className="no-result-text">No data.</p>}
        </>
    )
}

export default Content