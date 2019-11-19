import {creatingActividad} from '../actions/Actividades';
import {connect} from 'react-redux';
import CrearActividad from '../components/CrearActividad';
import {fetchingPortafolios} from '../actions/Portafolios';

const mapStateToProps = (state) => ({
  portafolios: state.portafolio.portafoliosData
})

export default connect(mapStateToProps,{creatingActividad, fetchingPortafolios})(CrearActividad)
