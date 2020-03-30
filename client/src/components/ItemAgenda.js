import React from 'react';
import './ItemAgenda.css';


export default function ItemAgenda(props) {

    let array = [];
    
    const item = () => {
        if (props.Descripcion) {
            array.push(
                <div key={props.PacienteId} className="col">
                    {props.Descripcion}
                </div>
            );
        }
        if (props.Especialidad) {
            array.push(
                <div key={props.PacienteId * 2} className="col">
                    {props.Especialidad}
                </div>
            );
        }
        if (props.Especialidad) {
            array.push(
                <div key={props.PacienteId * 3} className="col">
                    {props.SegundaEspecialidad}
                </div>
            );
        }
        return array;
    }

    return (
        <div className="row border-bottom border-danger align-items-center py-2" >
            { item() }
        </div>
    );
}
