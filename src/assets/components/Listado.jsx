import { useState } from "react";
import Table from "react-bootstrap/Table";

const ListWorkers = ({ toFilter, setToFilter,arrayData, setArrayData }) => {
  toFilter.map((item, index) => {
    item.id = index + 1;
  });

  // const erraseById = (id) => {
  //   let toFilterID = toFilter.findIndex((listId) => listId.id === id);
  //   toFilter.slice(toFilterID, 1);
  //   setToFilter(...something );

  // };
 


  const newList = toFilter.map((allColab) => (
    <tr key={allColab.telefono + allColab.correo}>
      <td>{allColab.id}</td>
      <td>{allColab.nombre}</td>
      <td>{allColab.correo}</td>
      <td>{allColab.edad}</td>
      <td>{allColab.cargo}</td>
      <td>{allColab.telefono}</td>
      <td>
        {" "}
        <button
          // onSubmit={() => erraseById(allColab.id)}
            >🗑️</button>{" "}
      </td>
    </tr>
  ));

  return (
    <>
      <div className="table-responsive b-2 text-center">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Telefono</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>{newList}</tbody>
        </Table>
      </div>
    </>
  );
};

export default ListWorkers;
