import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notesInitialized } from "../reducers/noteReducer";
import { Col, Row } from "react-bootstrap";
import storage from "../utils/storage";
import backgroundImg from "./Images/a.jpg";
import NoteForm from "./NoteForm";
import { loggedin } from "../reducers/loginReducer";
import noteService from "../services/notes";
import NoteCard from "./NoteCard";
import Login from "./Login";

const Profile = () => {
  const dispatch = useDispatch();
  const Notes = useSelector((element) => element.Notes);

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
    <div>
      <Row>
        <Col
          className="d-flex align-items-center justify-content-center mt-5 pt-5"
          style={{
            backgroundColor: "rgba(5, 5, 5, 0.2)",
            backdropFilter: "blur(9px)",
          }}
        >
          <NoteForm />
        </Col>
      </Row>
      <NoteCard Notes={Notes} />
    </div>
  );
};

export default Profile;
