import React from 'react';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container">
                    <a className="navbar-brand" href="#top">Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#top">Home <span className="sr-only">(current)</span></a>
                            </li> */}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#top" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Herramientas
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#top">Nueva Agenda</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#top">Cambiar Horarios de Atencion</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}