import React, {useState} from 'react';
import TablaUsuario from './TablaUsuario';
import {v4 as uuidv4} from 'uuid';
import AgregarUsuarioForm from './AgregarUsuarioForm';
import EditarUsuarioForm from './EditarUsuarioForm';

const Crud = () => {

    const usuariosData = [
        { id: uuidv4(), nombre: 'Piero', nombreUsuario: 'piero123' },
        { id: uuidv4(), nombre: 'Carlos', nombreUsuario: 'carlos222' },
        { id: uuidv4(), nombre: 'Felipe', nombreUsuario: 'fel145' },
      ]

    const [usuarios, setUsuarios] = useState(usuariosData)

    //agregar
    const agregarUsuario=(usuario)=>{
        usuario.id=uuidv4()
        setUsuarios([
            ...usuarios,
            usuario
        ])
    }

    //eliminar
    const eliminarUsuario=(id)=>{
        const arrayFiltro=usuarios.filter(usuario=>usuario.id!==id)
       setUsuarios(arrayFiltro)
    }

    //editar
    const [edit, setEdit]=useState(false)
    const [currentUser,setCurrentUser]=useState({
        id:null,nombre:'',nombreUsuario:''
    })
    const editarRegistro=(usuario)=>{
        setEdit(true)
        setCurrentUser({
            id:usuario.id,
            nombre:usuario.nombre,
            nombreUsuario:usuario.nombreUsuario
        })
    }

    const actualizarUsuario=(id,usuarioActualizado)=>{
        setEdit(false)
        setUsuarios(usuarios.map(usuario=>(usuario.id===id?usuarioActualizado:usuario)))
    }


    return ( 
        <div class="card m-4 p-3">
            <h2>Componente #10</h2>
        <h4>CRUD</h4>
            <div className="flex-row">
                <div class="flex-large">

                    {
                        edit?(
                            <div>
                                 <h2>Editar Usuario</h2>
                                <EditarUsuarioForm
                                    currentUser={currentUser}
                                    actualizarUsuario={actualizarUsuario}
                                />
                            </div>
                        ) : (
                            <div>
                            <h2>Agregar Usuario</h2>
                            <AgregarUsuarioForm agregarUsuario={agregarUsuario}/>
                            </div>
                        )
                    }
                   
                </div>
                <div class="flex-large">
                    <h2>Lista usuarios</h2>
                    <TablaUsuario usuarios={usuarios}
                    eliminarUsuario={eliminarUsuario} 
                    editarRegistro={editarRegistro}/>
                </div>
            </div>
        </div>
     );
}
 
export default Crud;