import React,{useState} from 'react'

const Formulario = () => {

    const [info, setInfo] = useState({
        nombre:'',
        celular:''
    })

    const handleInputChange=(event)=>{
        setInfo({
            ...info,
            [event.target.name]:event.target.value
        })
    }

    const enviar=(event)=>{
        event.preventDefault()
        console.log(info.nombre+'-'+info.celular)
    }

    return (
        <div class="card m-4 p-3">
             <h2>Componente #4</h2>
        <h4>Formulario</h4>
        <form class="row" onSubmit={enviar}>
            <div class="col-md-3">
                <input placeholder="Ingrese Nombre"
                class="form-control"
                type="text"
                name="nombre"
                onChange={handleInputChange}/>
            </div>
            <div class="col-md-3">
                <input placeholder="Ingrese Teléfono"
                class="form-control"
                type="text"
                name="celular"
                onChange={handleInputChange}/>
            </div>
            <div class="col-md-3">
                <button class="btn btn-primary" type="submit">Enviar</button>
            </div>
        </form>
        <h3>{info.nombre} - {info.celular}</h3>
        </div>
      );
}
 
export default Formulario;