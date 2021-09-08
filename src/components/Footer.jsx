import React from "react";
import { Facebook, Instagram } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <div
      className="bg-black d-flex align-items-center justify-content-center g-5"
      style={{ height: "100px" }}
    >
      <span className="me-3 text-white"> Follow us</span>
      <Facebook color="white" size={25} className="me-3" />
      <Instagram color="white" size={25} />
    </div>
  );
}
