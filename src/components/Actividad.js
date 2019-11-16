import React from 'react';
import moment from 'moment';

const Portafolio = ({ descripcion, tutor, fecha, id, puntaje, acciones }) => {
  const fechaI = moment(fecha).format('l');
  return (
    <tr>
      <td>{id}</td>
      <td>{descripcion}</td>
      <td>{tutor}</td>
      <td>{puntaje}</td>
      <td>{fechaI}</td>
      <td>{acciones}</td>
    </tr>
  );
}
export default Portafolio;
