import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const NoteShowing = () => {
  const clickedNote = useSelector((element)=> element.ClickedNote)
  console.log(clickedNote)

  const lastUpdated =(updatedAt)=>{
    let r = "last updated on " + updatedAt
    const now = new Date().toLocaleString()
    const diffTime = now.substring(0,9).localeCompare(updatedAt.substring(0,9))
    if (diffTime === 0)
    {r = "last updated at" + updatedAt.substring(10)}
    return r
  }

  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Col className="col-8">
      <Card className="m-3">
        <Card.Body style={{ fontSize: "16px"}}>
          <Card.Text>{clickedNote.note.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="text-muted" style={{ fontSize: "10px" }}> {lastUpdated(clickedNote.note.updatedAt)}</div>
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
export default NoteShowing;
