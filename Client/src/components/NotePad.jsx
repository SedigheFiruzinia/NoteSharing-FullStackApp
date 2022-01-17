import React, { useState } from "react";
import { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { noteCreated } from "../reducers/noteReducer";



const NotePad = () => {

  const [text, setText] = useState("");

  const clickedNote = useSelector((element)=> element.ClickedNote)
  const dispatch = useDispatch();

  
  useEffect(() => {
    clickedNote !== null ?  setText(clickedNote.note.text) : setText("")
  }, [clickedNote]);
  

  const lastUpdated =(updatedAt)=>{
    let r = "last updated on " + updatedAt
    const now = new Date().toLocaleString()
    const diffTime = now.substring(0,9).localeCompare(updatedAt.substring(0,9))
    if (diffTime === 0)
    {r = "last updated at" + updatedAt.substring(10)}
    return r
  }


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
      <Col className="col-7">
        <Form onSubmit={handleNote}>
          <Form.Group>
          {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              className=" textFeedback mb-2 rounded-0 red-border-focus"
              as="textarea"
              rows="16"
              type="text"
              name="text"
              value={text}
              onChange={({ target }) => setText(target.value)}
            />
            <Form.Text className="lead text-muted">
            {clickedNote !== null ? lastUpdated(clickedNote.note.updatedAt) : ""}
            </Form.Text>
            {/* <div className="text-muted" style={{ fontSize: "10px" }}> {lastUpdated(clickedNote.note.updatedAt)}</div> */}
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
