import React from 'react';
import Counter from './componentes/Counter';
import Jsx from './componentes/Jsx';
import Lista from './componentes/Lista';
import Formulario from './componentes/Formulario';
import FormHook from './componentes/FormHook';
import ComponenteEjemplo from './componentes/ComponenteEjemplo';
import Hola from './componentes/Hola';
import Comentario from './componentes/Comentario';

//function App() {
  const App =()=>{

  const persona={
    nombre:'Nelson',
    urlImg:'https://via.placeholder.com/64',
    texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }

  return (
    <div class="m-4">
      <h1 class="text-center">Hola React</h1>
      <Counter/>
      <Jsx/>
      <Lista/>
      <Formulario/>
      <FormHook/>
      <ComponenteEjemplo/>
      <Hola numero="7" usuario="Piero" edad={32}/>
      <Hola numero="8" usuario="Renzo" edad={34}/>
      <Comentario persona={persona}/>
    </div>
  );
}

export default App;
