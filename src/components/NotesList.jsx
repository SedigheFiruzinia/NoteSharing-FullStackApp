import React, { useState } from "react";
import { Col, Card, Row, Container, Navbar } from "react-bootstrap";
import i from "./Images/i.jpg";
import grocery from "./Images/grocery.jpg";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import NavBar from "./NavBar";

const NotesList = ({ Notes, setClickedNote }) => {
  const noteitem = Notes.map((note, i) => (
    <div key={i}>
      <Card
        className="m-3"
        onClick={() => onClick(note)}
        style={{ cursor: "pointer" }}
      >
        <Card.Body style={{ fontSize: "12px" }}>
          <Card.Text className="text-truncate">{note.text}</Card.Text>
          <footer className="blockquote-footer mt-1">last update</footer>{" "}
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-center">{i + 1}</div>
    </div>
  ));
  const onClick = (note) => {
    setClickedNote(note);
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
        className="NotesScroll ms-1 mt-5" //justify-content-center align-items-center ml-1 pl-1"
      >
        {noteitem}
      </Container>
    </Row>
  );
};

export default NotesList;
