import React from 'react'
import { useForm } from 'react-hook-form';

const AgregarUsuarioForm = (props) => {

    const {register, handleSubmit, formState: { errors } }=useForm()

    const onSubmit=(data,e)=>{
        props.agregarUsuario(data)
        e.target.reset()
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input type="text" name="nombre" 
       {...register("nombre", {
        required: {value:true,message:'Campo nombre obligatorio'},
        minLength: {value:2,message:'Debe ingresar mínimo 2 caracteres'},
        maxLength: {value:15,message:'Debe ingresar máximo 5 caracteres'},
        pattern: {value:/^[A-Za-z]+$/i,message:'Debe ingresar sólo letras'}
    })}
      />
       <span class="text-danger text-small d-block mb-2">
                                            {errors?.nombre?.message}
                                            </span> 
      <label>Nombre Usuario</label>
      <input type="text" name="nombreUsuario"
       {...register("nombreUsuario", {
        required: {value:true,message:'Campo nombre de usuario obligatorio'},
        minLength: {value:2,message:'Debe ingresar mínimo 2 caracteres'},
        maxLength: {value:15,message:'Debe ingresar máximo 5 caracteres'},
        pattern: {value:/^[A-Za-z]+$/i,message:'Debe ingresar sólo letras'}
    })}
      />
       <span class="text-danger text-small d-block mb-2">
                                            {errors?.nombreUsuario?.message}
                                            </span> 
      <button>Agregar usuario</button>
    </form>
     );
}
 
export default AgregarUsuarioForm;