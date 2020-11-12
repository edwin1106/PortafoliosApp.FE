import { creatingUsuario } from '../actions/Usuarios';
import { connect } from 'react-redux';
import CrearUsuario from '../components/CrearUsuario';

export default connect(null, { creatingUsuario })(CrearUsuario)
