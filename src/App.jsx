import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Formulario from './components/Formulario';
import "./app.css"

function App() {
  return (
    <Container className='my-5 d-flex flex-column align-items-center'>
      <h1>Administrador pacientes de veterinaria</h1>
      <Formulario></Formulario>
    </Container>
  );
}

export default App;
