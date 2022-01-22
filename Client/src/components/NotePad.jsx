import React from "react";
import { useEffect } from "react";
import { Form, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { noteCreated, noteupdated } from "../reducers/noteReducer";
import { clicked } from "../reducers/clickedReducer";
import Icon from "./Icon";
import noteService from "../services/notes";

const NotePad = ({ text, setText }) => {
  const clickedNote = useSelector((element) => element.ClickedNote);

  const dispatch = useDispatch();

  useEffect(() => {
    clickedNote !== null ? setText(clickedNote.note.text) : setText("");
  }, [clickedNote]);

  const lastUpdated = (updatedAt) => {
    let r = "last updated on " + updatedAt;
    const now = new Date().toLocaleString();
    const diffTime = now
      .substring(0, 9)
      .localeCompare(updatedAt.substring(0, 9));
    if (diffTime === 0) {
      r = "last updated at" + updatedAt.substring(10);
    }
    return r;
  };

  const saveNote = async () => {
    let note;
    if (clickedNote) {
      note = await noteService.update(clickedNote.note.id, text);
      dispatch(noteupdated(note));
      dispatch(clicked(note));
    } else {
      note = await noteService.create(text);
      dispatch(noteCreated(note));
    }
    dispatch(clicked(note));
  };

  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Col xs={12} sm={8} className="mt-3 pt-3">
        <Form>
          <Form.Group>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-disabled">Save!</Tooltip>}
            >
              <Form.Label className="mb-3" onClick={() => saveNote()}>
                <Icon.Done /> <Icon.ThreeDots />
              </Form.Label>
            </OverlayTrigger>
            <Form.Control
              className="textFeedback rounded-0"
              style={{ border: "2px solid #ccc", color: "rgba(5, 5, 5, 0.8)" }}
              as="textarea"
              rows="20"
              type="text"
              name="text"
              value={text}
              onChange={({ target }) => setText(target.value)}
            />
            <Form.Text className="lead text-muted">
              {clickedNote !== null
                ? lastUpdated(clickedNote.note.updatedAt)
                : ""}
            </Form.Text>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};
export default NotePad;
