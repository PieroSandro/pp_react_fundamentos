import React from 'react';
import Counter from './componentes/Counter';
import Jsx from './componentes/Jsx';
import Lista from './componentes/Lista';

//function App() {
  const App =()=>{
  return (
    <div class="m-4">
      <h1 class="text-center">Hola React</h1>
      <Counter/>
      <Jsx/>
      <Lista/>
    </div>
  );
}

export default App;
