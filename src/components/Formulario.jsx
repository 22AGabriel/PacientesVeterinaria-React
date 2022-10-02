import { useEffect, useState } from "react";
import { Button, Col, Form, Row} from "react-bootstrap";
import ListaCitas from "./ListaCitas";

const Formulario = () => {
  const citasLocalStorage = JSON.parse(localStorage.getItem('arregoCitasStorage')) || [];
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePersona, setNombrePersona] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [arregloCitas, setArregloCitas] = useState(citasLocalStorage);
  const [ID, setID] = useState(1);

  useEffect(() => {
    localStorage.setItem('arregoCitasStorage', JSON.stringify(arregloCitas))
  }, [arregloCitas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloCitas([...arregloCitas, {ID, nombreMascota, nombrePersona, fecha, hora, sintomas}]);
    setNombreMascota('');
    setNombrePersona('');
    setFecha('');
    setHora('');
    setSintomas('');
    setID(ID + 1);
  }

  const borrarCita = (id) => {
    let arregloModificado = arregloCitas.filter((item) => item.ID !== id);
    setArregloCitas(arregloModificado);
  }

  return (
    <>
      <div className="border rounded p-3 w-form">
        <p>Crear una cita nueva:</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="my-3 bg-lightblue rounded p-3">
            <Form.Label column sm={12} md={4}>Nombre de mascota:</Form.Label>
            <Col sm={12} md={8} className="mb-3">
              <Form.Control 
              type="text" 
              placeholder="nombre de la mascota"
              onChange={(e) => setNombreMascota(e.target.value)}
              value={nombreMascota}
              ></Form.Control>
            </Col>
            <Form.Label column sm={12} md={4}>Nombre del dueño/a:</Form.Label>
            <Col sm={12} md={8} className="mb-3">
              <Form.Control 
              type="text" 
              placeholder="nombre del dueño/a"
              onChange={(e) => setNombrePersona(e.target.value)}
              value={nombrePersona}
              ></Form.Control>
            </Col>
            <Form.Label column sm={12} md={4}>Fecha:</Form.Label>
            <Col sm={12} md={3} className="mb-3">
              <Form.Control 
              type="date"
              onChange={(e) => setFecha(e.target.value)}
              value={fecha}
              ></Form.Control>
            </Col>
              <Form.Label column sm={12} md={2}>Hora:</Form.Label>
            <Col sm={12} md={3} className="mb-3">
              <Form.Control 
              type="time"
              onChange={(e) => setHora(e.target.value)}
              value={hora}
              ></Form.Control>
            </Col>
              <Form.Label column sm={12} md={4}>Síntomas: </Form.Label>
            <Col sm={12} md={8} className="mb-3">
              <Form.Control 
              type="textarea" 
              placeholder="describe los síntomas"
              onChange={(e) => setSintomas(e.target.value)}
              value={sintomas}
              ></Form.Control>
            </Col>
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type='submit'>Agregar cita nueva</Button>
          </div>
        </Form>
      </div>
      <ListaCitas arregloCitas={arregloCitas} borrarCita={borrarCita}></ListaCitas>
    </>
  );
};

export default Formulario;
