import React from 'react';
import Counter from './componentes/Counter';
import Jsx from './componentes/Jsx';
import Lista from './componentes/Lista';
import Formulario from './componentes/Formulario';
import FormHook from './componentes/FormHook';
import ComponenteEjemplo from './componentes/ComponenteEjemplo';
import Hola from './componentes/Hola';
import Comentario from './componentes/Comentario';
import Crud from './componentes/Crud';
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Detalles from './componentes/Detalles';
import ConsumiendoApi from './componentes/ConsumiendoApi';

//function App() {
  const App =()=>{

  const persona={
    nombre:'Nelson',
    urlImg:'https://via.placeholder.com/64',
    texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }

  return (
    <Router>
    <div class="m-4">
      <h1 class="text-center">Aplicación React</h1>
      <div className="btn-group">
        <Link to="/" 
        className="btn btn-dark">
          Inicio
        </Link>
        <Link to="/react-ejemplos"
        className="btn btn-dark">
          Ejemplos React
        </Link>
        <NavLink to="/detalles" 
        className="btn btn-dark"
        activeClassName="active">
          Detalles
        </NavLink>
        <NavLink to="/consumiendo-api" 
        className="btn btn-dark"
        activeClassName="active">
          Consumiendo API
        </NavLink>
      </div>
      <Switch>
      <Route path="/" exact>
      <Inicio/>
      </Route>
      <Route path="/react-ejemplos">
      <Counter/>
      <Jsx/>
      <Lista/>
      <Formulario/>
      <FormHook/>
      <ComponenteEjemplo/>
      <Hola numero="7" usuario="Piero" edad={32}/>
      <Hola numero="8" usuario="Renzo" edad={34}/>
      <Comentario persona={persona}/>
      <Crud/>
      </Route>
      <Route path="/detalles">
      <Detalles/>
      </Route>
      <Route path="/consumiendo-api">
      <ConsumiendoApi/>
      </Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
