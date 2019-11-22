import React from 'react'
import { Component } from 'react';
import Actividad from '../components/Actividad';


class ActividadesDePortafolio extends Component {
  componentDidMount() {
    this.props.fetchingActividadesByPortafolioId(this.props.match.params.portafolioId)
  }

  render() {
    if (this.props.loading) {
      return (
        <center>
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </center>
      );
    }

    if (this.props.actividadesPortafolio.length <= 0) {
      return (
        <center>
          <p>No existen actividades asociadas</p>
        </center>
        
      );
    }

    return (
      <>
        <div>
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Descripción</th>
              <th scope='col'>Tutor</th>
              <th scope='col'>Puntaje</th>
              <th scope='col'>fecha</th>
              <th scope='col'>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {this.props.actividadesPortafolio.map((actividad) =>
            <Actividad
              key ={`${actividad.id}$portafolio`}
              id= {actividad.id}
              descripcion= {actividad.descripcion}
              tutor = {actividad.tutor}
              puntaje = {actividad.puntaje}
              fecha = {actividad.fecha}
              acciones = {
                <>
                  <button
                    id = 'ensayo'
                    className='btn btn-danger action-btn'
                    onClick={() => this.props.removingActividad(actividad.id)}>
                    Eliminar
                  </button>
                  </>
              }
            />
          )}
          </tbody>
        </table>
        </div>
        <br></br>
       
      </>
    );
  }
}

export default ActividadesDePortafolio;
