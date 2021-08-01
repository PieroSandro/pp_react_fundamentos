import React from 'react'
import { useForm } from 'react-hook-form';

const EditarUsuarioForm = (props) => {

  //  console.log(props.currentUser)
    //Destructuracion en linea 8
    const {register, handleSubmit, formState: { errors },setValue }=useForm({
      defaultValues:props.currentUser
    })

    setValue('nombre',props.currentUser.nombre)
    setValue('nombreUsuario',props.currentUser.nombreUsuario)

    const onSubmit=(data,e)=>{
        console.log(data)
        data.id=props.currentUser.id
        props.actualizarUsuario(props.currentUser.id,data)
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
        maxLength: {value:15,message:'Debe ingresar máximo 5 caracteres'}
    })}
      />
       <span class="text-danger text-small d-block mb-2">
                                            {errors?.nombreUsuario?.message}
                                            </span> 
      <button>Editar usuario</button>
    </form>
     );
}
 
export default EditarUsuarioForm;