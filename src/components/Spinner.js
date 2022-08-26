import React from "react";

export default function Spinner() {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm me-1"
            role="status"
            aria-hidden="true"
          ></span>
          Cargando...
        </button>
      </div>
    </div>
  );
}
