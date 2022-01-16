import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Container } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import { clicked } from "../reducers/clickedReducer";

const NotesList = () => {
  const Notes = useSelector((element) => element.Notes);
  const dispatch = useDispatch();

  const noteitem = Notes.map((note, i) => (
    <div key={i}>
      <Card
        className="m-1"
        onClick={() => onClick(note)}
        style={{ cursor: "pointer" }}
      >
        <Card.Body style={{ fontSize: "12px" }}>
          <Card.Text className="TextTruncation" >{note.text}</Card.Text>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-center">{i + 1}</div>
    </div>
  ));

  const onClick = (note) => {
  dispatch(clicked(note));
  
  console.log(note)
  };

  return (
    <Row
      className="mx-0 px-0"
      // style={{
      //   height: "100vh",
      //   backgroundSize: "100% 100%",
      // }}
    >
      <Container
        className="NotesScroll mt-5" //justify-content-center align-items-center ml-1 pl-1"
      >
        {noteitem}
      </Container>
    </Row>
  );
};

export default NotesList;
