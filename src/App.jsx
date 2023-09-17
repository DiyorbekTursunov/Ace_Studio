import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import { useReducer } from "react"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import NotFound from "./pages/404Page"

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
