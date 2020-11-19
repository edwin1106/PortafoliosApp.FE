import React from 'react'
import { Component } from 'react';
import ActividadUsuario from '../components/ActividadUsuario';
import ButtonRedirect from './ButtonRedirect';
import history from '../history';


class ActividadUsuarios extends Component {
  componentDidMount() {
    this.props.fetchingUsuariosByActividadId(this.props.match.params.actividadId)
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

    if (this.props.actividadUsuarios.length <= 0) {
      return (
        <div>

          <center>
            <p>No existen Usuarios asociados</p>
          </center>
        </div>
      );
    }

    return (
      <>
    
        <div>
          <table className="table table-hover">
            <thead className="thead-light">
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Nombres</th>
                <th scope='col'>Apellidos</th>
                <th scope='col'>Correo</th>
                <th scope='col'>Fecha Registro</th>
                <th scope='col'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.props.actividadUsuarios.map((usuario) =>
                <ActividadUsuario
                  key={usuario.id}
                  id={usuario.id}
                  nombres={usuario.usuario.nombres}
                  apellidos={usuario.usuario.apellidos}
                  correo ={usuario.usuario.correo}
                  acciones={
                    <>
                      <button
                        id='ensayo'
                        className='btn btn-danger action-btn'
                        onClick={() => this.props.removingActividadUsuario(usuario.id)}>
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

export default ActividadUsuarios;
