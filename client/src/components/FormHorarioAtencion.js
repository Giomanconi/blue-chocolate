import React from 'react';
import { useForm } from 'react-hook-form';


export default function FormHorarioAtencion() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <>
      <section className="container-fluid">

        <div className="p-3 my-3">
          <h3>Horarios de Atencion</h3>
          <h6>Elija los dias y las horas en el que el medico va a atender</h6>
        </div>

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

        <div className="p-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row">
              <label for="formGroupExampleInput">Prestador</label>
              <div className="col-sm-10">
                <select className="form-control" name="Prestador" ref={register({ required: true })}>
                  <option value="asd">asd</option>
                  <option value=" dsa"> dsa</option>
                </select>
              </div>
            </div>

            <div className="form-group">

              <label className="mx-2" >Lunes</label>
              <input type="checkbox" placeholder="Lun" name="Lun" ref={register} />
              <label className="mx-2" >Martes</label>
              <input type="checkbox" placeholder="Mar" name="Mar" ref={register} />
              <label className="mx-2" >Miercoles</label>
              <input type="checkbox" placeholder="Mie" name="Mie" ref={register} />
              <label className="mx-2" >Jueves</label>
              <input type="checkbox" placeholder="Jue" name="Jue" ref={register} />
              <label className="mx-2" >Viernes</label>
              <input type="checkbox" placeholder="Vie" name="Vie" ref={register} />

            </div>
            <div className="form-group">
              <div className="form-group">
                <label className="mx-2" >Desde las: </label>
                <input type="time" placeholder="HoraInicio" name="HoraInicio" ref={register} />
              </div>
              <div className="form-group">
                <label className="mx-2" >Hasta las: </label>
                <input type="time" placeholder="HoraFin" name="HoraFin" ref={register} />
              </div>
            </div>


            <input className="btn btn-secondary" value="Guardar" type="submit" />
          </form>
        </div>
      </section>
    </>
  );
}