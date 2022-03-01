import React from "react";
import NavBar from "../../Components/NavBar/AdminNavBar";
import { Formik, Form, Field } from "formik";
import { Form as FormBootstrap, Container, Button } from "react-bootstrap";

function Index() {
  let dataLocal = JSON.parse(localStorage.getItem("data-user"));
  let operatorName = dataLocal.name + " " + dataLocal.lastName;
  return (
    <>
      <NavBar />
      <Container id="login-container">
        <Container style={{ maxWidth: "30rem" }} className="  my-2">
          <Formik
            initialValues={{
              operator: operatorName,
              provider: "galeno",
              contact: "",
              amount: 0,
              group: "",
              typePlan: "",
            }}
            validate={(data) => {
              let err = {};
              if (!data.contact) {
                err.contact = "El tipo contacto es requerido";
              }

              if (!data.contact) {
                err.contact = "Selecione una opcion";
              }

              return err;
            }}
            onSubmit={(data, { resetForm }) => {
              setTimeout(() => {
                console.log(data);
                //resetForm();
              });
            }}
          >
            {({ values, errors, touched }) => (
              <Form className="p-3">
                <FormBootstrap.Group className="d-flex flex-column mb-3">
                  <FormBootstrap.Label
                    htmlFor="contact"
                    style={{ color: "#fff" }}
                  >
                    Tipo de contacto
                  </FormBootstrap.Label>
                  <Field
                    as={FormBootstrap.Select}
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="Correo electrónico"
                    isInvalid={touched.contact && errors.contact}
                  >
                    <option>Selecione un tipo afiliado</option>
                    <option value="galeno-privado">PRIVADO</option>
                    <option value="galeno-desregulado">DESREGULADO</option>
                    <option value="galeno-monotributo">MONOTRIBUTO</option>
                  </Field>
                  <FormBootstrap.Control.Feedback type="invalid">
                    {errors.contact}
                  </FormBootstrap.Control.Feedback>
                </FormBootstrap.Group>

                {values.contact === "galeno-desregulado" ? (
                  <FormBootstrap.Group className="d-flex flex-column mb-3">
                    <FormBootstrap.Label
                      htmlFor="amount"
                      style={{ color: "#fff" }}
                    >
                      Ingrese el aporte
                    </FormBootstrap.Label>
                    <Field
                      as={FormBootstrap.Control}
                      type="number"
                      id="amount"
                      name="amount"
                      placeholder="0.00"
                      isInvalid={touched.amount && errors.amount}
                    />
                  </FormBootstrap.Group>
                ) : (
                  ""
                )}

                <FormBootstrap.Group className="d-flex flex-column mb-3">
                  <FormBootstrap.Label
                    htmlFor="group"
                    style={{ color: "#fff" }}
                  >
                    Tipo de grupo
                  </FormBootstrap.Label>
                  <Field
                    as={FormBootstrap.Select}
                    type="text"
                    id="group"
                    name="group"
                  >
                    <option label="Selecione un grupo" />
                    <option
                      label="Individual hasta 25"
                      value="IndividualHasta25"
                    />
                    <option
                      label="Individual hasta 36"
                      value="IndividualHasta36"
                    />
                    <option
                      label="Individual hasta 64"
                      value="IndividualHasta64"
                    />

                    <option
                      label="Individual hasta 25 con 1 hijo"
                      value="IndividualHasta25Con1Hijo"
                    />
                    <option
                      label="Individual hasta 25 con 2 hijos"
                      value="IndividualHasta25Con2Hijo"
                    />
                    <option
                      label="Individual hasta 36 con 1 hijo"
                      value="IndividualHasta36Con1Hijo"
                    />
                    <option
                      label="Individual hasta 36 con 2 hijos"
                      value="IndividualHasta36Con2Hijo"
                    />
                    <option
                      label="Individual hasta 36 con 3 hijos"
                      value="IndividualHasta36Con3Hijo"
                    />
                    <option
                      label="Individual hasta 36 con 4 hijos"
                      value="IndividualHasta36Con4Hijo"
                    />
                    <option
                      label="Individual hasta 36 con 5 hijos"
                      value="IndividualHasta36Con5Hijo"
                    />
                    <option
                      label="Individual hasta 36 con 6 hijos"
                      value="IndividualHasta36Con6Hijo"
                    />

                    <option
                      label="Individual hasta 64 con 1 hijo"
                      value="IndividualHasta64Con1Hijo"
                    />
                    <option
                      label="Individual hasta 64 con 2 hijos"
                      value="IndividualHasta64Con2Hijo"
                    />
                    <option
                      label="Individual hasta 64 con 3 hijos"
                      value="IndividualHasta64Con3Hijo"
                    />
                    <option
                      label="Individual hasta 64 con 4 hijos"
                      value="IndividualHasta64Con4Hijo"
                    />
                    <option
                      label="Individual hasta 64 con 5 hijos"
                      value="IndividualHasta64Con5Hijo"
                    />
                    <option
                      label="Individual hasta 64 con 6 hijos"
                      value="IndividualHasta64Con6Hijo"
                    />

                    <option
                      label="Matrimonio hasta 25"
                      value="MatrimonioHasta25"
                    />
                    <option
                      label="Matrimonio hasta 36"
                      value="MatrimonioHasta36"
                    />
                    <option
                      label="Matrimonio hasta 64"
                      value="MatrimonioHasta64"
                    />

                    <option
                      label="Matrimonio hasta 25 con 1 hijo"
                      value="MatrimonioHasta25Con1Hijo"
                    />
                    <option
                      label="Matrimonio hasta 25 con 2 hijos"
                      value="MatrimonioHasta25Con2Hijo"
                    />

                    <option
                      label="Matrimonio hasta 36 con 1 hijo"
                      value="MatrimonioHasta36Con1Hijo"
                    />
                    <option
                      label="Matrimonio hasta 36 con 2 hijos"
                      value="MatrimonioHasta36Con2Hijo"
                    />
                    <option
                      label="Matrimonio hasta 36 con 3 hijos"
                      value="MatrimonioHasta36Con3Hijo"
                    />
                    <option
                      label="Matrimonio hasta 36 con 4 hijos"
                      value="MatrimonioHasta36Con4Hijo"
                    />
                    <option
                      label="Matrimonio hasta 36 con 5 hijos"
                      value="MatrimonioHasta36Con5Hijo"
                    />
                    <option
                      label="Matrimonio hasta 36 con 6 hijos"
                      value="MatrimonioHasta36Con6Hijo"
                    />

                    <option
                      label="Matrimonio hasta 64 con 1 hijo"
                      value="MatrimonioHasta64Con1Hijo"
                    />
                    <option
                      label="Matrimonio hasta 64 con 2 hijos"
                      value="MatrimonioHasta64Con2Hijo"
                    />
                    <option
                      label="Matrimonio hasta 64 con 3 hijos"
                      value="MatrimonioHasta64Con3Hijo"
                    />
                    <option
                      label="Matrimonio hasta 64 con 4 hijos"
                      value="MatrimonioHasta64Con4Hijo"
                    />
                    <option
                      label="Matrimonio hasta 64 con 5 hijos"
                      value="MatrimonioHasta64Con5Hijo"
                    />
                    <option
                      label="Matrimonio hasta 64 con 6 hijos"
                      value="MatrimonioHasta64Con6Hijo"
                    />
                  </Field>
                </FormBootstrap.Group>

                <FormBootstrap.Group className="d-flex flex-column mb-3">
                  <FormBootstrap.Label
                    htmlFor="typePlan"
                    style={{ color: "#fff" }}
                  >
                    Plan
                  </FormBootstrap.Label>
                  <Field
                    as={FormBootstrap.Select}
                    type="text"
                    id="typePlan"
                    name="typePlan"
                  >
                    <option>Selecione un plan</option>
                    <option value="PLAN 220">220</option>
                    <option value="PLAN 330">330</option>
                    <option value="PLAN 440">440</option>
                    <option value="PLAN 550">550</option>
                  </Field>
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
    </>
  );
}

export default Index;
