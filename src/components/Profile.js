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
    <div
      className="mx-0 px-0"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <div
        className="mask align-items-center " //d-flex align-items-center h-100 justify-content-center"
        style={{
          backgroundColor: "rgba(0, 5, 20, 0.8)",
          backdropFilter: "blur(8px)",
          height: "100vh",
          backgroundSize: "100% 100%",
        }}
      >
        <Row>
          <NoteCard Notes={Notes} />
          <Col
            className="mask col-4 d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "rgba(5, 5, 5, 0.2)",
              backdropFilter: "blur(9px)",
              height: "100vh",
              backgroundSize: "100% 100%",
            }}
          >
            <NoteForm />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
