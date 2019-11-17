import {creatingPortafolio} from '../actions/Portafolios';
import {connect} from 'react-redux';
import CrearPortafolio from '../components/CrearPortafolio';

export default connect(null,{creatingPortafolio})(CrearPortafolio)
