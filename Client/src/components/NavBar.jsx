import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../reducers/loginReducer";
import { clear } from "../reducers/noteReducer";
import storage from "../utils/storage";
import Icon from "./Icon";
import logo from "./Images/e.png";
import clickedReducer, { unclicked } from "../reducers/clickedReducer";

const NavBar = () => {
  const dispatch = useDispatch();
  const userInStore = useSelector((element) => element.LoggedIn);
  
  
  const logOut = () => {
    storage.logoutUser();
    dispatch(clear());
    dispatch(loggedOut());
    dispatch(unclicked())
  };

  const newNote = () => {
    dispatch(unclicked())
  }


  return (
    <Navbar  
      style={{
      borderBlockEnd:"solid",
      borderBlockWidth:"1px",
      borderBlockColor:"rgb(179, 174, 174, .4)",
    }}
      className="fixed-top collapseOnSelect nav-bar"
      expand="lg"
      bg= "dark"
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

            <Nav.Link className="clickable" href="#" as="span" onClick={() => newNote()}>
                <Icon.NewNote />
            </Nav.Link>

            <Nav.Link href="#" as="span">
              <Link to="/users">
                <Icon.Share />
              </Link>
            </Nav.Link>

            {/* <Navbar.Brand href="#" as="span"> */}
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
                  {/* <Dropdown.Item href="#" as="Link" to="/login" onClick={() => logOut()}> */}
                    <Link
                      to="/login"
                      type="button"
                      style={{ color: "black" }}
                      onClick={() => logOut()}
                    >
                      logout
                    </Link>
                  {/* </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            {/* </Navbar.Brand> */}
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
