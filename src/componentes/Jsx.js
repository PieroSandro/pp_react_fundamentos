import React from 'react'

const Jsx = () => {
    const cad_1='Esto es una cadena inicial'
    const nota=11

    return ( 
        <div class="card m-4 p-3">
        <h2>Componente #2</h2>
        <h4>¿Qué es esto? {cad_1}</h4>
        <h4>¿Es nota aprobatoria (mayor que 10)?</h4>
        <h4>
            {
                nota>10?'Aprobatoria':'No aprobatoria'
            }
        </h4>
        </div>
     );
}
 
export default Jsx;