import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import backgroundImg from "./Images/c.jpg";

const ListofNotes = ({ Notes })=>{
        const rowsNumber = [...Array(Math.ceil(Notes.length / 3))];
        const Rows = rowsNumber.map((row, i) => Notes.slice(i * 3, i * 3 + 3));
        const content = Rows.map((row, i) => (
          <Row
            key={i}
            className="d-flex justify-content-center align-items-center ml-0 pl-0"
          >
            {row.map((n) => (
              <Col className="col-3 mb-4" key={n.id}>
                <Card>
                  <Card.Body>
                    <Card.Text>
                      {n.text.length > 15 ? n.text.slice(0, 15) + "..." : n.text}
                    </Card.Text>
                    <footer className="blockquote-footer">last update</footer>{" "}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ));
      
        return (
          <div
            className="mx-0 px-0"
            style={{
              backgroundImage: `url(${backgroundImg})`,
              height: "100vh",
              backgroundSize: "100% 100%",
            }}
          >
            <div
              className="mask align-items-center" //d-flex align-items-center h-100 justify-content-center"
              style={{
                backgroundColor: "rgba(0, 5, 20, 0.8)",
                backdropFilter: "blur(8px)",
                height: "100vh",
                backgroundSize: "100% 100%",
              }}
            >
              <Row>
                <Col md={{ span: 8, offset: 2 }}>
                  <p className="mt-4" style={{ color: "white" }}>
                    Recent documents
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 8, offset: 2 }} className="mt-5">
                  {content}
                </Col>
              </Row>
            </div>
          </div>
        );
      
}

export default ListofNotes