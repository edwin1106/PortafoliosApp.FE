import React from 'react';
import { Field, reduxForm } from 'redux-form'
import 'react-datepicker/dist/react-datepicker.css';
import 'moment/locale/es'
import DateTimePicker from 'react-datepicker';


class CrearUsuario extends React.Component {
  componentDidMount() {
  }

  renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
    <DateTimePicker className="form-control"
      placeholderText="Seleccione la fecha"
      selected={value}
      onChange={onChange}
      format="YYYY MMM DD"
      time={showTime}
      value={!value ? null : new Date(value)} />

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message invalid-feedback'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, placeholder, meta }) => {
    const className = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`;
    return (
      <>
        <label>{label}</label>
        <div className="input-group">
          <input
            className={className}
            placeholder={placeholder}
            {...input} />
          {this.renderError(meta)}
        </div>
      </>
    );
  }
  onSubmit = (formValues) => {
    this.props.creatingUsuario(formValues)
  }

  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>

          <div className="row mb-5">
            <div className="col">
              <Field
                name="nombres"
                component={this.renderInput}
                label="Nombres"
                placeholder="Digite los Nombres" />
            </div>
            <div className="col">
              <Field
                name="apellidos"
                component={this.renderInput}
                label="Apellidos"
                placeholder="Digite los apellidos" />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <Field
                name="correo"
                component={this.renderInput}
                label="Correo"
                placeholder="Digite el correo" />
            </div>
            <div className="col">
              <label>Fecha de Nacimiento</label>
              <br></br>
              <Field
                name="fechaNacimiento"
                showTime={false}
                component={this.renderDateTimePicker} />
            </div>
          </div>
          <button className='btn btn-primary btn-lg' >
            Registrar
          </button>
        </form>
      </>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.objetivo) { errors.objetivo = 'El campo no debe estar vacío'; }
  if (!formValues.descripcion) { errors.descripcion = 'El campo no debe estar vacío'; }
  return errors;
};

export default reduxForm({
  form: 'PostUsuario', validate
})(CrearUsuario);
