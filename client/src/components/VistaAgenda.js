import React, {
    useEffect,
    useState,
} from 'react';
import { Link } from 'react-router-dom';
import ItemAgenda from './ItemAgenda';
import Axios from 'axios';
import './VistaAgenda.css'


export default function DetalleAgenda() {

    const [dbAgendas, setDbAgendas] = useState([]);
    let mappedItems = [];

    async function getAgendas() {
        try {
            const res = await Axios.get('/agenda');
            setDbAgendas(res.data)
            // console.log(res.data)
        } catch (e) {
            console.error("123" + e);
        }
    }

    useEffect(() => {
        getAgendas();
    }, []);

    if (dbAgendas) {
        mappedItems = dbAgendas.map(p => <ItemAgenda key={p.AgendaId} {...p} />);
    }


    function isAgendaEmpty() {
        let result = null;
        if (dbAgendas === undefined || dbAgendas.length === 0) {
            result =
                <div className="border-bottom border-danger text-center p-5 " role="alert">
                    <h3> No Existen Agendas. </h3>
                    <p> Agregue una agenda nueva haciendo click en el boton Nueva Agenda</p>
                </div>

        } else {
            result = mappedItems;
        }
        return result;
    }


    return (
        <>
            <div className="p-3 my-3">
                <h2>Agendas</h2>
            </div>
            <div className="row mt-3 justify-content-between">
                <div className="form-group col-6">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="Prestador">Buscar prestador:</label>
                        </div>
                        <input className="form-control" name="Prestador" />
                    </div>
                </div>
                <div className="" >
                    <Link to="/nuevaagenda">
                        <button className="btn btn-success p-2 mx-2 mb-2">Nueva Agenda</button>
                    </Link>
                </div>
            </div>
            <div className="container-fluid border AgendaList">
                <div className="row border-bottom border-danger align-items-center py-2" >
                    <div className="col">
                        Prestadores
                        </div>
                    <div className="col">
                        Fecha de inicio
                        </div>
                    <div className="col">
                        {/* Fecha de fin */}
                    </div>
                </div>
                {isAgendaEmpty()}
            </div>
        </>
    );
}

