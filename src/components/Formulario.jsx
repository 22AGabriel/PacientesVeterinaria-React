import { useEffect, useState } from "react";
import { Button, Col, Form, Row} from "react-bootstrap";
import ListaCitas from "./ListaCitas";
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import { validarNombre, validarHoraFecha, validarSintomas } from "../helpers";

const Formulario = () => {
  const citasLocalStorage = JSON.parse(localStorage.getItem('arregoCitasStorage')) || [];
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePersona, setNombrePersona] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [arregloCitas, setArregloCitas] = useState(citasLocalStorage);
  const [ID, setID] = useState(uuidv4());
  const [animal, setAnimal] = useState('');

  useEffect(() => {
    localStorage.setItem('arregoCitasStorage', JSON.stringify(arregloCitas))
  }, [arregloCitas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let mascotaValidada = validarNombre(nombreMascota);
    let personaValidada = validarNombre(nombrePersona);
    let fechaValidada = validarHoraFecha(fecha);
    let horaValidada = validarHoraFecha(hora);
    let sintomasValidados = validarSintomas(sintomas);
    let verificarFecha = (fecha) =>{
      if(citasLocalStorage.find((item) => item.fecha === fecha)){
        return true
      } else {
        return false
      }
    }
    let verificarHora = (hora) =>{
      if(citasLocalStorage.find((item) => item.hora === hora)){
        return true
      } else {
        return false
      }
    }

    if(mascotaValidada && personaValidada && fechaValidada && horaValidada && sintomasValidados){
      if(verificarHora(hora) && verificarFecha(fecha)){
        Swal.fire(
          'Horario ocupado!',
          'Ya existe una cita cargada para ese horario, elije otro',
          'warning'
        )
      } else {
        setArregloCitas([...arregloCitas, {ID, nombreMascota, nombrePersona, fecha, hora, sintomas, animal}]);
        setNombreMascota('');
        setNombrePersona('');
        setFecha('');
        setHora('');
        setAnimal('');
        setSintomas('');
        setID(uuidv4());
        Swal.fire(
          'Datos cargados!',
          'Se agend?? la cita con ??xito',
          'success'
        )
      }
    } else {
      Swal.fire(
        'Faltan datos!',
        'Completa todos los campos para agendar la cita',
        'error'
      )
    }
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
            <Form.Label column as="legend" sm={12} md={4}>Animal:</Form.Label>
            <Col sm={12} md={8} className="mb-3">
              <Form.Check onChange={(e) => setAnimal(e.target.id)} type="radio" label="Perro" name="formHorizontalRadios" id="perro"></Form.Check>
              <Form.Check onChange={(e) => setAnimal(e.target.id)} type="radio" label="Gato" name="formHorizontalRadios" id="gato"></Form.Check>
              <Form.Check onChange={(e) => setAnimal(e.target.id)} type="radio" label="Hamster" name="formHorizontalRadios" id="hamster"></Form.Check>
              <Form.Check onChange={(e) => setAnimal(e.target.id)} type="radio" label="Conejo" name="formHorizontalRadios" id="conejo"></Form.Check>
              <Form.Check onChange={(e) => setAnimal(e.target.id)} type="radio" label="Otro" name="formHorizontalRadios" id="otro"></Form.Check>
            </Col>
            <Form.Label column sm={12} md={4}>Nombre del due??o/a:</Form.Label>
            <Col sm={12} md={8} className="mb-3">
              <Form.Control 
              type="text" 
              placeholder="nombre del due??o/a"
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
              <Form.Label column sm={12} md={4}>S??ntomas: </Form.Label>
            <Col sm={12} md={8} className="mb-3">
              <Form.Control 
              type="textarea" 
              placeholder="describe los s??ntomas"
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
