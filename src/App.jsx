import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./views/Contact/Contact"
import Home from "./views/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"


function App() {


  return (
      <BrowserRouter>
      <div className='fixed w-full z-20'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
