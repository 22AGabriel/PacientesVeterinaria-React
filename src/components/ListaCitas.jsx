import { Row } from "react-bootstrap";
import Cita from "./Cita";

const ListaCitas = () => {
  return (
    <div className="w-form border rounded p-3 my-3">
      <h4 className="text-center">Administrador de citas</h4>
      <Row>
        <Cita></Cita>
      </Row>
    </div>
  );
};

export default ListaCitas;
