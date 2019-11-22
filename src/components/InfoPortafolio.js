import React from 'react'
import DetallesPortafolio from './DetallesPortafolio'


class InfoPortafolio extends React.Component{
  componentDidMount() {
    this.props.fetchingPortafolioById(this.props.match.params.portafolioId) 
  }

  render() {
    return (
        <>
        <table className="table table-bordered ">
          <thead className="thead-light">
            <tr>
              <th colSpan="3" className="text-center">Información del portafolio</th>
            </tr>
          </thead>
          <tbody>
          
          {this.props.informacion.map((portafolio) =>
          <>
            <DetallesPortafolio 
              descripcion = {portafolio.descripcion}
              objetivo= {portafolio.objetivo}
              fechaInicio = {portafolio.fechaInicio}
            />
          </>
          )}
          </tbody>
        </table>
        </>
    );
  }
}

export default InfoPortafolio;
