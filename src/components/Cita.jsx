import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Cita = () => {
    return (
        <Col sm={12} md={6} className='mb-3'>
          <Card>
            <Card.Header className='d-flex'>
              <Card.Img className='img me-3 mt-2' src='https://img.freepik.com/vector-gratis/lindo-perro-sacando-lengua-ilustracion-icono-dibujos-animados_138676-2709.jpg'></Card.Img>
              <Card.Text>
                <p>Mascota: Nombre mascota</p>
                <p className='text-muted'>Dueño: Nombre dueño</p>
              </Card.Text>
            </Card.Header>
            <Card.Body className='bg-lightblue'>
              <Row>
                <Col sm={4}>
                  <Card.Text>Fecha:</Card.Text>
                </Col>
                <Col sm={8}>
                  <p className='bg-white rounded p-1'>dd/mm/aaaa</p>
                </Col>
                <Col sm={4}>
                  <Card.Text>Hora:</Card.Text>
                </Col>
                <Col sm={8}>
                  <p className='bg-white rounded p-1'>hh/mm</p>
                </Col>
                <Col sm={4}>
                  <Card.Text>Síntomas:</Card.Text>
                </Col>
                <Col sm={8}>
                  <p className='bg-white rounded p-1'>síntomas</p>
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