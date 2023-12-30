import './App.css';
import { useState, useEffect } from 'react'
import Form from "./components/Form"
import Header from './components/Header'
import Content from './components/Content';

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

  return (
    <div className="bg-background-image bg-no-repeat bg-cover bg-center
      min-h-svh flex justify-center items-center md:text-2xl">
      <div className='flex flex-col justify-center items-center gap-10 bg-gray-400
        p-8 opacity-85 min-h-svh w-svw'>
        <Header />
        <Form
          handleSubmit={handleSubmit}
        />
        <Content
          weatherData={weatherData}
        />
      </div>
    </div>
  )
}

export default App;
