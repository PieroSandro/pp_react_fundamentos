import React,{Fragment,useState} from 'react';

type FormElement=React.FormEvent<HTMLFormElement>
interface iTarea{
    name:string,
    done:boolean
}

const FormTypescript = () => {

    
    const[tarea,setTarea]=useState<string>('');  //con ts establecemos el tipo de dato dentro de un estado
    const[listaTareas,setListaTareas]=useState<iTarea[]>([]) //establecemos la interfaz iTarea para decir que listaTareas es un array de objetos
    
    const enviar=(e:FormElement)=>{ //el evento viene de react de un formulario html, tal como se indica en el type "formelement"
        e.preventDefault()
        agregarTarea(tarea)
       setTarea('')
    }

    const agregarTarea=(name:string)=>{ //se esta guardando una tarea de tipo string, como se definio ya arriba
        const nuevasTareas:iTarea[]=[...listaTareas,{name,done:false}]
        setListaTareas(nuevasTareas)
    }

    return ( 
        <Fragment>
        <h2>Formulario</h2>
        <div className="card p-3 mb-4">
        <form onSubmit={enviar}>
            <input type="text" 
            onChange={e=>setTarea(e.target.value)}
            value={tarea} autoFocus/>
            <button>Guardar</button>
        </form>
        </div>

        <div className="card p-3">
        {
            listaTareas.map((ta:iTarea, index:number)=>{
              return  <h3 key={index}>{ta.name} - {ta.done+''}</h3>
            })
        }
        </div>
         </Fragment>
     );
}
 
export default FormTypescript;