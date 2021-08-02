import React from 'react'
import { Link } from 'react-router-dom'


const ConsumiendoApiDos = () => {

    const [arrayapi,setArrayapi]=React.useState([])

    //el useEffect permite ejecutar acciones al momento que se renderice el dom cuando la pagina se carga
    React.useEffect(()=>{  
       // document.title='useEffect'
       getData()
    },[])

    const getData=async()=>{
        const apiData=await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const elementos=await apiData.json()
        setArrayapi(elementos.civilizations)
    }

    return ( 
        <div>
            <h2>Consumiendo Api - Parte 2</h2>
            <ul>
                {
                    arrayapi.map(item=>(
                        <li key={item.id}>
                            <Link to={`/consumiendo-api-parte-dos/${item.id}`}>
                            {item.id} - {item.name} - {item.army_type}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default ConsumiendoApiDos;