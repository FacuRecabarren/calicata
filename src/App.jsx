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
import ViajesArgentina from "./views/Travel/ViajesArgentina/ViajesArgentina"
import ViajesArgentinaDetail from "./views/Travel/ViajesArgentina/DetailViajesArgentina/ViajesArgentinaDetail"
import Tenis from "./views/Eventos/Tenis/Tenis"
import DetailTenis from "./views/Eventos/Tenis/DetailTenis/DetailTenis"
import Eventos2 from "./views/Eventos2/Eventos2"
import DetailEventos2 from "./views/Eventos2/DetailEventos2/DetailEventos2"
import TravelAr from "./views/Travel/ViajesArgentina/ViajesAr"
import Summer from "./views/Summer2024/Summer"
import SummerDetail from "./views/Summer2024/SummerDetail"

function App() {


  return (
      <BrowserRouter>
      
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/summer' element={<Summer/>}/>
          <Route path='/summer/:id' element={<SummerDetail/>}/>
          <Route path='/travel/world' element={<Viajes/>}/>
          <Route path='/travel/world/:id' element={<DetailViajes/>} />
          <Route path='/argentina/travelargentina' element={<ViajesArgentina/>} />
          <Route path='/argentina/travelargentina/:id' element={<ViajesArgentinaDetail/>} />
          <Route path='/recitals' element={<Eventos2/>} />
          <Route path='/recitals/:id' element={<DetailEventos2/>} />
          <Route path='/argentina' element={<TravelAr/>} />
          <Route path='/argentina/mendoza' element={<Mendoza/>}/>
          <Route path='/argentina/mendoza/:id' element={<DetailMendoza/>} />
          <Route path='/sports' element={<Eventos/>}/>
          <Route path='/sports/formula1' element={<Formula1/>}/>
          <Route path='/sports/formula1/:id' element={<DetailFormula1/>} />
          <Route path='/sports/futbol' element={<Futbol/>}/>
          <Route path='/sports/futbol/:id' element={<DetailFutbol/>} />
          <Route path='/sports/tennis' element={<Tenis/>}/>
          <Route path='/sports/tennis/:id' element={<DetailTenis/>} />
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <WhatsappButton/>
    </BrowserRouter>
  )
}

export default App
