import React from 'react'

const ConsumiendoApi = () => {



    const [arrayapi,setArrayapi]=React.useState([])

    //el useEffect permite ejecutar acciones al momento que se renderice el dom cuando la pagina se carga
    React.useEffect(()=>{
       
       // document.title='useEffect'
       getData()
    },[])

    const getData=async()=>{
        const apiData=await fetch('https://jsonplaceholder.typicode.com/todos')
        const elementos=await apiData.json()
        setArrayapi(elementos)

    }

    return ( 
        <div>
            <h2>ConsumiendoApi</h2>
            <ul>
                {
                    arrayapi.map(item=>(
                        <li key={item.id}>{item.id} - {item.title}</li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default ConsumiendoApi;