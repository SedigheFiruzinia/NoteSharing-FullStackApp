import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const NoteCard = ({ Notes }) => {
  const rowsNumber = [...Array(Math.ceil(Notes.length / 3))];
  const Rows = rowsNumber.map((row, i) => Notes.slice(i * 3, i * 3 + 3));
  const content = Rows.map((row, i) => (
    <Row
      xs={1}
      md={2}
      key={i}
      className="d-flex justify-content-center align-items-center"
    >
      {row.map((n) => (
        <Col className="col-3 mb-4" key={n.id}>
          <Card>
            <Card.Body>
              <Card.Text>
                {" "}
                {n.text.length > 21 ? n.text.slice(0, 21) + "..." : n.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  ));

  return <Col className="mt-5 pt-5">{content}</Col>;
};

export default NoteCard;
