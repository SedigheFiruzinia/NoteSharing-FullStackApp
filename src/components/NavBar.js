import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import Icon from "./Icon";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../reducers/loginReducer";
import { clear } from "../reducers/noteReducer";

const NavBar = () => {
  const dispatch = useDispatch();
  const userInStore = useSelector((element) => element.LoggedIn);
  console.log("in navbar", userInStore);

  const logOut = () => {
    window.localStorage.clear();
    dispatch(clear());
    dispatch(loggedOut());
  };

  return (
    <Navbar
      className="fixed-top collapseOnSelect nav-bar"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
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
      </Navbar.Collapse>

      {userInStore === null ? (
        <Nav.Link href="#" as="span">
          <Link to="/login">
            <Button className="mx-5" variant="info" size="sm">
              login
            </Button>
          </Link>
        </Nav.Link>
      ) : (
        <Navbar.Brand href="#" as="span">
          <em style={{ fontSize: 15 }} className="mr-2">
            {userInStore.user.name}
          </em>
          <Link to="/login">
            <Button variant="light" size="sm" onClick={() => logOut()}>
              logout
            </Button>
          </Link>
        </Navbar.Brand>
      )}
    </Navbar>
  );
};
export default NavBar;
