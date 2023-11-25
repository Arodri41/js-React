import { BrowserRouter as  Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./pages/Tienda/ItemList";
import { ItemDetailContainer } from "./pages/Tienda/ItemDetailContainer";
import { TIENDAContextProvider } from "./Context/TiendaContext";
import { Navbar } from "./componentes/navbar";
import Error404 from "./pages/page 404/Error404";
import { CategoriesContext } from './Context/CategoriesContext';
import { CartViewContainer } from ".//pages/Carrito/ShoppingCart"

import "./App.css"

function App() {
  return (
    <div className="App">
    <TIENDAContextProvider>
      <CategoriesContext>
        <Navbar />

         <Routes>
            <Route path="/" element={<ItemListContainer greeting="Matafuegos Premier" />} />
            <Route path="/categoría/:idCategory" element={<ItemListContainer/>} />
            <Route path="/producto/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={ <CartViewContainer /> }/>
            <Route path="*" element={<Error404 />} />
          </Routes>

      </CategoriesContext>
    
    </TIENDAContextProvider>
  </div>
  );
}
 
export default App;