import React,{useState} from 'react'

const Formulario = () => {

    const [info, setInfo] = useState({
        nombre:'',
        celular:''
    })

    return (
        <div class="card m-4 p-3">
             <h2>Componente #4</h2>
        <h4>Formulario</h4>
        <form className="row">
            <div className="col-md-3">
                <input placeholder="Ingrese Nombre"
                class="form-control"
                type="text"/>
            </div>
            <div className="col-md-3">
                <input placeholder="Ingrese Teléfono"
                class="form-control"
                type="text"/>
            </div>
            <div className="col-md-3">
                <button class="btn btn-primary" type="submit">Enviar</button>
            </div>
        </form>
        </div>
      );
}
 
export default Formulario;