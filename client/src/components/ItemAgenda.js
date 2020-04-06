import React from 'react';
import './ItemAgenda.css';


export default function ItemAgenda(props) {

    let array = [];
    const item = () => {
        if (props.RazonSocial) {
            array.push(
                <div key={"rz" + props.AgendaId} className="col">
                    {props.RazonSocial}
                </div>
            );
        }
        if (props.FechaInicio) {
            array.push(
                <div key={"fi" + props.AgendaId} className="col">
                    {props.FechaInicio}
                </div>
            );
        }
        if (props.Activo) {
            array.push(
                <div key={"a" + props.AgendaId} className="col">
                    Activa
                </div>
            );
        }
        return array;
    }

    return (
        <div className="row border-bottom border-primary align-items-center py-2" >
            {item()}
        </div>
    );
}
