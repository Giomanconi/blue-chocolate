import React, {
    useState,
} from 'react';
import FormAgenda from '../components/FormAgenda'
import FormHorarioAtencion from '../components/FormHorarioAtencion'
import Axios from 'axios';


export default function Agenda() {
    const agenda = {
        "fechaInicio": null,
        "tiempoTurno": null,
        "sobreturno": null,
        "prestadorId": null,
        "horarios": []
    };

    const handleAgenda = async (data) => {
        agenda.fechaInicio = data.fechaInicio
        agenda.tiempoTurno = data.tiempoTurno
        agenda.sobreturno = data.sobreturno
        agenda.prestadorId = data.prestadorId
        console.log("---------AGENDA--------")
        console.log(agenda)
    };

    const handleHorarios = async (data) => {
        agenda.horarios.push(data)
        console.log("---------HORARIOS--------")
        console.log(agenda.horarios)
    };

    const onClickHandler = () => {
        Axios.post('/agenda/add', agenda)
            .then((res) => {
                console.log("Success");
            })
            .catch((err) => {
                console.log("Failure");
            });
        console.log(agenda)
    };

    return (
        <>
            <section className="container">

                <FormAgenda callback={handleAgenda} />

                <FormHorarioAtencion callback={handleHorarios} />

                <button className="btn btn-success p-3 m-3" onClick={onClickHandler}> guardar</button>

            </section>
        </>
    );
}
