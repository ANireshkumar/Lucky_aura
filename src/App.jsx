import Navbar from "./Components/Navbar"
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"
import Login from "./Pages/Login"
import About from "./Pages/About"


const App = () => {
  return (
    <>
    <div>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/products" element={<Products />} />
       <Route path="/about" element={<About />} />
       <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    
    </>
  )
}

export default App