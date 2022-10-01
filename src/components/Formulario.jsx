import { Button, Col, Form, Row } from "react-bootstrap";

const Formulario = () => {
  return (
    <div className="border rounded p-3 w-form">
      <p>Crear una cita nueva:</p>
      <Form>
        <Form.Group className="my-3 bg-lightblue rounded p-3">
          <Row>
            <Col sm={12} md={4}>
              <Form.Label>Nombre de mascota:</Form.Label>
            </Col>
            <Col sm={12} md={8} className="mb-3">
              <Form.Control type="text" placeholder="nombre de la mascota"></Form.Control>
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>Nombre del dueño/a:</Form.Label>
            </Col>
            <Col sm={12} md={8} className="mb-3">
              <Form.Control type="text" placeholder="nombre del dueño/a"></Form.Control>
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>Fecha:</Form.Label>
            </Col>
            <Col sm={12} md={3} className="mb-3">
              <Form.Control type="date"></Form.Control>
            </Col>
            <Col sm={12} md={2}>
              <Form.Label>Hora:</Form.Label>
            </Col>
            <Col sm={12} md={3} className="mb-3">
              <Form.Control type="time"></Form.Control>
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>Síntomas: </Form.Label>
            </Col>
            <Col sm={12} md={8} className="mb-3">
              <Form.Control type="textarea" placeholder="describe los síntomas"></Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <div className="text-center">
          <Button variant="primary">Agregar cita nueva</Button>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
