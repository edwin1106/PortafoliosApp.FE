import {fetchingPortafolios} from '../actions/Portafolios';
import {connect} from 'react-redux';
import Portafolios from '../components/Portafolios';

const mapStateToProps = (state) => ({
    portafolios: state.portafolio.portafoliosData
})

export default connect(mapStateToProps,{fetchingPortafolios})(Portafolios)