import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="container-fluid p-5 mt-4">
                <div className="row">
                    <div className="col-md col-sm-4">
                        <b>Información</b>
                        <ul className="list-unstyled p-2">
                            <li><a className="text-decoration-none" href="#top">Contactos</a></li>
                        </ul>
                    </div>
                    <div className="col-md col-sm-4">
                        <b>Sobre Nosotros</b>
                        <ul className="list-unstyled">
                            <li><a className="text-decoration-none" href="#top">Quienes Somos</a></li>
                        </ul>
                    </div>
                    <div className="col-md col-sm-4">
                        <b>Cuenta</b>
                        <ul className="list-unstyled">
                            <li><a className="text-decoration-none" href="#top">Mi Cuenta</a></li>
                        </ul>
                    </div>
                    <div className="col-md col-sm-4">
                        <b>Contactos</b>
                        <ul className="list-unstyled" >
                            <li><a className="text-decoration-none" href="#top">Direccion:Gral Paz N° 577</a></li>
                        </ul>
                    </div>
                   
                </div >
                <hr />
                <div>
                    <p>Copyright 2001-2018 | Todos los derechos reservados RollingShop.com. RollingShop S.A.C.I. e I.
                     Valentín Gómez
                     2813 (1191) | Capital Federal | Argentina </p>
                </div>

            </footer >

        </>
    );
}

