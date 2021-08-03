//thunk es para hacer promesas en redux

import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//en store se importan reducers, cuando se trabajan con ducks
import pkReducer from './pkDucks'

//debajo se combinan los reducers que vienen del ducks
const rootReducer=combineReducers({
    pokemones: pkReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //esta linea es para la extension de google chrome

export default function generateStore(){
    const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))//configuracion total del store con reducer y la extension
    return store
}