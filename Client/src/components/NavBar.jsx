import React , {useState} from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown, Modal , Button, Form, Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../reducers/loginReducer";
import { clear, noteShared } from "../reducers/noteReducer";
import storage from "../utils/storage";
import Icon from "./Icon";
import logo from "./Images/e.png";
import { unclicked } from "../reducers/clickedReducer";
import { setNotification } from "../reducers/notificationReducer";


const NavBar = ({text}) => {

  const [user, setUser] = useState("");

  const dispatch = useDispatch();
  const users = useSelector ((element) => element.Users)
  const userInStore = useSelector((element) => element.LoggedIn);
  const clickedNote = useSelector((element)=>element.ClickedNote)

  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    if (clickedNote){
      console.log(clickedNote.note.text)

      if (clickedNote.note.text === text)
      {setShow(true)}
      else{
      dispatch(setNotification("Please save the note before sharing!"))
      }
    }
    else {
      dispatch(setNotification("Please select a note to be shared!"))
    }
    
  }



  const newNote = () => dispatch(unclicked())

  const share = () => {
    const sharedWith = users.find( user => user.username === user )
    dispatch(noteShared(clickedNote.note.id,  sharedWith))
    handleClose()
  
  }
  
  const logOut = () => {
    storage.logoutUser();
    dispatch(clear());
    dispatch(loggedOut());
    dispatch(unclicked())
  };


const shouldEnter = () => {
  return(< >
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
  </>)
}

const loggedIn = () => {

return(
< >
            <Nav.Link className="clickable" href="#" as="span" onClick={() => newNote()}>
                <Icon.NewNote />
            </Nav.Link>

            <Nav.Link href="#" as="span" onClick={handleShow}>
                <Icon.Share />
            </Nav.Link>


        <Modal show={show} onHide={handleClose} 
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>Share with people</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control 
            size="lg" 
            type="text" 
            placeholder="Add people" 
            onChange={({ target }) => setUser(target.value)}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={share}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>




      
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
                    <Link
                      to="/login"
                      type="button"
                      style={{ color: "black" }}
                      onClick={() => logOut()}
                    >
                      logout
                    </Link>
                </Dropdown.Menu>
              </Dropdown>
          </>

)

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

      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        {userInStore === null ? shouldEnter() : loggedIn()}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
