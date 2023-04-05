import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

export default function Login() {
  return (
    <div>

      <body class="container-fluid" id="body">

        <div class="row justify-content-center">

          <section class="col-12 colsm-6 col-md-4 mt-5">
          <div id="avatar">
              <img src="https://relvado.rs.gov.br/site/custom/default/img/no-avatar.png" alt=""/>
            </div>
            <form id="form-container">
              <h4 class="text-center" id="login">Login</h4>

              <div class="form-group form-label mb-3">
                <input class="form-control" type="text" name="user" placeholder="Email"/>
              </div>

              <div class="form-group form-label mb-4">
                <input class="form-control" type="password" name="password" placeholder="Senha"/>
              </div>

              <button class="btn btn-primary btn-block col-lg-12">Entrar</button>

            </form>

          </section>

        </div>

      </body>

    </div>
  );
}
