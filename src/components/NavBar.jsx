import { Link } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown, Dropdown } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../reducers/loginReducer";
import { clear } from "../reducers/noteReducer";
import storage from "../utils/storage";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Icon from "./Icon";
import logo from "./Images/e.png";

const NavBar = () => {
  const dispatch = useDispatch();
  const userInStore = useSelector((element) => element.LoggedIn);
  console.log(userInStore);
  const logOut = () => {
    storage.logoutUser();
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
      <Navbar.Brand className="justify-content-center">
        <img src={logo} width="220" alt=""></img>
      </Navbar.Brand>
      {/* for */}

      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        {userInStore === null ? (
          <>
            <Nav.Link href="#" as="span">
              <Link to="/login" style={{ color: "white" }}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/login" style={{ color: "white" }}>
                Sign In
              </Link>
            </Nav.Link>
          </>
        ) : (
          <>
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
            <Navbar.Brand href="#" as="span">
              <Dropdown>
                <Dropdown.Toggle
                  className="btn-dark"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="dLabel"
                >
                  <Icon.User aria-labelledby="dLabel" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <Link
                      to="/login"
                      type="button"
                      style={{ color: "black" }}
                      onClick={() => logOut()}
                    >
                      logout
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Brand>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
