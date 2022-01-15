import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { noteCreated } from "../reducers/noteReducer";

import grocery from "./Images/grocery.jpg";
import todo from "./Images/a.jpg";

const NotePad = () => {
  //const Notes = useSelector((element) => element.Notes);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleNote = async (event) => {
    event.preventDefault();
    try {
      console.log("hi from create note");
      dispatch(noteCreated(text));
      //window.localStorage.setItem("loggedInUser", JSON.stringify(note));
      setText(" ");
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Col className="col-5">
        <Form onSubmit={handleNote}>
          <Form.Group>
            <Form.Control
              className="textFeedback mb-2"
              as="textarea"
              rows="8"
              placeholder="type new note..."
              type="text"
              color="black"
              name="text"
              value={text}
              onChange={({ target }) => setText(target.value)}
            />
            <Button
              className="btnFormSend mb-2"
              variant="outline-success"
              type="submit"
            >
              Create
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};
export default NotePad;
