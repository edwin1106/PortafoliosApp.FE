import React from 'react';
import moment from 'moment';

const Portafolio = ({ descripcion, tutor, fecha, id, puntaje, acciones }) => {
  const fechaI = moment(fechaInicio).format('l');
  return (
    <tr>
      <td>{id}</td>
      <td>{descripcion}</td>
      <td>{tutor}</td>
      <td>{fecha}</td>
      <td>{puntaje}</td>
      <td>{acciones}</td>
    </tr>
  );
}
export default Portafolio;
