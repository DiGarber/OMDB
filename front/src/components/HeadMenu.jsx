import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { logOut } from "../store/action-creators/user";


const HeadMenu = ({ user, logOut }) => {
  const handleLogout = () => {
    logOut().then(() => history.push("/login"));
  }

  return (
  /*{<Nav >
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
        <NavDropdown.Item href="/register">Log Out</NavDropdown.Item>
          {user.id &&(<NavDropdown.Item href="/favs">Mis Favoritos</NavDropdown.Item>)} 
        </NavDropdown>
     </Nav>}*/

    <Navbar id="headmenu" fixed="top"  expand="lg">
      <Nav className="mr-auto nav">
        <Navbar.Brand href="/">
          <img src="https://www.filmnod.com/design/omdb-logo.jpg" alt="logo" id="logo" />
        OMDB
        </Navbar.Brand>
      </Nav>
      <Nav className="nav">
        {(
          <>
          <Button href="/">
              Home
            </Button>
            <Button href="/login" >
              Log In
            </Button>
            <Button href="/register" >
              Sign In
            </Button>
            {user.id && (
              <div>
        <Button  onClick={handleLogout} className="sb" variant="dark">
          Log Out
        </Button>
        <Button  /*href="/favs"*/ href="#" className="sb" variant="dark">
        Mis Favoritos
      </Button>
      </div>
      )}
          </>
        )}
      </Nav>
    </Navbar>
  )
};
const mapStateToProps = (state, { history }) => {
  return {
    user: state.user,
    history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadMenu);