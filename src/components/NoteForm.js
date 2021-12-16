import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { noteCreated } from "../reducers/noteReducer";

const NoteForm = () => {
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
    <Row>
      <Form onSubmit={handleNote}>
        <Form.Group>
          <Form.Control
            className="mb-2"
            as="textarea"
            rows="8"
            placeholder="type new note..."
            type="text"
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
    </Row>
  );
};
export default NoteForm;
