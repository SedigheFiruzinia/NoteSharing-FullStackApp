import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Container } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import { clicked } from "../reducers/clickedReducer";

const NotesList = () => {
  const Notes = useSelector((element) => element.Notes);
  const dispatch = useDispatch();

  const noteitem = Notes.map((note, i) => (
    <Container key={i} className="justify-content-center">
      <Card
        className="m-3 rounded-0"
        onClick={() => onClick(note)}
        style={{ cursor: "pointer", width: "7rem",height:"9rem" }}
      >
        <Card.Body style={{ fontSize: "12px" }}>
          <Card.Text className="TextTruncation" >{note.text}</Card.Text>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-center" style={{color:"powderblue"}}>{i + 1}</div>
    </Container>
  ));

  const onClick = (note) => {
  dispatch(clicked(note));
  
  console.log(note)
  };

  return (
    <Row className="mx-0 px-0">
      <Container className="NotesScroll mt-5" >
        {noteitem}
      </Container>
    </Row>
  );
};

export default NotesList;
