import axios from "axios"

//constantes - state inicial
const infoInicial={
    arElements:[] //con el reducer, este 'arElements' estara lleno de datos que vienen del payload
}
//types
const OBTENER_PKS_EXITO='OBTENER_PKS_EXITO'
//reducer
export default function pkReducer(state=infoInicial,action){
    switch(action.type){ //el switch lee la accion (como obtenerPksAccion) y luego el type 
      case OBTENER_PKS_EXITO:
          return {...state,arElements:action.payload}
      default:
          return state
    }
}
//acciones
export const obtenerPksAccion=()=>async (dispatch,getState)=>{
    try{
        const res=await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        //Los resultados del axios estan en 'res.data.results'
        dispatch({
            type:OBTENER_PKS_EXITO,
            payload:res.data.results
        })
    }catch(error){
        console.log(error)
    }
}