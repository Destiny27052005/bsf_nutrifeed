import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import AddData from "./Pages/AddData"
import NotFound from "./Pages/NotFound"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-data" element={<AddData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
