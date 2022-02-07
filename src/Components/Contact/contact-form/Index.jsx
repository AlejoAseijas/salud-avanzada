import React from "react";
import { Form as FormBootstrap, Container, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import emailjs from "@emailjs/browser";

function Index() {
  const sendEmail = (data) => {
    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     //form.current,
    //     "YOUR_USER_ID"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
      }}
      validate={(data) => {
        let err = {};
        if (!data.name) {
          err.name = "Ingrese su nombre";
        }

        if (!data.email) {
          err.email = "Ingrese su email";
        }

        if (!data.phone) {
          err.phone = "Ingrese su celular";
        }

        return err;
      }}
      onSubmit={(data, { resetForm }) => {
        sendEmail(data);
        resetForm();
      }}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form>
          <Container
            className="p-3 mt-2"
            style={{ backgroundColor: "#37788C2" }}
          >
            <FormBootstrap.Group className="mb-3">
              <Field
                id="name"
                as={FormBootstrap.Control}
                name="name"
                placeholder="Nombre y apellido"
                isInvalid={touched.name && errors.name}
              />

              <FormBootstrap.Control.Feedback type="invalid">
                {errors.name}
              </FormBootstrap.Control.Feedback>
            </FormBootstrap.Group>

            <FormBootstrap.Group className="mb-3">
              <Field
                id="email"
                as={FormBootstrap.Control}
                name="email"
                placeholder="Email"
                isInvalid={touched.email && errors.email}
              />
              <FormBootstrap.Control.Feedback type="invalid">
                {errors.email}
              </FormBootstrap.Control.Feedback>
            </FormBootstrap.Group>

            <FormBootstrap.Group className="mb-3">
              <Field
                id="phone"
                as={FormBootstrap.Control}
                name="phone"
                placeholder="Celular"
                isInvalid={touched.phone && errors.phone}
              />
              <FormBootstrap.Control.Feedback type="invalid">
                {errors.phone}
              </FormBootstrap.Control.Feedback>
            </FormBootstrap.Group>

            <Container className="text-center">
              <Button variant="success" type="submit">
                Enviar
              </Button>
            </Container>
          </Container>
        </Form>
      )}
    </Formik>
  );
}

export default Index;
