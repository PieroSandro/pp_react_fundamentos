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
        <Fragment>
        <h3>Componente para contador: {contador}</h3>
        <button onClick={aumentar}>Aumentar</button>
        </Fragment>
     );
}
 
export default Counter;