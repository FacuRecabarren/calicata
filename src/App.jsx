import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import WhatsappButton from "./components/WhatsappButton/WhatsappButton"
import Viajes from "./views/Viajes/Viajes"
import Excursiones from "./views/Excursiones/Excursiones"


function App() {


  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/travel' element={<Viajes/>}/>
        <Route path='/excursions' element={<Excursiones/>}/>
      </Routes>
      <WhatsappButton/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
