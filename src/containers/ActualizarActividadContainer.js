import {updatingActividad, fetchingActividadById} from '../actions/Actividades';
import {fetchingPortafolios} from '../actions/Portafolios'
import {connect} from 'react-redux';
import ActualizarActividad from '../components/ActualizarActividad';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => ({
  initialValues: state.actividad.actualizarActividadData,
  portafolios: state.portafolio.portafoliosData
})

export default withRouter(connect(mapStateToProps,{updatingActividad,fetchingActividadById, fetchingPortafolios})(ActualizarActividad))
