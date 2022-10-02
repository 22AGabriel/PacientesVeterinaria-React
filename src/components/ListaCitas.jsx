import { Row } from "react-bootstrap";
import Cita from "./Cita";

const ListaCitas = ({arregloCitas}) => {
  if(arregloCitas.length === 0){
    return (
      <div className="w-form border text-center rounded p-3 my-3">
        <h4>Administrador de citas</h4>
        <p>No hay citas</p>
      </div>
    )
  } else {
    return (
      <div className="w-form border rounded p-3 my-3">
        <h4 className="text-center">Administrador de citas</h4>
        <Row>
          {
            arregloCitas.map((cita, posicion) => <Cita key={posicion} cita={cita}></Cita>)
          }
        </Row>
      </div>
    );
  }
};

export default ListaCitas;
