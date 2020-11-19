import {fetchingUsuariosByActividadId, removingActividadUsuario} from '../actions/ActividadUsuarios';
import {connect} from 'react-redux';
import ActividadUsuarios from '../components/ActividadUsuarios';
import {withRouter} from 'react-router'

const mapStateToProps = (state) => ({
  actividadUsuarios: state.actividadUsuarios.actividadUsuariosData
})

export default withRouter(connect(mapStateToProps,{fetchingUsuariosByActividadId, removingActividadUsuario})(ActividadUsuarios))
