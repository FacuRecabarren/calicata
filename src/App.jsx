import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import WhatsappButton from "./components/WhatsappButton/WhatsappButton"
import Viajes from "./views/Viajes/Viajes"
import Excursiones from "./views/Excursiones/Excursiones"
import Eventos from "./views/Eventos/Eventos"


function App() {


  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/travel' element={<Viajes/>}/>
        <Route path='/excursions' element={<Excursiones/>}/>
        <Route path='/events' element={<Eventos/>}/>
      </Routes>
      <WhatsappButton/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
