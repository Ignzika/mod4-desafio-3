import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Ingreso = ({ arrayData, setArrayData, toFilter,fixedAlert,setFixedAlert }) => {
  const [colab, setColab] = useState({
    nombre: ``,
    correo: ``,
    edad: ``,
    cargo: ``,
    telefono: ``,
  });

  const fromOnChange = (e) => {
    const fromId = {
      nameData: `nombre`,
      emailData: `correo`,
      ageData: `edad`,
      chargeData: `cargo`,
      phoneData: `telefono`,
    };
    const newColab = fromId[e.target.id];
    if (newColab) {
      setColab({ ...colab, [newColab]: e.target.value });
    }
  };

  const fromOnSubmit = (e) => {
    e.preventDefault();
    console.log(arrayData, "sdfgzsdfg");
    
  };

  const valData = (e) => {
    setArrayData([...arrayData, colab]);
    e.preventDefault();
    const valText = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    const valCorr = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const valNume = /^\d{7,14}$/; // 7 a 14 numeros.

    if (
      colab.nombre.trim() === "" ||
      colab.correo === "" ||
      colab.edad === "" ||
      colab.cargo === "" ||
      colab.telefono === ""
    ) {
      setFixedAlert({
        message: "Error en el llenado de campos solicitados",
        variante: "warning",
        status: true,
      });

      setColab({
        nombre: ``,
        email: ``,
        edad: ``,
        cargo: ``,
        telefono: ``,
      });

    } else if (
      !valCorr.test(colab.correo) 
    ) {
      setFixedAlert({
        message: "Error en los datos ingresados",
        variante: "danger",
        status: true,
      });

      setColab({
        nombre: ``,
        email: ``,
        edad: ``,
        cargo: ``,
        telefono: ``,
      });

    } else {

      setFixedAlert({
        message: "lo has logrado! ",
        variante: "success",
        status: true,
      });

      setColab({
        nombre: ``,
        email: ``,
        edad: ``,
        cargo: ``,
        telefono: ``,
      });
      
    }
    
    // setColab({
    //   nombre: ``,
    //   email: ``,
    //   edad: ``,
    //   cargo: ``,
    //   telefono: ``,
    // });


    console.log(arrayData, "totales aarraas");
  };

  return (
    <>
      <div className="colabForm mb-3">
        <Form
          noValidate
          onSubmit={(e) => {
            valData(e);
            // fromOnSubmit(e);
          }}
        >
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Nombre"
              onChange={fromOnChange}
              value={colab.nombre}
              id="nameData"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Correo"
              onChange={fromOnChange}
              value={colab.correo}
              id="emailData"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Edad"
              onChange={fromOnChange}
              value={colab.edad}
              id="ageData"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Cargo"
              onChange={fromOnChange}
              value={colab.cargo}
              id="chargeData"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Telefono"
              onChange={fromOnChange}
              value={colab.telefono}
              id="phoneData"
            />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            onSubmit={(e) => {
              // valData(e)
            
              fromOnSubmit();
            }}
          >
            Ingresar datos
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Ingreso;
