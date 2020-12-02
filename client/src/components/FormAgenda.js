import React, {
  useEffect,
  useState
} from 'react';
import {
  useForm
} from 'react-hook-form';
import Axios from 'axios';


export default function FormAgenda() {
  const { register, handleSubmit, /*errors*/ } = useForm();
  const [loading, setLoading] = React.useState(true);
  const [prestadores, setPrestadores] = useState([]);

  // console.log("FormAgendaErrors: " + errors);
  // console.log(register)

  useEffect(() => {
    let unmounted = false;
    async function getPrestadores() {
      const res = await Axios.get('/prestador')
      if (!unmounted) {
        setPrestadores(res.data.map(({ razonSocial, prestadorId }) => ({
          label: razonSocial,
          value: prestadorId
        })));
        setLoading(false);
      }
    }
    getPrestadores();
    return () => {
      unmounted = true;
    };
  }, []);


  //submit data into database
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

  //Prestador DropDown
  function PrestadorDropDown() {
    return (
      <select
        className="form-control"
        placeholder="Razon social"
        name="prestadorId"
        disabled={loading}
        ref={register({ required: true })}>
        {prestadores.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }



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
              {PrestadorDropDown()}
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
                name="fechaInicio"
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
                name="tiempoTurno"
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
                name="sobreturno"
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