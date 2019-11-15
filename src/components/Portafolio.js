import React from 'react';
import moment from 'moment';

const Portafolio = ({descripcion, objetivo, fechaInicio, id, acciones}) => {
  const fechaI = moment(fechaInicio).format('l');
  return (
      <tr>
        <td>{id}</td>
        <td>{descripcion}</td>
        <td>{objetivo}</td>
        <td>{fechaI}</td>
        <td>{acciones}</td>
      </tr>
  );
}
export default Portafolio;