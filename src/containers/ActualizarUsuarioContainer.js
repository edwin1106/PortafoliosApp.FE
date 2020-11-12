import { updatingUsuario, fetchingUsuarioById } from '../actions/Usuarios';
import { connect } from 'react-redux';
import ActualizarUsuario from '../components/ActualizarUsuario';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  initialValues: state.usuario.actualizarUsuarioData
})

export default withRouter(connect(mapStateToProps, { updatingUsuario, fetchingUsuarioById })(ActualizarUsuario))
