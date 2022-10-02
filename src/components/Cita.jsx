import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Cita = ({cita}) => {
    return (
        <Col sm={12} md={6} className='mb-3'>
          <Card>
            <Card.Header className='d-flex'>
              <Card.Img className='img me-3 mt-2' src='https://img.freepik.com/vector-gratis/lindo-perro-sacando-lengua-ilustracion-icono-dibujos-animados_138676-2709.jpg'></Card.Img>
              <div>
                <p>Mascota: {cita.nombreMascota}</p>
                <p className='text-muted'>Dueño: {cita.nombrePersona}</p>
              </div>
            </Card.Header>
            <Card.Body className='bg-lightblue'>
              <Row>
                <Col sm={4}>
                  <Card.Text>Fecha:</Card.Text>
                </Col>
                <Col sm={8}>
                  <Card.Text className='bg-white rounded p-1 my-1'>{cita.fecha}</Card.Text>
                </Col>
                <Col sm={4}>
                  <Card.Text>Hora:</Card.Text>
                </Col>
                <Col sm={8}>
                  <Card.Text className='bg-white rounded p-1 my-1'>{cita.hora}</Card.Text>
                </Col>
                <Col sm={4}>
                  <Card.Text>Síntomas:</Card.Text>
                </Col>
                <Col sm={8}>
                  <Card.Text className='bg-white rounded p-1 my-1'>{cita.sintomas}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className='text-end'>
              <Button variant='danger'>Borrar</Button>
            </Card.Footer>
          </Card>
        </Col>
    );
};

export default Cita;