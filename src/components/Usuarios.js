import React from 'react'
import { Component } from 'react';
import Usuario from '../components/Usuario';
import ButtonRedirect from './ButtonRedirect';
import history from '../history';


class Usuarios extends Component {
  componentDidMount() {
    this.props.fetchingUsuarios()
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

    if (this.props.usuarios.length <= 0) {
      return (
        <div>
          <ButtonRedirect
            text={'Registrar Usuario'}
            link={'/Usuarios/Crear'} />
          <center>
            <p>No existen Usuarios registrados</p>
          </center>
        </div>
      );
    }

    return (
      <>
        <ButtonRedirect
          text={'Registrar Usuario'}
          link={'/Usuarios/Crear'} />      
        <div>
          <table className="table table-hover">
            <thead className="thead-light">
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Nombres</th>
                <th scope='col'>Apellidos</th>
                <th scope='col'>Fecha Nacimiento</th>
                <th scope='col'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.props.usuarios.map((usuario) =>
                <Usuario
                  key={usuario.id}
                  id={usuario.id}
                  nombres={usuario.nombres}
                  apellidos={usuario.apellidos}
                  acciones={
                    <>
                      <button
                        id='ensayo'
                        className='btn btn-success action-btn'
                        onClick={() => history.push(`/Usuarios/${usuario.id}`)} >
                        Editar
                  </button>
                      <button
                        id='ensayo'
                        className='btn btn-danger action-btn'
                        onClick={() => this.props.removingUsuario(usuario.id)}>
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

export default Usuarios;
