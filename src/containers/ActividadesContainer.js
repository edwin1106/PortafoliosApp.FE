import {fetchingActividades, removingActividad} from '../actions/Actividades';
import {fetchingPortafolios} from '../actions/Portafolios';
import {connect} from 'react-redux';
import Actividades from '../components/Actividades';

const mapStateToProps = (state) => ({
  actividades: state.actividad.actividadesData,
  portafolios: state.portafolio.portafoliosData
})

export default connect(mapStateToProps,{fetchingActividades, removingActividad, fetchingPortafolios})(Actividades)
