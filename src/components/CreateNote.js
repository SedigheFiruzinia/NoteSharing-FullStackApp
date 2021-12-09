import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import noteService from "../services/notes";

const CreateNote = () => {
  //const Notes = useSelector((element) => element.Notes);
  const [text, setText] = useState("");

  const handleNote = async (event) => {
    event.preventDefault();
    try {
      await noteService.create(text);
      //window.localStorage.setItem("loggedInUser", JSON.stringify(note));
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <div className="container col-md-4 col-md-offset-4 centered">
      <Form onSubmit={handleNote}>
        <Form.Group>
          <Form.Control
            className="textFeedback mt-5 mb-2"
            as="textarea"
            rows="10"
            placeholder="type new note..."
            type="text"
            color="black"
            name="text"
            onChange={({ target }) => setText(target.value)}
          />
          <Button
            className="btnFormSend "
            variant="outline-success"
            type="submit"
          >
            Create
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
export default CreateNote;
