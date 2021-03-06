import React from "react";
import Form from "./contact-form/Index";
import Map from "./map/Index";
function Index() {
  return (
    <div
      style={{ backgroundColor: "#13569a", padding: "1rem" }}
      id="contact-container"
    >
      <h1 className="text-center" style={{ color: "#fff", fontSize: "3rem" }}>
        Contacto
      </h1>
      <Form />
      <Map />
    </div>
  );
}

export default Index;
