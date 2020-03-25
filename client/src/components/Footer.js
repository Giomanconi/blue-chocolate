import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="container py-5">
                <div className="row">
                    <div className="col-md col-sm-4">
                        <b>Información</b>
                        <ul className="list-unstyled p-2">
                            <li><a className="text-decoration-none" href="#top">Contacto</a></li>
                        </ul>
                    </div>
                </div >
                <hr />
                <div>
                    <p>Copyright © 2020 <a className="text-decoration-none" href="https://github.com/Giomanconi">Giomanconi</a> All rights reserved.</p>
                </div>

            </footer >

        </>
    );
}

