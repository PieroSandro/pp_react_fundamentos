import React from 'react'

const Hola = (props) => {
    console.log(props)
    return ( 
        <div class="card m-4 p-3">
            <h2>Componente #{props.numero}</h2>
            <h4>Hola {props.usuario}</h4>
            <h4>{props.usuario} tiene {props.edad} años</h4>
        </div>
     );
}
 
export default Hola;