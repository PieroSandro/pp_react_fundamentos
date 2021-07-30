import React from 'react'
import Avatar from './Avatar';

const Comentario = ({persona}) => {
    return ( 
        <div class="card m-4 p-3">
        <h2>Componente #9</h2>
        <div className="media">
            {/*<img class="mr-3" src={persona.urlImg} alt=""/>*/}
            <Avatar urlImg={persona.urlImg}/>
            <div className="media-body">
                <h5 className="mt-0">{persona.nombre}</h5>
                {persona.texto}
            </div>
        </div>
    </div>
     );
}
 
export default Comentario;