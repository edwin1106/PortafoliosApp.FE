import {updatingPortafolio, fetchingPortafolioById} from '../actions/Portafolios';
import {connect} from 'react-redux';
import ActualizarPortafolio from '../components/ActualizarPortafolio';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => ({
  initialValues: state.portafolio.actualizarPortafolioData
})

export default withRouter(connect(mapStateToProps,{updatingPortafolio,fetchingPortafolioById})(ActualizarPortafolio))
