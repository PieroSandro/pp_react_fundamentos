import React,{useState} from 'react'

const Lista = () => {

    const [arrayNum,setarrNum]=useState([1,2,3])

    const [num,setNum]=useState(3)

    const agregarItem=()=>{
        setNum(num+1)
        setarrNum([
            ...arrayNum,
           num+1
        ])//podemos hacer setNum([...arrayNum,...arrayNum])
    }

    return ( 
        <div class="card m-4 p-3">
             <h2>Componente #3</h2>
        <h4>Lista</h4>
        <div class="d-grid gap-2 col-3 mx-left">
        <button type="button" class="btn btn-primary" onClick={agregarItem}>Agregar</button>
        </div>
        {
            arrayNum.map((arn,index)=>
                <li key={index}>{arn}-{index}</li>
            )
        }
        </div>
     );
}
 
export default Lista;