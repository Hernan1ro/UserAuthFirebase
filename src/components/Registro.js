import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { registerSincrono } from "../actions/actionsRegister";
import { useDispatch } from "react-redux";

export const Registro = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    nombre: "Hernán",
    email: "hernandmf@gmail.com",
    pass1: "123456",
    pass2: "123456",
  });
  const { nombre, email, pass1, pass2 } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(registerSincrono(email, pass1, nombre));
  };
  return (
    <div>
      <Form onSubmit={handleRegistro}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            value={nombre}
            onChange={handleInputChange}
            type="text"
            placeholder="Enter name"
            name="nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            value={email}
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            value={pass1}
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
            name="pass1"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRepitPassword">
          <Form.Label>Repita contraseña</Form.Label>
          <Form.Control
            value={pass2}
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
            name="pass2"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>

        <Link to="/">Login</Link>
      </Form>
    </div>
  );
};
