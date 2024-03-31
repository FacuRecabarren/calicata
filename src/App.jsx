import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home/Home"
import Viajes from "./views/Travel/Viajes/Viajes"
import Eventos from "./views/Eventos/Eventos"
import Formula1 from "./views/Eventos/Formula1/Formula1"
import DetailFormula1 from "./views/Eventos/Formula1/DetailFormula1/DetailFormula1"
import Futbol from "./views/Eventos/Futbol/Futbol"
import DetailFutbol from "./views/Eventos/Futbol/DetailFutbol/DetailFutbol"
import DetailViajes from "./views/Travel/Viajes/DetailViajes/DetailViajes"
import Mendoza from "./views/Mendoza/Mendoza"
import DetailMendoza from "./views/Mendoza/DetailMendoza/DetailMendoza"
import Layout from "./components/Layout/Layout"
import Error from "./components/Error/Error"
import WhatsappButton from "./components/WhatsappButton/WhatsappButton"
import Travel from "./views/Travel/Travel"
import ViajesArgentina from "./views/Travel/ViajesArgentina/ViajesArgentina"
import ViajesArgentinaDetail from "./views/Travel/ViajesArgentina/DetailViajesArgentina/ViajesArgentinaDetail"

function App() {


  return (
      <BrowserRouter>
      
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/travel' element={<Travel/>}/>
          <Route path='/travel/world' element={<Viajes/>}/>
          <Route path='/travel/world/:id' element={<DetailViajes/>} />
          <Route path='/travel/argentina' element={<ViajesArgentina/>} />
          <Route path='/travel/argentina/:id' element={<ViajesArgentinaDetail/>} />
          <Route path='/mendoza' element={<Mendoza/>}/>
          <Route path='/mendoza/:id' element={<DetailMendoza/>} />
          <Route path='/events' element={<Eventos/>}/>
          <Route path='/events/formula1' element={<Formula1/>}/>
          <Route path='/events/formula1/:id' element={<DetailFormula1/>} />
          <Route path='/events/futbol' element={<Futbol/>}/>
          <Route path='/events/futbol/:id' element={<DetailFutbol/>} />
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <WhatsappButton/>
    </BrowserRouter>
  )
}

export default App
