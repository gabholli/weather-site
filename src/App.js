import './App.css';
import { useState, useEffect } from 'react'
import Form from "./components/Form"
import Header from './components/Header'
import Content from './components/Content';

const App = () => {
  const [weatherData, setWeatherData] = useState([])
  const [cityName, setCityName] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setCityName(event.target.search.value)
    console.log(cityName)
  }

  useEffect(() => {
    setLoading(true)
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
        setLoading(false)
      })
      .catch(error =>
        console.error("Fetch error: ", error)
      )

  }, [cityName])

  // if (loading) {
  //   return <h1 className="text-center text-2xl flex-1 pt-20">Loading...</h1>
  // }

  return (
    <div className="bg-background-image bg-no-repeat bg-cover bg-center
      min-h-svh flex justify-center items-center md:text-2xl">
      <div className='flex flex-col justify-center items-center gap-24 bg-gray-400
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
