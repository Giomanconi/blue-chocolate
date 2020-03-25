import React from 'react';
import { Link } from 'react-router-dom';
import './CardAgenda.css';


export default function CardAgenda(props) {
    return (
        <div className="card h card-sizing mb-4 ml-3 shadow border-bottom border-danger border-top-0 border-right-0 border-left-0">

            <div className="card-body">

                <p className="card-text font-weight-light text-truncate text-center">
                    {props.brand + " - " + props.model}
                </p>
                
            </div>
        </div>
    );
}