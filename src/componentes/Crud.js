import React from 'react';
import TablaUsuario from './TablaUsuario';

const Crud = () => {
    return ( 
        <div class="card m-4 p-3">
            <h2>Componente #10</h2>
        <h4>CRUD</h4>
            <div className="flex-row">
                <div class="flex-large">
                    <h2>Agregar Usuario</h2>
                </div>
                <div class="flex-large">
                    <h2>Lista usuarios</h2>
                    <TablaUsuario/>
                </div>
            </div>
        </div>
     );
}
 
export default Crud;