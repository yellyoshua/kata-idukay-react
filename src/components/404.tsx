import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return <div>
    <p>--- Sorry, pero direcci&oacute;n equivocada ---</p>
    <div className="txt-center">
      <Link to={"/"}>
        Regresar a inicio
      </Link>
    </div>
  </div>
}