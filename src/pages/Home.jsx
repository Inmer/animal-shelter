import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <div className="bg-success d-flex" style={{ height: "300px" }}>
        <Container className="d-flex align-items-center justify-content-center">
          <span
            style={{ color: "white", fontSize: "50px", fontWeight: "bold" }}
          >
            Adopt an animal and change its life, and yours.
          </span>
        </Container>
      </div>
      <Container>
        <Row className="my-5">
          <Col
            lg={4}
            className="d-flex align-items-center justify-content-center"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore
              cupiditate quia at animi deserunt, perspiciatis, officia, atque
              enim quo modi ipsa nulla. Asperiores aliquid atque impedit
              corrupti ipsam iusto?
            </p>
          </Col>
          <Col lg={8}>
            <Image
              src="https://thumbs.dreamstime.com/b/group-pets-set-puppy-kitten-guinea-pig-60466857.jpg"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
