import React from "react";
import NavBar from "../../Components/NavBar/AdminNavBar";
import { Formik, Form, Field } from "formik";
import { Form as FormBootstrap, Container, Button } from "react-bootstrap";
import { getQuote } from "../../services/index";
import { useNavigate } from "react-router-dom";
function Index() {
  let dataLocal = JSON.parse(localStorage.getItem("data-user"));
  let operatorName = dataLocal.name + " " + dataLocal.lastName;
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Container id="login-container">
        <Container style={{ maxWidth: "30rem" }} className="  my-2">
          <Formik
            initialValues={{
              operator: operatorName,
              provider: "premedic",
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
              setTimeout(async () => {
                let res = await getQuote(data);
                localStorage.setItem("quote", JSON.stringify(res.data.data));
                resetForm();
                navigate("/dashboard/download");
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
                    <option value="premedic-privado">PRIVADO</option>
                    <option value="premedic-desregulado">DESREGULADO</option>
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
                      label="Individual hasta 29"
                      value="IndividualHasta29"
                    />
                    <option
                      label="Individual hasta 39"
                      value="IndividualHasta39"
                    />
                    <option
                      label="Individual hasta 49"
                      value="IndividualHasta49"
                    />
                    <option
                      label="Individual hasta 59"
                      value="IndividualHasta59"
                    />

                    <option
                      label="Matrimonio hasta 29"
                      value="MatrimonioHasta29"
                    />
                    <option
                      label="Matrimonio hasta 39"
                      value="MatrimonioHasta39"
                    />
                    <option
                      label="Matrimonio hasta 49"
                      value="MatrimonioHasta49"
                    />
                    <option
                      label="Matrimonio hasta 59"
                      value="MatrimonioHasta59"
                    />

                    <option
                      label="Matrimonio hasta 29 con 1 hijo"
                      value="MatrimonioHasta29Con1Hijo"
                    />
                    <option
                      label="Matrimonio hasta 29 con 2 hijos"
                      value="MatrimonioHasta29Con2Hijo"
                    />
                    <option
                      label="Matrimonio hasta 29 con 3hijos"
                      value="MatrimonioHasta29Con3Hijo"
                    />

                    <option
                      label="Matrimonio hasta 39 con 1 hijo"
                      value="MatrimonioHasta39Con1Hijo"
                    />
                    <option
                      label="Matrimonio hasta 39 con 2 hijos"
                      value="MatrimonioHasta39Con2Hijo"
                    />
                    <option
                      label="Matrimonio hasta 39 con 3 hijos"
                      value="MatrimonioHasta39Con3Hijo"
                    />
                    <option
                      label="Matrimonio hasta 49 con 1 hijo"
                      value="MatrimonioHasta49Con1Hijo"
                    />
                    <option
                      label="Matrimonio hasta 49 con 2 hijos"
                      value="MatrimonioHasta49Con2Hijo"
                    />
                    <option
                      label="Matrimonio hasta 49 con 3 hijos"
                      value="MatrimonioHasta49Con3Hijo"
                    />
                    <option
                      label="Matrimonio hasta 59 con 1 hijos"
                      value="MatrimonioHasta59Con1Hijo"
                    />
                    <option
                      label="Matrimonio hasta 59 con 2 hijos"
                      value="MatrimonioHasta59Con2Hijo"
                    />
                    <option
                      label="Matrimonio hasta 59 con 3 hijos"
                      value="MatrimonioHasta59Con3Hijo"
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
                    <option value="PLAN100">100</option>
                    <option value="PLAN200">200</option>
                    <option value="PLAN300">300</option>
                    <option value="PLAN400">400</option>
                    <option value="PLAN500">500</option>
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
