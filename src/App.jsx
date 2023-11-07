
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { Tienda } from "./pages/Tienda/Tienda";
import { Cart } from "./pages/Carrito/cart";
import { TIENDAContextProvider } from "./Context/TiendaContext"
import { Inicio } from "./pages/inicio";
import { Nosotros } from "./pages/nosotros";
import { Navbar } from "./componentes/NavBar";

function App() {
  return (
    <div className="App">
      <TIENDAContextProvider>

          <Navbar />
           <Routes>
              <Route path="/" element={ <Inicio />} /> 
              <Route path="/Tienda" element={<Tienda />} />
              <Route path="/Nosotros" element={ <Nosotros /> } />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            
      </TIENDAContextProvider>
    </div>
  );
}

export default App;