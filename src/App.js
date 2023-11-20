import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
