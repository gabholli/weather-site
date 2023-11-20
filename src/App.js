import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Description from './sections/Description'
import Forecast from './sections/Forecast'
import Home from './sections/Home'
import Temperature from './sections/Temperature'
import Wind from './sections/Wind'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="desc" element={<Description />} />
          <Route path="forecast" element={<Forecast />} />
          <Route path="temp" element={<Temperature />} />
          <Route path="wind" element={<Wind />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
