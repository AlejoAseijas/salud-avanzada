import React from "react";
import { Form as FormBootstrap, Container, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";

function Index() {
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        code: "",
      }}
      validate={(data) => {
        let err = {};
        if (!data.name) {
          err.name = "Ingrese nombre del producto";
        }

        if (!data.description) {
          err.description = "Ingrese descripcion del producto";
        }

        if (!data.code) {
          err.code = "Ingrese descripcion del producto";
        }

        return err;
      }}
      onSubmit={(data, { resetForm }) => {}}
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
                placeHolder="Nombre y apellido"
                isInvalid={touched.name && errors.name}
              />

              <FormBootstrap.Control.Feedback type="invalid">
                {errors.name}
              </FormBootstrap.Control.Feedback>
            </FormBootstrap.Group>

            <FormBootstrap.Group className="mb-3">
              <Field
                id="description"
                as={FormBootstrap.Control}
                name="description"
                placeHolder="Email"
                isInvalid={touched.description && errors.description}
              />
              <FormBootstrap.Control.Feedback type="invalid">
                {errors.description}
              </FormBootstrap.Control.Feedback>
            </FormBootstrap.Group>

            <FormBootstrap.Group className="mb-3">
              <Field
                id="code"
                as={FormBootstrap.Control}
                name="code"
                placeHolder="Celular"
                isInvalid={touched.code && errors.code}
              />
              <FormBootstrap.Control.Feedback type="invalid">
                {errors.code}
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
