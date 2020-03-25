import React from 'react';
import { useForm } from 'react-hook-form';


export default function FormAgenda() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <>
      <section className="container-fluid">

        <div className="p-3 my-3">
          <h3>Nueva Agenda</h3>
          <h6>agregar descripcion</h6>
        </div>

        {/*action="/agenda/add" method="POST" */}
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group row">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" for="PrestadorSelect">Prestador:</label>
              </div>
              <select className="custom-select" name="Prestador" ref={register({ required: true })}>
                <option value="asd">asd</option>
                <option value=" dsa"> dsa</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" for="FechaDeInicio">Fecha de Inicio:</label>
              </div>
              <input className="form-control" type="date" name="FechaDeInicio" ref={register({ required: true })} />
            </div>
          </div>

          <div className="form-group row">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" for="TiempoTurno">Duración del Turno:</label>
              </div>
              <input className="form-control" type="number" placeholder="Ingrese una Cantidad" name="TiempoTurno" ref={register({ required: true })} />
              <div class="input-group-append">
                <label class="input-group-text" for="inputGroupSelect02">Minutos</label>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" for="CantidadSobreturnos">Cantidad de Sobreturnos:</label>
              </div>
              <input className="form-control" type="number" placeholder="Ingrese una Cantidad" name="SobreTurno" ref={register({ required: true })} />
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