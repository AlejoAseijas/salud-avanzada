import React from "react";
import { Form as FormBootstrap, Container, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import emailjs from "@emailjs/browser";

function Index() {
  const sendEmail = (data) => {
    console.log(data);
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
        familiarGroup: "",
        ages: "",
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

        if (!data.familiarGroup) {
          err.familiarGroup = "Ingrese la cantidad de personas";
        }

        if (!data.ages) {
          err.ages = "Ingrese las edades";
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
                id="familiarGroup"
                as={FormBootstrap.Control}
                name="familiarGroup"
                placeholder="Cantidad de persona del grupo familiar"
                isInvalid={touched.familiarGroup && errors.familiarGroup}
              />
              <FormBootstrap.Control.Feedback type="invalid">
                {errors.familiarGroup}
              </FormBootstrap.Control.Feedback>
            </FormBootstrap.Group>

            <FormBootstrap.Group className="mb-3">
              <Field
                id="ages"
                as={FormBootstrap.Control}
                name="ages"
                placeholder="Edades de las personas, separadas por una coma"
                isInvalid={touched.ages && errors.ages}
              />
              <FormBootstrap.Control.Feedback type="invalid">
                {errors.ages}
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
