import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Container } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import { clicked } from "../reducers/clickedReducer";
import { useEffect } from "react";
import { useState } from "react";

const NotesList = () => {
  const dispatch = useDispatch();
  const users = useSelector((element) => element.Users);
  const own = useSelector((element) => element.Notes);
  const userInStore = useSelector((element) => element.LoggedIn.user);
  // const Notes = [...own, ...userInStore.sharedNotes.sharedNotes];
  const shared = [...userInStore.sharedNotes.sharedNotes];
  console.log(shared);
  const [result, setresult] = useState([]);
  let Notes;

  useEffect(() => {
    setresult(
      userInStore.sharedNotes.sharedNotes.map(
        (n) => (n = { ...n, owner: users.find((u) => u.id === n.owner) })
      )
    );
  }, []);
  Notes = [...own, ...result];
  console.log("result", result);

  // const check = (owner) => {
  //   const r = users.find((u) => u.id === owner.owner);
  //   owner.owner = r;
  //   return r;
  // };

  // let result;
  // result = shared.map((n) => check(n));

  // const Notes = [...own, ...shared];
  // const r = [...own, ...result];
  // console.log("Notes", Notes);
  // console.log("result", result);

  const onClick = (note) => {
    dispatch(clicked(note));
    console.log(note);
  };
  console.log(Notes);
  return (
    <Row className="NotesScroll mt-5 pt-5 justify-content-center">
      {Notes.map((note, i) => (
        <Fragment key={i}>
          <Container className="d-flex justify-content-center">
            <Card
              className=" rounded-0"
              onClick={() => onClick(note)}
              style={{ cursor: "pointer", width: "118px", height: "150px" }}
            >
              {/* {typeof note.owner === "string" && (
                <Card.Title
                  className=" border circle text-center m-2 "
                  style={{ fontSize: "13px" }}
                >
                  b
                </Card.Title>
              )} */}

              {note.owner.id !== userInStore.id && (
                <Card.Title
                  className=" border circle text-center m-2 "
                  style={{ fontSize: "13px" }}
                >
                  {note.owner.name.charAt(0)}
                </Card.Title>
              )}
              <Card.Body style={{ fontSize: "12px" }}>
                <Card.Text
                  className="TextTruncation"
                  style={{ color: "rgba(5, 5, 5, 0.7)" }}
                >
                  {note.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
          <p className="text-center" style={{ color: "rgba(5, 5, 5, 0.3)" }}>
            {i + 1}
          </p>
        </Fragment>
      ))}
    </Row>
  );
};

export default NotesList;
