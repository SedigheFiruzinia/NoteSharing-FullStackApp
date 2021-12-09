import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { loggedOut } from "../reducers/loginReducer";
import { clear } from "../reducers/noteReducer";

const NavBar = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    window.localStorage.clear();
    dispatch(clear()); /// after logout notes of last user shown ain a second???
    dispatch(loggedOut());
  };

  return (
    <Navbar
      className="fixed-top collapseOnSelect nav-bar"
      expand="lg"
      bg="secondary"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span">
            <Link to="/create">
              <Icon.NewNote />
            </Link>
          </Nav.Link>

          <Nav.Link href="#" as="span">
            <Link to="/users">
              <Icon.Share />
            </Link>
          </Nav.Link>

          <Nav.Link href="#" as="span">
            <Button
              style={{ color: "white", fontWeight: "bold" }}
              onClick={() => logOut()}
            >
              Logout
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* <Navbar.Brand href="#" as="span">
              <em style={{ fontSize:15 }}>{userInStore.user.name} logged in <nbsp>     </nbsp> </em>
              <Button variant="info" size="sm" onClick={() => logout()}>logout</Button>{' '}
            </Navbar.Brand> */}
    </Navbar>
  );
};
export default NavBar;
