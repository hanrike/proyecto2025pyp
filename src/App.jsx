import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './styles/styles.css';
//import './App.css';
import Registro from 'pages/Registro';
import Login from 'pages/Login';
import Admin from 'pages/admin/Admin';
import Index from 'pages/Index';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import Concejo from 'pages/admin/Concejo';
import Clientes from 'pages/admin/Clientes';

function App() {
  return (
    <>
      {/**El Router se debe llamar cuando instalo la libreria y con ello poder gestionar rutas de mi aplicativo*/}
      <Router>
        {/**El Routes permite que sea una y solo una a la pagina que gestionamos para navegar*/}
        <Routes>
          {/**Asi hago que mi navbar y me footer queden en las rutas publicas con el Layout */}
          <Route element={<PublicLayout />}>
            <Route path='/' element={<Index />}/>
            <Route path='/login' element={<Login />}/>{/**lo primero es la ruta y lo siguiente es el elemento que quiero que se renderice*/}
            <Route path='/registro' element={<Registro />}/>
          {/**La ruta base o index puede ir al inicio o al final no importa con este nuevo modelo*/}  
          </Route> 
          {/* Ruta privada o de administración */}
          {/* pongo mi private Layout en mi panel de administracion es diferente mi layout al de login y registro  */}
        <Route element={<PrivateLayout />}>
          <Route path='/admin' element={<Admin />} /> 
          <Route path='/admin/concejo' element={<Concejo />} />   
          <Route path='/admin/clientes' element={<Clientes />} />     
        </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
