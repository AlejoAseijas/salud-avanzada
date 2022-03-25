import React from "react";
import NavBar from "../../Components/NavBar/AdminNavBar";
import { Formik, Form, Field } from "formik";
import { Form as FormBootstrap, Container, Button } from "react-bootstrap";
import { getQuote } from "../../services/index";
import { useNavigate } from "react-router-dom";
function Index() {
  let dataLocal = JSON.parse(localStorage.getItem("data-user"));
  const navigate = useNavigate();

  const handlerClick = async (data) => {
    try {
      let dataToSend = {
        provider: "saludcentral",
        operator: dataLocal.name + " " + dataLocal.lastName,
        contact: "saludCentral-privado",
        data: {
          group: data.group,
          childrens: data.isChildrens === "false" ? false : data.childrens,
        },
      };
      let res = await getQuote(dataToSend);
      localStorage.setItem("quote", JSON.stringify(res.data.data));
      return navigate("/dashboard/download");
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      <NavBar />
      <Container id="login-container">
        <Container style={{ maxWidth: "30rem" }} className="  my-2">
          <Formik
            initialValues={{
              group: "",
              childrens: "",
              isChildrens: "",
            }}
            validate={(data) => {
              let err = {};

              return err;
            }}
            onSubmit={(data, { resetForm }) => {
              handlerClick(data);
              resetForm();
            }}
          >
            {({ values, errors, touched }) => (
              <Form className="p-3">
                <FormBootstrap.Group className="d-flex flex-column mb-3">
                  <FormBootstrap.Label
                    htmlFor="group"
                    style={{ color: "#fff" }}
                  ></FormBootstrap.Label>
                  <Field
                    as={FormBootstrap.Select}
                    type="text"
                    id="group"
                    name="group"
                  >
                    <option label="" value="" />
                    <option
                      label="Individual hasta 29"
                      value="IndividualHasta29"
                    />
                    <option
                      label="Individual hasta 35"
                      value="IndividualHasta35"
                    />
                    <option
                      label="Individual hasta 40"
                      value="IndividualHasta40"
                    />
                    <option
                      label="Individual hasta 50"
                      value="IndividualHasta50"
                    />

                    <option
                      label="Individual hasta 60"
                      value="IndividualHasta60"
                    />

                    <option
                      label="Individual hasta 65"
                      value="IndividualHasta65"
                    />

                    <option
                      label="Individual hasta 70"
                      value="IndividualHasta70"
                    />

                    <option
                      label="Individual hasta 75"
                      value="IndividualHasta75"
                    />

                    <option
                      label="Individual hasta 80"
                      value="IndividualHasta80"
                    />

                    <option
                      label="Individual hasta 85"
                      value="IndividualHasta85"
                    />

                    <option
                      label="Matrimonio hasta 29"
                      value="MatrimonioHasta29"
                    />
                    <option
                      label="Matrimonio hasta 35"
                      value="MatrimonioHasta35"
                    />
                    <option
                      label="Matrimonio hasta 40"
                      value="MatrimonioHasta40"
                    />
                    <option
                      label="Matrimonio hasta 50"
                      value="MatrimonioHasta50"
                    />

                    <option
                      label="Matrimonio hasta 60"
                      value="MatrimonioHasta60"
                    />

                    <option
                      label="Matrimonio hasta 65"
                      value="MatrimonioHasta65"
                    />

                    <option
                      label="Matrimonio hasta 70"
                      value="MatrimonioHasta70"
                    />

                    <option
                      label="Matrimonio hasta 75"
                      value="MatrimonioHasta75"
                    />

                    <option
                      label="Matrimonio hasta 80"
                      value="MatrimonioHasta80"
                    />

                    <option
                      label="Matrimonio hasta 85"
                      value="MatrimonioHasta85"
                    />
                  </Field>
                </FormBootstrap.Group>

                <FormBootstrap.Group className="d-flex flex-column mb-3">
                  <FormBootstrap.Label
                    htmlFor="isChildrens"
                    style={{ color: "#fff" }}
                  ></FormBootstrap.Label>
                  <Field
                    as={FormBootstrap.Select}
                    type="text"
                    id="isChildrens"
                    name="isChildrens"
                  >
                    <option label="" value="" />
                    <option label="Tiene hijos" value="true" />
                    <option label="No tiene hijos" value="false" />
                  </Field>
                </FormBootstrap.Group>

                {values.isChildrens === "true" ? (
                  <FormBootstrap.Group className="d-flex flex-column mb-3">
                    <FormBootstrap.Label
                      htmlFor="childrens"
                      style={{ color: "#fff" }}
                    ></FormBootstrap.Label>
                    <Field
                      as={FormBootstrap.Control}
                      type="number"
                      id="childrens"
                      name="childrens"
                      placeholder="Edad del cliente"
                    />
                  </FormBootstrap.Group>
                ) : (
                  <></>
                )}

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
