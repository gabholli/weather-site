import './App.css';
import { useState, useEffect } from 'react'
import Form from "./components/Form"
import Header from './components/Header'
import Content from './components/Content';

const App = () => {
  const [weatherData, setWeatherData] = useState([])
  const [cityName, setCityName] = useState({
    city: ""
  })

  const handleSubmit = () => {
    setCityName(prevCity => ({
      city: ""
    }))
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setCityName(prevCity => ({
      city: "",
      [name]: value
    }))
  }

  useEffect(() => {
    fetch(`https://goweather.herokuapp.com/weather/sacramento`)
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
      <Header />
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        cityName={cityName.city}
      />
      <Content
        weatherData={weatherData}
      />
    </div>
  )
}

export default App;
