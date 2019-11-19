import React from 'react'
import { Component } from 'react';
import Portafolio from '../components/Portafolio';
import ButtonRedirect from './ButtonRedirect';


class Portafolios extends Component {
  componentDidMount() {
    this.props.fetchingPortafolios()
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

    return (
      <>
      <ButtonRedirect
      text = {'Crear Portafolio'}
      link = {'/Portafolios/Crear'}
      />
        <div>
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Descripción</th>
              <th scope='col'>Objetivo</th>
              <th scope='col'>Fecha de Inicio</th>
              <th scope='col'>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {this.props.portafolios.map((portafolio) =>
            <Portafolio
              key = {portafolio.id}
              id= {portafolio.id}
              descripcion= {portafolio.descripcion}
              objetivo = {portafolio.objetivo}
              fechaInicio = {portafolio.fechaInicio}
              acciones = {
                <>
                <button
                id= 'ensayo'
                className='btn btn-success action-btn'>
                Editar
                  </button>
                  <button
                  id = 'ensayo'
                className='btn btn-success action-btn'>
                Detalles
                  </button>
                  </>
              }
            />
          )}
          </tbody>
        </table>
        </div>
        <br></br>
        <button
          className='btn btn-primary btn-lg'
          onClick={() => this.props.fetchData()} >
          Actualizar
        </button>
      </>
    );
  }
}

export default Portafolios;
