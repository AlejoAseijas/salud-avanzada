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
      let arrayAgesAdults = [];
      if (data.adults === 0) {
        arrayAgesAdults.push(0);
      } else {
        let newArraySringAges = data.adults.split(",");
        newArraySringAges.map((value) => {
          return arrayAgesAdults.push(parseInt(value));
        });
      }
      let quoteToSend = {
        provider: "SaludCentral",
        operator: dataLocal.name + " " + dataLocal.lastName,
        ageClient: parseInt(data.ageClient),
        sameAges: data.affiliateType === "casadoSameRange" ? true : false,
        ageOfSpouse: data.ageOfSpouse === "" ? false : data.ageOfSpouse,
        isGroup: {
          state: data.group === "false" ? false : true,
          data: {
            minors: data.minors === "" ? false : data.minors,
            adults: arrayAgesAdults.length === 0 ? false : arrayAgesAdults,
          },
        },
      };

      let res = await getQuote(quoteToSend);
      console.log("data: ", data);
      console.log("dataToApi: ", quoteToSend);
      console.log("res: ", res);
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
              affiliateType: "Soltero",
              ageClient: "",
              ageOfSpouse: "",
              group: "false",
              minors: 0,
              adults: 0,
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
                    <option label="Soltero" value="Soltero" />
                    <option
                      label="Casado y mismo rango de edad"
                      value="casadoSameRange"
                    />
                    <option
                      label="Casado y distinto rango de edad"
                      value="Casado"
                    />
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
