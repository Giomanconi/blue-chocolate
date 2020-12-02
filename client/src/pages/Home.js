import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
            <section className="container">
                <Link to="/agenda">
                    <button className="btn btn-primary m-3 p-3"> AGENDA </button>
                </Link>

                <Link to="/nuevaagenda">
                    <button className="btn btn-primary m-3 p-3"> NUEVA AGENDA </button>
                </Link>

            </section >
        </>
    );
}