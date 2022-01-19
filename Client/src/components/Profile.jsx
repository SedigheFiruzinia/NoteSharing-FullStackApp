import React, { useEffect , useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { notesInitialized } from "../reducers/noteReducer";
import { Col, Row, Toast, ToastContainer } from "react-bootstrap";
import storage from "../utils/storage";
import NotePad from "./NotePad";
import { loggedin } from "../reducers/loginReducer";
import noteService from "../services/notes";
import NavBar from "./NavBar";
import NotesList from "./NotesList";
import NoteShowing from "./NoteShowing";

const Profile = () => {
  //const [clickedNote, setClickedNote] = useState([]);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const clickedNote = useSelector((element)=> element.ClickedNote)
  const notification = useSelector((element)=> element.Notification)
  useEffect(() => {
    const loggedUser = storage.loadUser();
    if (loggedUser) {
      dispatch(loggedin(loggedUser));
      dispatch(notesInitialized(loggedUser.id));
      noteService.setToken(loggedUser.token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row style={{ marginRight: 0 }}>
      <NavBar text={text}/>
      <div
        className="d-flex justify-content-center align-items-center pt-4"
        style={{
          // backgroundColor: "rgba(166, 166, 216, 0.07)",
          backgroundColor: "white",
          height: "100vh",
        }}
      >
        <Col xs={4} sm={2} style={{backgroundColor: "#f7f7f7"}}>
          <NotesList />
        </Col>
        <Col xs={8} sm={10} style={{backgroundColor: "white"}}>
          <NotePad text={text} setText={setText}/>
        </Col>
      </div>

     {notification && 
     <ToastContainer className="p-5" position={'bottom-end'} >
        <Toast bg="info">
        <Toast.Body>{notification.text}</Toast.Body>
      </Toast>
      </ToastContainer>

}
      
    </Row>
  );
};

export default Profile;
