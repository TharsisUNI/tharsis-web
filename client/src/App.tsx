import { Route, Routes } from "react-router-dom"
import Building from "./pages/Building"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Building/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
