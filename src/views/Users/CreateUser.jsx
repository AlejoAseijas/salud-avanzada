import React from "react";
import { Formik, Form, Field } from "formik";
import { Form as FormBootstrap, Container, Button } from "react-bootstrap";
import { createUser } from "../../services/index";
function CreateUser() {
  return (
    <>
      <Container style={{ maxWidth: "30rem" }} className="  my-2">
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            dni: "",
            password: "",
          }}
          validate={(data) => {
            let err = {};
            if (!data.name) {
              err.name = "Ingrese un nombre";
            }

            if (!data.lastName) {
              err.lastName = "Ingrese un apellido";
            }

            if (!data.dni) {
              err.dni = "Ingrese el numero de dni";
            }
            if (!data.password) {
              err.password = "Ingrese la contraseña";
            }

            return err;
          }}
          onSubmit={(data, { resetForm }) => {
            setTimeout(async () => {
              await createUser(data);
              resetForm();
            });
          }}
        >
          {({ values, errors, touched }) => (
            <Form className="p-3">
              <FormBootstrap.Group className="d-flex flex-column mb-3">
                <FormBootstrap.Label
                  htmlFor="name"
                  style={{ color: "#000", textAlign: "center" }}
                >
                  Nombre
                </FormBootstrap.Label>
                <Field
                  as={FormBootstrap.Control}
                  type="text"
                  id="name"
                  name="name"
                  isInvalid={touched.name && errors.name}
                ></Field>
                <FormBootstrap.Control.Feedback type="invalid">
                  {errors.name}
                </FormBootstrap.Control.Feedback>
              </FormBootstrap.Group>

              <FormBootstrap.Group className="d-flex flex-column mb-3">
                <FormBootstrap.Label
                  htmlFor="lastName"
                  style={{ color: "#000", textAlign: "center" }}
                >
                  Apellido
                </FormBootstrap.Label>
                <Field
                  as={FormBootstrap.Control}
                  type="text"
                  id="lastName"
                  name="lastName"
                  isInvalid={touched.lastName && errors.lastName}
                ></Field>
                <FormBootstrap.Control.Feedback type="invalid">
                  {errors.lastName}
                </FormBootstrap.Control.Feedback>
              </FormBootstrap.Group>

              <FormBootstrap.Group className="d-flex flex-column mb-3">
                <FormBootstrap.Label
                  htmlFor="dni"
                  style={{ color: "#000", textAlign: "center" }}
                >
                  DNI
                </FormBootstrap.Label>
                <Field
                  as={FormBootstrap.Control}
                  type="text"
                  id="dni"
                  name="dni"
                  placeholder="11111111"
                  isInvalid={touched.dni && errors.dni}
                ></Field>
                <FormBootstrap.Control.Feedback type="invalid">
                  {errors.dni}
                </FormBootstrap.Control.Feedback>
              </FormBootstrap.Group>

              <FormBootstrap.Group className="d-flex flex-column mb-3">
                <FormBootstrap.Label
                  htmlFor="password"
                  style={{ color: "#000", textAlign: "center" }}
                >
                  Contraseña
                </FormBootstrap.Label>
                <Field
                  as={FormBootstrap.Control}
                  type="password"
                  id="password"
                  name="password"
                  isInvalid={touched.password && errors.password}
                ></Field>
                <FormBootstrap.Control.Feedback type="invalid">
                  {errors.password}
                </FormBootstrap.Control.Feedback>
              </FormBootstrap.Group>

              <Container className="text-center">
                <Button variant="success" type="submit">
                  Crear
                </Button>
              </Container>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}

export default CreateUser;
