import Header_component from './components/Header_components'
import Footer_component from './components/Footer_components'
import Home from './pages/Home'
import  About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login' 
import UserHome from './pages/UserHome'
import Register from './pages/Register'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {  
  return (
    <div>
     <Header_component></Header_component> 
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/userhome" element={<UserHome/>}></Route>
       <Route path="/register" element={<Register/>}></Route>
    </Routes>
    <Footer_component></Footer_component>
    </div>
  )
}
export default App
