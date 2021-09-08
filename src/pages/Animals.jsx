import React from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import dataAnimals from "../data/Animals";

export default function Animals() {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4 my-5">
        {dataAnimals.map((item) => (
          <Col key={item.id}>
            <Card className="shadow">
              <Card.Img
                variant="top"
                src={require(`../images/${item.Image}`).default}
              />
              <Card.Body>
                <Card.Title>{item.Name}</Card.Title>
                <Card.Text>
                  <span>
                    <strong>Sex: </strong> {item.Sex}
                  </span>
                  <p>
                    <strong>Age: </strong> {item.Age ? item.Age : "Unknow"}
                  </p>
                </Card.Text>
                <Link to="/">
                  <Button variant="success">Adopt</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
