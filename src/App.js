import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoClientes from "./clientes/ListadoClientes";
import Navegacion from "./plantilla/Navegacion";
import AgregarCliente from "./clientes/AgregarCliente";
import EditarCliente from "./clientes/EditarCliente";

function App() {
  return (
    <div className="container">
     <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route exact path='/' element={<ListadoClientes/>}/>
        <Route exact path='/agregar' element={<AgregarCliente/>}/>
        <Route exact path='/editar/:id' element={<EditarCliente/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
