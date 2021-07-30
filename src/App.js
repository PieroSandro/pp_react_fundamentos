import React from 'react';
import Counter from './componentes/Counter';
import Jsx from './componentes/Jsx';
import Lista from './componentes/Lista';
import Formulario from './componentes/Formulario';
import FormHook from './componentes/FormHook';
import ComponenteEjemplo from './componentes/ComponenteEjemplo';

//function App() {
  const App =()=>{
  return (
    <div class="m-4">
      <h1 class="text-center">Hola React</h1>
      <Counter/>
      <Jsx/>
      <Lista/>
      <Formulario/>
      <FormHook/>
      <ComponenteEjemplo/>
    </div>
  );
}

export default App;
