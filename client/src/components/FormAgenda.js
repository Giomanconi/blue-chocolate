import React from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';


export default function FormAgenda() {

  const { register, handleSubmit, /*errors*/ } = useForm();
  const onSubmit = (data) => {

    console.log(data);

    Axios.post('/agenda/add', data)
      .then((res) => {
        console.log("Success: " + res);
      })
      .catch((err) => {
        console.log("Failure: " + err);
      });
  }
  // console.log("FormAgendaErrors: " + errors);

  return (
    <>
      <section className="container-fluid">

        <div className="p-3 my-3">
          <h3>Nueva Agenda</h3>
          <h6>Agregar descripcion</h6>
        </div>

        {/*action="/agenda/add" method="POST" */}
        <form className="" onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group row col-7">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="PrestadorSelect">Prestador:</label>
              </div>
              <select
                className="form-control"
                placeholder="Razon social"
                name="PrestadorId"
                ref={register({ required: true })}>
                <option value="1">1</option>
              </select>
            </div>
          </div>

          <div className="form-group row col-7">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="FechaDeInicio">Fecha de Inicio:</label>
              </div>
              <input
                className="form-control"
                type="date"
                name="FechaInicio"
                ref={register({ required: true })}>
              </input>
            </div>
          </div>

          <div className="form-group row col-7">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="TiempoTurno">Duración del Turno:</label>
              </div>
              <input
                className="form-control"
                type="number"
                placeholder="Ingrese duracion en minutos"
                name="TiempoTurno"
                ref={register({ required: true })}>
              </input>
              <div className="input-group-append">
                <label className="input-group-text" htmlFor="inputGroupSelect02">Minutos</label>
              </div>
            </div>
          </div>

          <div className="form-group row col-7">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="CantidadSobreturnos">Cantidad de Sobreturnos:</label>
              </div>
              <input
                className="form-control"
                type="number"
                placeholder="Ingrese una cantidad"
                name="SobreTurno"
                ref={register({ required: true })}>
              </input>
            </div>
          </div>


          <div className="row justify-content-end">
            <input className="btn btn-secondary" value="Guardar" type="submit" />
          </div>
        </form>

      </section>
    </>
  );
}