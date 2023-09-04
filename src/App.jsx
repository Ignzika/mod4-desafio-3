import "./App.css";
import Ingreso from "./assets/components/Formulario";
import { useState } from "react";
import ErrorInfo from "./assets/components/alert";
import ListWorkers from "./assets/components/listado";
import baseColab from "./BaseColaboradores";
import Buscador from "./assets/components/Buscador";

function App() {
  const [arrayData, setArrayData] = useState(baseColab);
  const [toFilter, setToFilter] = useState(arrayData);

  const [fixedAlert, setFixedAlert] = useState({
    variante: "",
    message: "",
    status: false,
  });

  const alertListener = (showAlert) => {
    setFixedAlert(showAlert);
    setTimeout(() => {
      setFixedAlert({
        message: "",
        variante: "",
        status: false,
      });
    }, 3000);
  };

  return (
    <>
      <header>
        <Buscador
          toFilter={toFilter}
          setToFilter={setToFilter}
          baseColab={baseColab}
          arrayData={arrayData}
        />
      </header>

      <main>
        <ListWorkers
          toFilter={toFilter}
          setToFilter={setToFilter}
          arrayData={arrayData}
          setArrayData={setArrayData}
        />
      </main>

      <aside>
        <Ingreso
          arrayData={arrayData}
          setArrayData={setArrayData}
          baseColab={[baseColab]}
          setFixedAlert={setFixedAlert}
          fixedAlert={fixedAlert}
          toFilter={toFilter}
          setToFilter={setToFilter}
        />

        <ErrorInfo setFixedAlert={setFixedAlert} fixedAlert={fixedAlert} />
      </aside>
    </>
  );
}

export default App;
