import { BrowserRouter as router, Routes, Route } from "react-router-dom";
import { Tienda } from "./pages/Tienda/Tienda";
import { ShoppingCart } from "./pages/Carrito/ShoppingCart";
import { TIENDAContextProvider } from "./Context/TiendaContext"
import { Inicio } from "./pages/inicio";
import { Nosotros } from "./pages/nosotros";
import { Navbar } from "./componentes/NavBar";
import "./App.css"

function App() {
  return (
    <div className="App">
    <TIENDAContextProvider>
     
        <Navbar />
         <Routes>
            <Route path="/" element={ <Inicio />} />
            <Route path="/Tienda" element={<Tienda />} />
            <Route path="/Nosotros" element={ <Nosotros /> } />
            <Route path="/cart" element={ <ShoppingCart /> }/>
          </Routes>
     
    </TIENDAContextProvider>
  </div>
  );
}
 
export default App;