import React from 'react';
import moment from 'moment';

const Usuario = ({ id, nombres, apellidos, fechaNacimiento, acciones }) => {
  const fechaN = moment(fechaNacimiento).format('l');
  return (
    <tr>
      <td>{id}</td>
      <td>{nombres}</td>
      <td>{apellidos}</td>
      <td>{fechaN}</td>
      <td>{acciones}</td>
    </tr>
  );
}
export default Usuario;
