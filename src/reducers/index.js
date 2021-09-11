import { combineReducers } from 'redux';
import usuariosReducers from './usuariosReducers';
import publicacionesReducers from './publicacionesReducers';
import tareasReducers from './tareasReducers';

export default combineReducers({
  usuariosReducers,
  publicacionesReducers,
  tareasReducers,
});
