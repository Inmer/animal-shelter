import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import dataVets from "../data/Vets";

export default function Vets() {
  return (
    <Container>
      <Row className="my-5 bg-success">
        <Col lg={5} className="my-auto text-white">
          <h2>Our vets</h2>
          <ul>
            {dataVets.map((item) => (
              <li>{item.Name}</li>
            ))}
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quas numquam a voluptatem. Cum facilis enim facere eum quo. Suscipit
            enim alias provident quidem eveniet non iure adipisci nobis nihil.
          </p>
        </Col>
        <Col lg={7} className="px-0">
          <Image
            src="https://creditkarma-cms.imgix.net/wp-content/uploads/2018/03/options-huge-vet-bill.jpg?compress=1"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
}
