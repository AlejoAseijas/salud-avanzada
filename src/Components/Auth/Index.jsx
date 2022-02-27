import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Form as FormBootstrap, Container, Button } from "react-bootstrap";
import "./style.scss";
import Logo from "../../assets/logoLogIn.png";
import { logIn } from "../../services/index";

function Index() {
  const navigate = useNavigate();
  const auth = async (data) => {
    try {
      let res = await logIn(data);
      if (res.data.success) {
        navigate("/dashboard");
      }
    } catch (err) {
      alert("error", err);
    }
  };
  return (
    <Container id="login-container">
      <img src={Logo} alt="phot" style={{ borderRadius: "50%" }} />
      <Container style={{ maxWidth: "30rem" }} className="  my-2">
        <Formik
          initialValues={{
            dni: "",
            password: "",
          }}
          validate={(data) => {
            let err = {};
            if (!data.dni) {
              err.dni = "El DNI es requerido";
            }

            if (!data.password) {
              err.password = "La contraseña es requerida";
            }

            return err;
          }}
          onSubmit={(data, { resetForm }) => {
            setTimeout(() => {
              auth(data);
              resetForm();
            });
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="p-3">
              <FormBootstrap.Group className="d-flex flex-column mb-3">
                <FormBootstrap.Label
                  htmlFor="username"
                  style={{ color: "#fff" }}
                >
                  Correo electrónico
                </FormBootstrap.Label>
                <Field
                  as={FormBootstrap.Control}
                  type="text"
                  id="username"
                  name="dni"
                  placeholder="Correo electrónico"
                  isInvalid={touched.dni && errors.dni}
                />
                <FormBootstrap.Control.Feedback type="invalid">
                  {errors.dni}
                </FormBootstrap.Control.Feedback>
              </FormBootstrap.Group>

              <FormBootstrap.Group className="d-flex flex-column mb-3">
                <FormBootstrap.Label
                  htmlFor="password"
                  style={{ color: "#fff" }}
                >
                  Contraseña
                </FormBootstrap.Label>
                <Field
                  as={FormBootstrap.Control}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Escriba su contraseña"
                  isInvalid={touched.password && errors.password}
                />
                <FormBootstrap.Control.Feedback type="invalid">
                  {errors.password}
                </FormBootstrap.Control.Feedback>
              </FormBootstrap.Group>
              <Container className="text-center">
                <Button variant="success" type="submit">
                  Enviar
                </Button>
              </Container>
            </Form>
          )}
        </Formik>
      </Container>
    </Container>
  );
}

export default Index;
