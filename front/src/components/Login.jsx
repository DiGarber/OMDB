import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { fetchUser } from "../store/action-creators/user";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    this.props.fetchUser({ email, password }).then(() => {
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <>
        <Form className="login" onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="loginLabel">Email</Form.Label>
            <Form.Control type="email" placeholder="Dirección de email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="loginLabel">Contraseña</Form.Label>
            <Form.Control type="password" placeholder="contraseña" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: ({ email, password }) =>
      dispatch(fetchUser({ email, password })),
    history: ownProps.history,
  };
};
export default connect(null, mapDispatchToProps)(Login);