import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let name = evt.target[0].value;
    let lastName = evt.target[1].value;
    let email = evt.target[2].value;
    let password = evt.target[3].value;
    axios
      .post("/api/register", { name, lastName, email, password })
      .then(() => this.props.history.push("/login"));
  }

  render() {
    return (
    
        <Form className="login" onSubmit={this.handleSubmit}>
          <h1>Registrate</h1>
          <Form.Group>
            <Form.Label className="loginLabel">Nombre</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group>
            <Form.Label className="loginLabel">Apellido</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="loginLabel">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="loginLabel">Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
    );
  }
}
export default Register;
