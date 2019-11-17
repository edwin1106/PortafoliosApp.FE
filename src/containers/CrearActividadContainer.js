import {creatingActividad} from '../actions/Actividades';
import {connect} from 'react-redux';
import CrearActividad from '../components/CrearActividad';

export default connect(null,{creatingActividad})(CrearActividad)
