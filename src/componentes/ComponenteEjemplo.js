import React,{useState} from 'react'
import {useForm} from 'react-hook-form'

const ComponenteEjemplo = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [Datos, setDatos] = useState([])

    const onSubmit=(data,event)=>{
        console.log(data)
        setDatos([
            ...Datos,
            data
        ])
        event.target.reset()
    }

    return ( 
        <div class="card m-4 p-3">
        <h2>Componente #6</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="nombre" placeholder="Ingrese nombre" 
            class="form-control my-2"
            {
                ...register("nombre",{
                    required:{value:true,message:'Campo obligatorio'},
                    minLength:{value:2,message:'Debe ingresar mínimo 2 letras'}
                })
            }/>
              {errors.nombre &&
            <span class="text-danger text-small d-block mb-2">
            {errors.nombre.message}
            </span>
            }
             <input name="apellido" placeholder="Ingrese apellido" 
            class="form-control my-2"
            {
                ...register("apellido",{
                    required:{value:true,message:'Campo obligatorio'},
                    minLength:{value:2,message:'Debe ingresar mínimo 2 letras'}
                })
            }/>
            {errors.apellido &&
            <span class="text-danger text-small d-block mb-2">
            {errors.apellido.message}
            </span>
            }
           
            <button class="btn btn-primary">Guardar</button>
        </form>
        <ul>
            {
                Datos.map(item=>
                    <li>{item.nombre} - {item.apellido}</li>)
            }
        </ul>
    </div>
     );
}
 
export default ComponenteEjemplo;