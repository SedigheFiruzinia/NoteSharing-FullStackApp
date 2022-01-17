import React, { useState }  from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const NoteShowing = () => {
  const clickedNote = useSelector((element)=> element.ClickedNote)
  console.log(clickedNote)
  const [text, setText] = useState("");

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
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Col className="col-8">
      {/* <Card className="m-3">
        <Card.Body style={{ fontSize: "16px"}}>
          <Card.Text>{clickedNote.note.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="text-muted" style={{ fontSize: "10px" }}> {lastUpdated(clickedNote.note.updatedAt)}</div>
          </Card.Footer>
      </Card> */}
{/* <div calssName="NotesScroll" style={{borderStyle: "solid", backgroundColor:"white"}}>
  <p className="lead">{clickedNote.note.text}</p>
</div> */}

<Form onSubmit={handleNote}>
          <Form.Group>
            <Form.Control
              className="textFeedback mb-2 rounded-0 red-border-focus"
              as="textarea"
              rows="16"
              placeholder={clickedNote.note.text}
              type="text"
              name="text"
              value={clickedNote.note.text}
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
export default NoteShowing;
