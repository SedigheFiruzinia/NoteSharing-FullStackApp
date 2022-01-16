import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notesInitialized } from "../reducers/noteReducer";
import { Col, Row } from "react-bootstrap";
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

  const clickedNote = useSelector((element)=> element.ClickedNote)

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
      <NavBar />
      <div
        className="d-flex justify-content-center align-items-center mt-5"
        style={{
          backgroundColor: "rgba(0, 0, 0, 1)",
          backdropFilter: "blur(9px)",
          height: "92vh",
        }}
      >
        <Col xs={4} sm={2}>
          <NotesList />
        </Col>
        <Col xs={8} sm={10}>
          {clickedNote ===  null ? (
            <NotePad />
          ) : (
            <NoteShowing />
          )}
        </Col>
      </div>
    </Row>
  );
};

export default Profile;
