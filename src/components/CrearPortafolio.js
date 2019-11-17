import React from 'react';
import { Field, reduxForm} from 'redux-form'
import 'react-datepicker/dist/react-datepicker.css';
import 'moment/locale/es'
import DateTimePicker from 'react-datepicker';


class CrearPortafolio extends React.Component {
  componentDidMount() {   
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
  onSubmit = (formValues) => {
    this.props.creatingPrograma({ ...formValues })
  }

  render() {
        return (
        <>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className = 'ui form error'>

          <div className="row mb-5">
            <div className="col">
              <Field 
                name="nombre" 
                component={this.renderInput} 
                label="Descripción"
                placeholder="Digite la descripción del portafolio" />
            </div>
            <div className="col">
              <Field 
                name="objetivo" 
                component={this.renderInput} 
                label="Objetivo"
                placeholder="Digite el objetivo del portafolio" />
            </div>
            <div className="col">
              <label>Fecha de Inicio</label>
                <br></br>
                  <Field
                    name="fechaInicio"
                    showTime={false}
                    component={this.renderDateTimePicker}/>
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
  if (!formValues.objetivo) {errors.objetivo = 'El campo no debe estar vacío';}
  if (!formValues.nombre) {errors.nombre= 'El campo no debe estar vacío';}
  return errors;
  };

 export default reduxForm({
  form: 'PostPrograma', validate
})(CrearPortafolio);
