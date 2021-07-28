//uso de Hooks con useState
//Fragment es para reemplazar 'divs' padres
import React,{useState, Fragment} from 'react';

const Counter = () => {

    //con hooks, en la siguiente linea, tenemos un estado llamado 'contador' (que tendra un valor inicial) y 'setcontador' es el que lo modifica
    const[contador,setContador]=useState(0);//0 es el valor inicial de 'contador'

    const aumentar=()=>{
        setContador(contador+1)
    }

    return ( 
        <div class="card m-4 p-3">
            <h2>Componente #1</h2>
        <h4>Componente para contador: {contador}</h4>
        <div class="d-grid gap-2 col-3 mx-auto">
        <button type="button" class="btn btn-primary" onClick={aumentar}>Aumentar</button>
        </div>
        </div>
     );
}
 
export default Counter;