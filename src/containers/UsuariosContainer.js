import {fetchingUsuarios, removingUsuario} from '../actions/Usuarios';
import {connect} from 'react-redux';
import Usuarios from '../components/Usuarios';

const mapStateToProps = (state) => ({
  usuarios: state.usuario.usuariosData
})

export default connect(mapStateToProps,{fetchingUsuarios, removingUsuario})(Usuarios)
