import {fetchingActividades, removingActividad} from '../actions/Actividades';
import {connect} from 'react-redux';
import Actividades from '../components/Actividades';

const mapStateToProps = (state) => ({
  actividades: state.actividad.actividadesData
})

export default connect(mapStateToProps,{fetchingActividades, removingActividad})(Actividades)
