import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import AddData from "./Pages/AddData"
import NotFound from "./Pages/NotFound"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-data" element={<AddData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
