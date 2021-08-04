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
import ConsumiendoApiDos from './componentes/ConsumiendoApiDos';
import ApiDosDetalle from './componentes/ApiDosDetalle';
import Pks from './componentes/Pks';
import { Provider } from 'react-redux';//permite trabajar con store.js y pkDucks.js
import generateStore from './redux/store';
import FormTypescript from './componentes/FormTypescript';

//function App():JSX.Element {
  const App =():JSX.Element=>{

  const persona={
    nombre:'Nelson',
    urlImg:'https://via.placeholder.com/64',
    texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }

  const store=generateStore()

  return (
    <Router>
    <div className="m-4">
      <h1 className="text-center">Aplicación React</h1>
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
        <NavLink to="/consumiendo-api-parte-dos" 
        className="btn btn-dark"
        activeClassName="active">
          Consumiendo API Parte 2
        </NavLink>
        <NavLink to="/redux" 
        className="btn btn-dark"
        activeClassName="active">
          Redux
        </NavLink>
        <NavLink to="/formulario-typescript" 
        className="btn btn-dark"
        activeClassName="active">
          Formulario con typescript
        </NavLink>
      </div>
      <Switch>
      <Route path="/" exact>
      <Inicio/>
      </Route>
      <Route path="/consumiendo-api-parte-dos/:id">
    <ApiDosDetalle/>
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
      <Route path="/consumiendo-api-parte-dos">
      <ConsumiendoApiDos/>
      </Route>
      <Route path="/redux">
      <Provider store={store}>
      <Pks/>
      </Provider>
      </Route>
      <Route path="/formulario-typescript">
      <FormTypescript/>
      </Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
