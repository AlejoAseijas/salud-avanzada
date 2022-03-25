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
      let newArraySringAges = data.adults.split(",");
      let arrayAgesAdults = [];
      newArraySringAges.map((value) => {
        return arrayAgesAdults.push(parseInt(value));
      });
      let quoteToSend = {
        typePlan: data.typePlan,
        provider: "doctored",
        operator: dataLocal.name + " " + dataLocal.lastName,
        affiliateType: data.affiliateType,
        ageClient: data.ageClient,
        ageOfSpouse: data.affiliateType === "Casado" ? data.ageOfSpouse : false,
        isContributions:
          data.typeContact === "Privado"
            ? false
            : parseFloat(data.isContributions),
        isGroup: {
          state: data.group === "false" ? false : true,
          data: {
            minors: data.minors === "" ? 0 : parseInt(data.minors),
            adults:
              arrayAgesAdults.length === ""
                ? (arrayAgesAdults[0] = 0)
                : arrayAgesAdults,
          },
        },
        typeContact: data.typeContact,
      };
      let res = await getQuote(quoteToSend);
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
              typePlan: "",
              affiliateType: "Soltero",
              ageClient: "",
              ageOfSpouse: "",
              isContributions: "",
              group: "false",
              minors: 0,
              typeContact: "Privado",
              adults: "",
            }}
            validate={(data) => {
              let err = {};
              if (!data.typeContact) {
                err.typeContact = "El tipo contacto es requerido";
              }

              if (!data.typeContact) {
                err.typeContact = "Selecione una opcion";
              }

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
                    htmlFor="typePlan"
                    style={{ color: "#fff" }}
                  ></FormBootstrap.Label>
                  <Field
                    as={FormBootstrap.Select}
                    type="text"
                    id="typePlan"
                    name="typePlan"
                  >
                    <option>Selecione un plan</option>
                    <option value="">Selecione una opcion</option>
                    <option value="DOCTORED1000">DOCTORED 1000</option>
                    <option value="DOCTORED2000">DOCTORED 2000</option>
                    <option value="DOCTORED3000">DOCTORED 3000</option>
                  </Field>
                </FormBootstrap.Group>

                <FormBootstrap.Group className="d-flex flex-column mb-3">
                  <FormBootstrap.Label
                    htmlFor="ageClient"
                    style={{ color: "#fff" }}
                  ></FormBootstrap.Label>
                  <Field
                    as={FormBootstrap.Control}
                    type="number"
                    id="ageClient"
                    name="ageClient"
                    placeholder="Edad del cliente"
                  />
                </FormBootstrap.Group>

                <FormBootstrap.Group className="d-flex flex-column mb-3">
                  <FormBootstrap.Label
                    htmlFor="affiliateType"
                    style={{ color: "#fff" }}
                  ></FormBootstrap.Label>
                  <Field
                    as={FormBootstrap.Select}
                    type="text"
                    id="affiliateType"
                    name="affiliateType"
                  >
                    <option value="">Selecione una opcion</option>
                    <option value="Soltero">Soltero</option>
                    <option value="Casado">Casado</option>
                  </Field>
                </FormBootstrap.Group>

                {values.affiliateType === "Casado" ? (
                  <FormBootstrap.Group className="d-flex flex-column mb-3">
                    <FormBootstrap.Label
                      htmlFor="ageOfSpouse"
                      style={{ color: "#fff" }}
                    ></FormBootstrap.Label>
                    <Field
                      as={FormBootstrap.Control}
                      type="number"
                      id="ageOfSpouse"
                      name="ageOfSpouse"
                      placeholder="Edad del esposo"
                    />
                  </FormBootstrap.Group>
                ) : (
                  <></>
                )}

                <FormBootstrap.Group className="d-flex flex-column mb-3">
                  <FormBootstrap.Label
                    htmlFor="typeContact"
                    style={{ color: "#fff" }}
                  ></FormBootstrap.Label>
                  <Field
                    as={FormBootstrap.Select}
                    type="text"
                    id="typeContact"
                    name="typeContact"
                    placeholder="Ingrese el plan"
                    isInvalid={touched.typeContact && errors.typeContact}
                  >
                    <option value="">Selecione una opcion</option>
                    <option value="Privado">PRIVADO</option>
                    <option value="Desregulado">DESREGULADO</option>
                  </Field>
                  <FormBootstrap.Control.Feedback type="invalid">
                    {errors.typeContact}
                  </FormBootstrap.Control.Feedback>
                </FormBootstrap.Group>

                {values.typeContact === "Desregulado" ? (
                  <FormBootstrap.Group className="d-flex flex-column mb-3">
                    <FormBootstrap.Label
                      htmlFor="isContributions"
                      style={{ color: "#fff" }}
                    ></FormBootstrap.Label>
                    <Field
                      as={FormBootstrap.Control}
                      type="number"
                      id="isContributions"
                      name="isContributions"
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
                  ></FormBootstrap.Label>
                  <Field
                    as={FormBootstrap.Select}
                    type="text"
                    id="group"
                    name="group"
                  >
                    <option value="false">Individuo</option>
                    <option value="true">Grupo Familiar</option>
                  </Field>
                </FormBootstrap.Group>

                {values.group === "false" ? (
                  <></>
                ) : (
                  <>
                    <FormBootstrap.Group className="d-flex flex-column mb-3">
                      <FormBootstrap.Label
                        htmlFor="minors"
                        style={{ color: "#fff" }}
                      ></FormBootstrap.Label>
                      <Field
                        as={FormBootstrap.Control}
                        type="number"
                        id="minors"
                        name="minors"
                        placeholder="Cantidad de Hijos Menores de 20"
                      />
                    </FormBootstrap.Group>

                    <FormBootstrap.Group className="d-flex flex-column mb-3">
                      <FormBootstrap.Label
                        htmlFor="adults"
                        style={{ color: "#fff" }}
                      ></FormBootstrap.Label>
                      <Field
                        id="adults"
                        name="adults"
                        as={FormBootstrap.Control}
                        placeholder="Edades de los hijos mayores separados por , sin espacios"
                      />
                    </FormBootstrap.Group>
                  </>
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
