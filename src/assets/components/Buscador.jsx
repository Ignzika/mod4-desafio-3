import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Buscador = ({ setToFilter, toFilter, arrayData, baseColab }) => {
  const fromTarget = (e) => {
    // e.preventDefault();

    const grabInput = e.target.value.toString().toLowerCase();

    const search = arrayData.filter(
      (colabodores) =>
        colabodores.nombre.toString().toLowerCase().includes(grabInput) ||
        colabodores.correo.toString().toLowerCase().includes(grabInput) ||
        colabodores.edad.toString().includes(grabInput) ||
        colabodores.cargo.toString().toLowerCase().includes(grabInput) ||
        colabodores.telefono.toString().includes(grabInput)
    );

    setToFilter(search);
  };

  return (
    <>
      
      <h2 style={{color: "red"}}>no hay caso que se renderize sin tener que buscar algo antes T_T</h2>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          type="text"
          name="buscador"
          id="searchData"
          placeholder=" 👀 ingresa el campos a filtrar o buscar"
          onChange={fromTarget}
          // value={fromTarget} autoseteado?
        />
      </InputGroup>
      <br />
    </>
  );
};

export default Buscador;
