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
      <Col className="col-8">
      <Card className="m-3">
        <Card.Body style={{ fontSize: "16px"}}>
          <Card.Text>{note.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="text-muted" style={{ fontSize: "10px" }}>Last updated 3 mins ago</div>
          </Card.Footer>
      </Card>


            <Button
              className="btnFormSend mb-2"
              variant="outline-success"
              type="submit"
            >
              Create
            </Button>

      </Col>
    </Row>
  );
};
export default ShowNote;
