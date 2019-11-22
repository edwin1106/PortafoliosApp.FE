import {fetchingActividadesByPortafolioId, removingActividad} from '../actions/Actividades';
import {connect} from 'react-redux';
import ActividadesDePortafolio from '../components/ActividadesDePortafolio';
import {withRouter} from 'react-router'

const mapStateToProps = (state) => ({
  actividadesPortafolio: state.actividad.actividadesPortafolio
})

export default withRouter(connect(mapStateToProps,{fetchingActividadesByPortafolioId, removingActividad})(ActividadesDePortafolio))
