import React,{Fragment,useState} from 'react';

const FormTypescript = () => {

    
    const[tarea,setTarea]=useState('');  
    
    const enviar=()=>{
        console.log('se envia')
    }

    return ( 
        <Fragment>
        <h2>Formulario</h2>
        <form onSubmit={enviar}>
            <input type="text" onChange={e=>setTarea(e.target.value)}/>
            <button>Guardar</button>
        </form>
         </Fragment>
     );
}
 
export default FormTypescript;