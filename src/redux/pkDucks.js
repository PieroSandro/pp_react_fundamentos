import axios from "axios"

//constantes - state inicial
const infoInicial={
    arElements:[], //con el reducer, este 'arElements' estara lleno de datos que vienen del payload
    offset:0
}
//types
const OBTENER_PKS_EXITO='OBTENER_PKS_EXITO'
const SIGUIENTE_PKS_EXITO='SIGUIENTE_PKS_EXITO'
//reducer
export default function pkReducer(state=infoInicial,action){
    switch(action.type){ //el switch lee la accion (como obtenerPksAccion) y luego el type 
      case OBTENER_PKS_EXITO:
          return {...state,arElements:action.payload}
      case SIGUIENTE_PKS_EXITO:
          return {...state,arElements:action.payload.array,offset:action.payload.offset}
      default:
          return state
    }
}
//acciones
export const obtenerPksAccion=()=>async (dispatch,getState)=>{
   
    //const {offset}=getState().pokemones
    const offset=getState().pokemones.offset

    try{
        const res=await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        //Los resultados del axios estan en 'res.data.results'
        dispatch({
            type:OBTENER_PKS_EXITO,
            payload:res.data.results
        })
    }catch(error){
        console.log(error)
    }
}


export const nextPokeAccion=(numero)=>async(dispatch,getState)=>{//funcion para la navegacion
    const offset=getState().pokemones.offset
    const nextPokes=offset+numero
    try{
        const res=await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${nextPokes}&limit=20`)
        dispatch(
            {
                type:SIGUIENTE_PKS_EXITO,
                payload:{
                    array:res.data.results,
                    offset:nextPokes
                }
            }
        )
    }catch(error){
        console.log(error)
    }
}