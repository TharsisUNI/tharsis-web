import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Building from './pages/Building';
import Dashboard from "./pages/Dashboard";
import Landing from './pages/Landing';
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/building" element={<Building/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
