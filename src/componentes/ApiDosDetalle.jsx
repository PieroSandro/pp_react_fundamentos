import React from 'react'
import { useParams } from 'react-router-dom' //useParams es hook

const ApiDosDetalle = () => {

   // console.log(useParams())
    const {id}=useParams()
    console.log(id)

    const [zona,setZona]=React.useState([])

    //el useEffect permite ejecutar acciones al momento que se renderice el dom cuando la pagina se carga
    React.useEffect(()=>{  
        const getData=async()=>{
            const apiData=await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const elementos=await apiData.json()
            setZona(elementos)
        }
       getData()
    },[id])

  

    return (
        <div>
            <h2>{zona.name}</h2>
            <h2>{zona.expansion}</h2>
            <h2>{zona.army_type}</h2>
        </div>
    )
}

export default ApiDosDetalle
