import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./views/Contact/Contact"
import Home from "./views/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import WhatsappButton from "./components/WhatsappButton/WhatsappButton"


function App() {


  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <WhatsappButton/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
