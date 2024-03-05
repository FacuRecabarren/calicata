import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Viajes from "./views/Viajes/Viajes"
import Excursiones from "./views/Excursiones/Excursiones"
import Eventos from "./views/Eventos/Eventos"
import Formula1 from "./views/Eventos/Formula1/Formula1"


function App() {


  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/travel' element={<Viajes/>}/>
        <Route path='/excursions' element={<Excursiones/>}/>
        <Route path='/events' element={<Eventos/>}/>
        <Route path='/events/formula1' element={<Formula1/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
