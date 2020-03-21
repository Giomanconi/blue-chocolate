import React from 'react';

export default function Home() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div classNameName="container">
                    <a className="navbar-brand" href="#top">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#top">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#top">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#top">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#top">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}