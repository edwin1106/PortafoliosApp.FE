import React from 'react';
import moment from 'moment';

const Portafolio = ({ nombres, apellidos, fecha, id, correo, acciones }) => {
  const fechaI = moment(fecha).format('l');
  return (
    <tr>
      <td>{id}</td>
      <td>{nombres}</td>
      <td>{apellidos}</td>
      <td>{correo}</td>
      <td>{fechaI}</td>
      <td>{acciones}</td>
    </tr>
  );
}
export default Portafolio;
