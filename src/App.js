import './App.css';
import { useState, useEffect } from 'react'
import Form from "./components/Form"
import Header from './components/Header';

const App = () => {
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

  const threeDayForecast = weatherData.forecast?.map((day, index) => {
    return (
      <>
        <p>Day: {day.day}</p>
        <p>Temperature: {day.temperature}</p>
        <p>Wind Speed: {day.wind}</p>
      </>
    )
  })

  return (
    <div>
      <Header />
      <Form
        handleSubmit={handleSubmit}
      />
      <div>
        <h1>Description: {weatherData.description}</h1>
        <h1>Three Day Forecast:</h1>
        {threeDayForecast}
        <h1>Current Temperature: {weatherData.temperature}</h1>
        <h1>Current Wind Speed: {weatherData.wind}</h1>
      </div>
    </div>

  )
}

export default App;
