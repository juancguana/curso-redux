import { combineReducers } from 'redux';
import usuariosReducers from './usuariosReducers';
import publicacionesReducers from './publicacionesReducers';

export default combineReducers({
  usuariosReducers,
  publicacionesReducers,
});
