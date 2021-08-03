import React from 'react'

import { useDispatch, useSelector } from 'react-redux' //usedispatch para consumir la accion, useselector para leer las constantes de los ducks
import { obtenerPksAccion,nextPokeAccion } from '../redux/pkDucks'

const Pks = () => {
    const dispatch=useDispatch()//llama a la accion que se encuentra en pkDucks.js

    const pokes=useSelector(store=>store.pokemones.arElements) //store.pokemones viene del rootreducer del store.js

    return (
        <div class="m-4">
            <h2 class="text-center">Uso de redux con Pokemones</h2>
            
            <button onClick={()=>dispatch(obtenerPksAccion())}>Obtener Pokemones</button>
            <button onClick={()=>dispatch(nextPokeAccion(20))}>Siguiente</button>
         
                 {
                     pokes.map(item=>(
                            <div class="card my-4" key={item.name}>
                                <div class="card-body">
                                {item.name }
                                </div>
                            </div>
                     ))
                 }
           
        </div>
    )
}

export default Pks
