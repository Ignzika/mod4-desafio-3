import Alert from "react-bootstrap/Alert";

const ErrorInfo = ({ fixedAlert, setFixedAlert }) => {
  
  const errorAlert = (e) => {
    setFixedAlert({
      message: "",
      variante: "",
      status: false,
    });
  };
  return (
    <>
      <div>
        <Alert
          show={fixedAlert.status}
          variant={fixedAlert.variante}
          className="mt-3 rounded border border-5 fw-medium "
        >
          <p> {fixedAlert.message}.</p>
        </Alert>
      </div>
    </>
  );
};

export default ErrorInfo;
