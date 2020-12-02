import React from 'react';
import { useForm } from 'react-hook-form';
import ItemAgenda from './ItemAgenda';

export default function FormHorarioAtencion(props) {
  const { register, handleSubmit, /*errors*/ } = useForm();

  const onSubmit = data => {
    props.callback(data);
  }

  return (
    <>
      <div className="mt-5 mb-3 p-1">
        <h5>Añadir Horarios de Atencion</h5>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="form-group row col-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="PrestadorSelect">Dia:</label>
            </div>
            <select className="custom-select" name="dia" ref={register({ required: true })}>
              <option value="Lunes">Lunes</option>
              <option value="Martes">Martes</option>
              <option value="Miercoles">Miercoles</option>
              <option value="Jueves">Jueves</option>
              <option value="Viernes">Viernes</option>
              <option value="Sabado">Sabado</option>
              <option value="Domingo">Domingo</option>
            </select>
          </div>
        </div>

        <div className="form-group row col-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="horaInicio" >Desde las:</label>
            </div>
            <input
              className="form-control"
              type="time"
              name="horaInicio"
              ref={register} />
          </div>
        </div>

        <div className="form-group row col-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="horaFin" >Hasta las:</label>
            </div>
            <input
              className="form-control"
              type="time"
              name="horaFin"
              ref={register} />
          </div>
        </div>

        <button className="btn btn-primary" value="submit" type="submit" >
          Agregar Horario
          </button>

      </form>

      {/* <div className="col-5">
        <div className="row border-bottom border-danger align-items-center py-2" >
          <div className="col">
            Dia
            </div>
          <div className="col">
            Desde
            </div>
          <div className="col">
            Hasta
            </div>
        </div>
        {isHorarioEmpty()}
      </div> */}

    </>
  );
}