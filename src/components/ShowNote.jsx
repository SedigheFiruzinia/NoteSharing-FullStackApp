import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { noteCreated } from "../reducers/noteReducer";

import grocery from "./Images/grocery.jpg";
import todo from "./Images/a.jpg";

const ShowNote = ({ note }) => {
  //const Notes = useSelector((element) => element.Notes);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleNote = async (event) => {
    event.preventDefault();
    try {
      dispatch(noteCreated(text));
      setText(" ");
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Col className="col-5">
      <Card
        className="m-3"
        style={{ cursor: "pointer" }}
      >
        <Card.Body style={{ fontSize: "12px" }}>
          <Card.Text className="text-truncate">{note.text}</Card.Text>
          <footer className="blockquote-footer mt-1">last update</footer>{" "}
        </Card.Body>
      </Card>

        {/* <Form onSubmit={handleNote}>
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
            /> */}
            <Button
              className="btnFormSend mb-2"
              variant="outline-success"
              type="submit"
            >
              Create
            </Button>
          {/* </Form.Group>
        </Form> */}
      </Col>
    </Row>
  );
};
export default ShowNote;
