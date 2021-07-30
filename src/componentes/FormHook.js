import React from 'react'
import {useForm} from 'react-hook-form'

const FormHook = () => {

    //const {register,errors,handleSubmit}=useForm()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit=(data,e)=>{
        console.log(data)
        e.target.reset()
    }

    return ( 
        <div class="card m-4 p-3">
            <h2>Componente #5</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                name="nombre"
                type="text"
                class="form-control mb-2"
                {...register("nombre", {
                                            required: {value:true,message:'Campo obligatorio'},
                                            minLength: {value:2,message:'Debe ingresar mínimo 2 caracteres'},
                                            maxLength: {value:15,message:'Debe ingresar máximo 5 caracteres'},
                                            pattern: {value:/^[A-Za-z]+$/i,message:'Debe ingresar sólo letras'}
                                        })} />   
                                        <span class="text-danger text-small d-block mb-2">
                                            {errors?.nombre?.message}
                                            </span>   
          
                <button class="btn btn-primary">Enviar</button>
            </form>
        </div>
     );
}
 
export default FormHook;