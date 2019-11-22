import React from 'react'
import moment from 'moment'

const DetallePrograma = ({descripcion, objetivo, fechaInicio}) => {
  const fechaI = moment(fechaInicio).format('l');
  return (
    <>
    <tr>
      <td><center><h5>Descripcion:</h5> {descripcion} </center></td>
      <td><center><h5>Objetivo:</h5> {objetivo}</center> </td>
      <td><center><h5>Fecha Inicio:</h5> {fechaI}</center></td>
    </tr>
    </>
  );
}
export default DetallePrograma;
