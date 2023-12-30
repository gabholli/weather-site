import React from "react"

const Content = ({ weatherData }) => {

    const threeDayForecast = weatherData.forecast?.map((day, index) => {
        return (
            <div key={index}>
                <h2 className="text-xl">Day: {day.day}</h2>
                <p className="text-lg font-normal">Temperature: {day.temperature}</p>
                <p className="text-lg font-normal">Wind Speed: {day.wind}</p>
            </div>
        )
    })

    return (
        <>
            {weatherData.description ?
                (<div className="text-center flex flex-col gap-4 font-bold">
                    <h1>Description: {weatherData.description}</h1>
                    <h1>Three Day Forecast:</h1>
                    {threeDayForecast}
                    <h1>Current Temperature: {weatherData.temperature}</h1>
                    <h1>Current Wind Speed: {weatherData.wind}</h1>
                </div>)
                : <p className="text-2xl font-medium">No data yet...</p>}
        </>
    )
}

export default Content