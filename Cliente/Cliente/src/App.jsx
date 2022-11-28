import Topbar from './components/topbar/Topbar'
import Navbar from './components/navbar/Navbar'
import Graphic from './components/graphic/Graphic';
import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Graphic imagen={"Eficiencia.png"} />} />
        <Route path="/speed" element={<Graphic imagen={"Speed(GFLOPS).png"} />} />
        <Route path="/speedup" element={<Graphic imagen={"Speedup.png"} />} />
        <Route path="/comunicacion" element={<Graphic imagen={"Tiempo-comunicacion.png"} />} />
        <Route path="/fuerza" element={<Graphic imagen={"Tiempo-fuerza.png"} />} />
        <Route path="/total" element={<Graphic imagen={"Tiempo-total.png"} />} />
      </Routes >
    </>
  )
}

export default App
