import React from 'react'

const TablaUsuario = (props) => {

    console.log(props.usuarios)
    return ( 
        <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        props.usuarios.length>0?
        props.usuarios.map(usuario=>(
          <tr key={usuario.id}>
        <td>{usuario.nombre}</td>
        <td>{usuario.nombreUsuario}</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button"
          onClick={()=>{props.eliminarUsuario(usuario.id)}}>Delete</button>
        </td>
      </tr>
        )) : (
          <tr>
            <td colSpan={3}>No hay usuarios</td>
          </tr>
        )
      }
      
    </tbody>
  </table>
     );
}
 
export default TablaUsuario;