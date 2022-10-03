import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Cita = ({cita, borrarCita}) => {
  let animal = ""
  switch(cita.animal){
    case "perro":
      animal = "https://img.freepik.com/vector-gratis/lindo-perro-sacando-lengua-ilustracion-icono-dibujos-animados_138676-2709.jpg?w=900&t=st=1664821297~exp=1664821897~hmac=77f5e0a820678046ed623fe6d101ec89361001409b1f7563d66468fc98f9032b";
      break;
    case "gato":
      animal = "https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-bola-hilo-lindo-gato-jugando-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4169.jpg?w=900&t=st=1664820905~exp=1664821505~hmac=9b48b8fded4d330466d9148f96ddad69181e4a9609ec02e2938131935b391970";
      break;
    case "hamster":
      animal = "https://img.freepik.com/vector-gratis/lindo-hamster-sosteniendo-ilustracion-icono-vector-dibujos-animados-semilla-girasol-icono-alimento-animal-aislado_138676-5791.jpg?w=900&t=st=1664821685~exp=1664822285~hmac=6258d14aaff7adbd6df04fc4c136a0695c13924f891b7275d4198d93174d38e3";
      break;
    case "conejo":
      animal = "https://img.freepik.com/vector-gratis/lindo-conejo-sosteniendo-zanahoria-pulgar-arriba-dibujos-animados-vector-icono-ilustracion-animal-naturaleza-aislada_138676-4811.jpg?w=900&t=st=1664821714~exp=1664822314~hmac=7f8637bdae0f24a5bd992c59e31f1d0e7d5e602d33db5cab9dd789b8fa485fe1";
      break;
    default: animal = "https://img.freepik.com/vector-gratis/lindo-oso-panda-pareja-juntos-dibujos-animados-vector-icono-ilustracion-icono-amor-animal-aislado_138676-5950.jpg?w=740&t=st=1664821999~exp=1664822599~hmac=70460e9be979811f169578afb45d3c0f1e6b0d830779ab612bf02e756dc1f68c";
  }

    return (
        <Col sm={12} md={6} className='mb-3'>
          <Card>
            <Card.Header className='d-flex'>
              <Card.Img className='img me-3 mt-2' src={animal}></Card.Img>
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
              <Button variant='danger' onClick={() => borrarCita(cita.ID)}>Borrar</Button>
            </Card.Footer>
          </Card>
        </Col>
    );
};

export default Cita;