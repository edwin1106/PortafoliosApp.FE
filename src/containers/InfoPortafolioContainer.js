import {fetchingPortafolioById} from '../actions/Portafolios'
import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import InfoPortafolio from '../components/InfoPortafolio'


const mapStateToProps = (state) => ({
  informacion: state.infoPortafolio.datosPortafolio
})

export default withRouter(connect(mapStateToProps,{fetchingPortafolioById})(InfoPortafolio))
