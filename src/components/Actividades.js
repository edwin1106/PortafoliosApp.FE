import React from 'react'
import { Component } from 'react';
import Actividad from '../components/Actividad';
import ButtonRedirect from './ButtonRedirect';


class Actividades extends Component {
  componentDidMount() {
    this.props.fetchingActividades()
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
      text = {'Crear Actividad'}
      link = {'/Actividades/Crear'}
      />
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
          {this.props.actividades.map((actividad) =>
            <Actividad
              key ={actividad.id}
              id= {actividad.id}
              descripcion= {actividad.descripcion}
              tutor = {actividad.tutor}
              puntaje = {actividad.puntaje}
              fecha = {actividad.fecha}
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
          onClick={() => this.props.fetchingActividades()} >
          Actualizar
        </button>
      </>
    );
  }
}

export default Actividades;
