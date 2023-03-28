import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import logo from '../../Imagem/logo.png';

export default function Home() {
    return (
        <div>
            <body class='bg-light' id='background'>
                <div class='container'>
                    <div class='row'>
                        <nav class="navbar navbar-expand-lg bg-dark fixed-top" id='navbarteste'>
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="nav-item">
                                    <div class="text-center">
                                        <img src={logo} alt="Pizzaria" className="mx-auto d-block" id='logoteste' />
                                    </div>
                                </div>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button type="button" class="btn btn-outline-secondary" id="btn-login"> Login </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </body>
        </div>
    )
}