import React from 'react';
import { Field, reduxForm} from 'redux-form'
import 'react-datepicker/dist/react-datepicker.css';
import 'moment/locale/es'
import DateTimePicker from 'react-datepicker';


class ActualizarActividad extends React.Component {
  componentDidMount() {
    this.props.fetchingPortafolios()   
    this.props.fetchingActividadById(this.props.match.params.Id)
  }

  renderDateTimePicker = ({ input: { onChange,value}, showTime }) =>
  <DateTimePicker className="form-control"
    placeholderText="Seleccione la fecha"
    selected={value}
    onChange={onChange}
    format="YYYY MMM DD"
    time={showTime}
    value={ !value ? null : new Date(value)}/>

  renderError ({error,touched}){
    if (touched && error) {
      return (
        <div className = 'ui error message invalid-feedback'>
          <div className = 'header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, placeholder, meta })  => {
    const className = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`;
    return (
      <>
        <label>{label}</label>
        <div className="input-group">          
            <input 
              className={className}
              placeholder={placeholder} 
              {...input}  />
              {this.renderError(meta)}
        </div>
      </>
    );
  }

  renderSelect = ({ input, label, children, meta, placeholder })  => {
    const className = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`;
    return (
      <>
        <label>{label}</label>
        <div className="input-group">          
            <select 
              className={className}
              placeholder={placeholder}
              {...input}>
              { children }
            </select>
            {this.renderError(meta)}
        </div>
      </>
    );
  }

  onSubmit = (formValues) => {
    this.props.updatingActividad(formValues);
  }

  render() {
      return (
        <>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className = 'ui form error'>
          <div className="row mb-3">
            <div className="col">
              <Field 
                name="descripcion" 
                component={this.renderInput} 
                label="Descripción"
                placeholder="Ingrese una descripción" />
            </div>
            <div className="col">
              <Field 
                name="tutor" 
                component={this.renderInput} 
                label="Tutor"
                placeholder="Nombre del encargado de la actividad" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <Field 
                name="puntaje" 
                component={this.renderInput} 
                label="Puntaje"
                placeholder="Ingrese un puntaje" />
            </div>
            <div className="col">
              <label>Fecha</label>
                <br></br>
                  <Field
                    name="fecha"
                    showTime={false}
                    component={this.renderDateTimePicker}/>
            </div>
            <div className ="col">
              <Field
                name="portafolioId"
                component={this.renderSelect} 
                label="Portafolio">
                   <option defaultValue= " " selected hidden> -- Seleccione una opcion -- </option>
                {this.props.portafolios.map((portafolio) => (
                  <option key={portafolio.id} value={portafolio.id}>{portafolio.descripcion}</option>
                ))}                
              </Field>
              </div>
          </div>
          <button className='btn btn-primary btn-lg' >
            Aceptar
          </button>
        </form>
        </>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.descripcion) {errors.descripcion = 'El campo no debe estar vacío';}
  if (!formValues.tutor) {errors.tutor= 'El campo no debe estar vacío';}
  return errors;
  };

 export default reduxForm({
  form: 'UpdateActividad', validate, enableReinitialize: true
})(ActualizarActividad);
