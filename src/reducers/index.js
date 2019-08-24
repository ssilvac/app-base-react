import { combineReducers } from 'redux';
import moduloReducer from './modulo';
import appReducer from './app';
import validacionReducer from './validacion';

export default combineReducers({
    modulo: moduloReducer,
    app: appReducer,
    validacion: validacionReducer,
});