import React, { useRef, useState } from "react";
import "./downloader.scss";
import { PDFExport } from "@progress/kendo-react-pdf";
import doctoredLogo from "../../assets/providers/doctoredPdf.png";
import galenoLogo from "../../assets/providers/galenoPdf.png";
import premedicLogo from "../../assets/providers/premedicPdf.jpg";
import saludCentralLogo from "../../assets/providers/saludcentral.jpg";
import NavBar from "../../Components/NavBar/AdminNavBar";

function Index() {
  const dataQuote = JSON.parse(localStorage.getItem("quote"));
  const pdfExportComponent = useRef(null);
  const [layoutSelection] = useState({
    text: "A4",
    value: "size-a4",
  });

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };
  return (
    <>
      <NavBar />
      {dataQuote.provider === "doctored" ? (
        <>
          <div
            className="page-container hidden-on-narrow"
            style={{ marginTop: "1em" }}
          >
            <PDFExport ref={pdfExportComponent} fileName={dataQuote.plan}>
              <div className={`pdf-page ${layoutSelection.value}`}>
                <header>
                  <div className="pricipal-provider-logo">
                    <img src={doctoredLogo} alt="photho-logo" />
                  </div>
                </header>
                <div className="tableContainer"></div>
                <div className="data-information-contact">
                  <h1>Cotizacion</h1>
                  <div className="information">
                    <h4>Generado por: {dataQuote.operator}</h4>
                  </div>
                  <br />
                  <h3>{dataQuote.planName}</h3>

                  <table className="table" style={{ height: "50px" }}>
                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Cliente edad: {dataQuote.ageClient}</td>
                        <td>$ {dataQuote.client}</td>
                      </tr>

                      {dataQuote.patner === 0 ? (
                        ``
                      ) : (
                        <tr>
                          <td>Conyuge edad: {dataQuote.ageOfSpouse}</td>
                          <td>$ {dataQuote.patner}</td>
                        </tr>
                      )}
                      {dataQuote.childrens === 0 ? (
                        ``
                      ) : (
                        <tr>
                          <td>Hijo/s {dataQuote.quantyChildrens}</td>
                          <td>$ {dataQuote.childrens}</td>
                        </tr>
                      )}
                      {dataQuote.discount === 0 ? (
                        ``
                      ) : (
                        <tr>
                          <td>Descuento por aporte</td>
                          <td>-{dataQuote.discount}</td>
                        </tr>
                      )}
                      <tr id="final-price">
                        <td className="price">Precio final</td>
                        <td className="price">$ {dataQuote.finalPrice}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container text-center">
                    {dataQuote.plan === "DOCTORED1000" ? (
                      <a
                        className="link"
                        href="https://drive.google.com/file/d/1dyjYId7OgCLuXFqHMyvnGhP5rFI5P-Wh/view?usp=sharing"
                      >
                        VER CARTILLA
                      </a>
                    ) : (
                      ``
                    )}

                    {dataQuote.plan === "DOCTORED2000" ? (
                      <a
                        className="link"
                        href="https://drive.google.com/file/d/1Ndm-PZacKpgwaHHhu8i4zLmwGbsT2UBQ/view?usp=sharing"
                      >
                        VER CARTILLA
                      </a>
                    ) : (
                      `
      
      `
                    )}
                    {dataQuote.plan === "DOCTORED3000" ? (
                      <a
                        className="link"
                        href="https://drive.google.com/file/d/142NyVQQIJo8CE61jLvAktsLwAOE0T2qD/view?usp=sharing"
                      >
                        VER CARTILLA
                      </a>
                    ) : (
                      ` `
                    )}
                  </div>
                </div>
                <div className="container text-center mt-2">
                  <img
                    src="https://i.ibb.co/8s9Bq9z/comparativa.jpg"
                    style={{ height: "220px", width: "200px" }}
                    alt="..."
                  />
                </div>
              </div>
            </PDFExport>
          </div>
          <div className="box-col text-center mt-2 mb-2">
            <button
              className="btn btn-success"
              primary={true}
              onClick={handleExportWithComponent}
            >
              Exporta
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            className="page-container hidden-on-narrow"
            style={{ marginTop: "1em" }}
          >
            <PDFExport ref={pdfExportComponent} fileName={dataQuote.plan}>
              <div className={`pdf-page ${layoutSelection.value}`}>
                <header>
                  {dataQuote.provider === "galeno" && (
                    <div className="pricipal-provider-logo">
                      <img src={galenoLogo} alt="photho-logo" />
                    </div>
                  )}
                  {dataQuote.provider === "premedic" && (
                    <div className="pricipal-provider-logo">
                      <img src={premedicLogo} alt="photho-logo" />
                    </div>
                  )}
                  {dataQuote.provider === "SaludCentral" && (
                    <div className="pricipal-provider-logo">
                      <img
                        src={saludCentralLogo}
                        alt="photho-logo"
                        className="mt-3"
                      />
                    </div>
                  )}
                </header>
                <div className="tableContainer"></div>
                <div className="data-information-contact">
                  <h1>Cotizacion</h1>
                  <div className="information">
                    <h4>Generado por: {dataQuote.operator}</h4>
                  </div>
                  <br />
                  <h3>{dataQuote.planName}</h3>

                  <table className="table" style={{ height: "50px" }}>
                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{dataQuote.group}</td>
                        {dataQuote.provider === "SaludCentral" ? (
                          <td>$ {dataQuote.client}</td>
                        ) : (
                          <td>$ {dataQuote.planPrice}</td>
                        )}
                      </tr>

                      {(dataQuote.discount === 0) |
                      (dataQuote.provider === "SaludCentral") ? (
                        ``
                      ) : (
                        <tr>
                          <td>Descuento por aporte</td>
                          <td>-{dataQuote.discount}</td>
                        </tr>
                      )}
                      {dataQuote.provider === "SaludCentral" &&
                      dataQuote.quantyChildrens > 0 ? (
                        <tr>
                          <td>Hijo/s {dataQuote.quantyChildrens}</td>
                          <td>$ {dataQuote.childrens}</td>
                        </tr>
                      ) : (
                        ``
                      )}
                      <tr id="final-price">
                        <td className="price">Precio final</td>
                        <td className="price">$ {dataQuote.finalPrice}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container text-center">
                    {dataQuote.provider === "galeno" &&
                    dataQuote.plan === "PLAN220" ? (
                      <a
                        className="link"
                        href="https://drive.google.com/file/d/1VIiG8uipd2zQPaZACv4xL7C0g6GzlL6x/view?usp=sharing"
                      >
                        VER CARTILLA
                      </a>
                    ) : (
                      ` `
                    )}
                    {dataQuote.provider === "galeno" &&
                    dataQuote.plan === "PLAN330" ? (
                      <a
                        className="link"
                        href="https://drive.google.com/file/d/1GIysSZ2eQomuPgQZVzxuAD8TnctUGAKN/view?usp=sharing"
                      >
                        VER CARTILLA
                      </a>
                    ) : (
                      ` `
                    )}
                    {dataQuote.provider === "galeno" &&
                    dataQuote.plan === "PLAN440" ? (
                      <a
                        className="link"
                        href="https://drive.google.com/file/d/1FIe09pr173AeIBQLjbHmhh5ikvAGVuFq/view?usp=sharing"
                      >
                        VER CARTILLA
                      </a>
                    ) : (
                      ` `
                    )}
                    {dataQuote.provider === "galeno" &&
                    dataQuote.plan === "PLAN550" ? (
                      <a
                        className="link"
                        href="https://drive.google.com/file/d/14uf5ECFcqcpJyah2nVWcGQXCtJxYG4C9/view?usp=sharing"
                      >
                        VER CARTILLA
                      </a>
                    ) : (
                      ` `
                    )}
                    {dataQuote.provider === "premedic" &&
                    dataQuote.plan === "PLAN100" ? (
                      <a
                        className="link"
                        href="https://drive.google.com/file/d/1MzvMa_0BSxf7AJuTLptZT3xFrWMutP8f/view?usp=sharing"
                      >
                        VER CARTILLA
                      </a>
                    ) : (
                      ` `
                    )}
                    {dataQuote.provider === "premedic" &&
                    dataQuote.plan === "PLAN200" ? (
                      <a
                        className="link"
                        href="https://drive.google.com/file/d/1qT9NTj2ZjZduZH0cXOUJhDcS9r4btHMQ/view?usp=sharing"
                      >
                        VER CARTILLA
                      </a>
                    ) : (
                      ` `
                    )}
                    {dataQuote.provider === "premedic" &&
                    dataQuote.plan === "PLAN300" ? (
                      <a
                        className="link"
                        href="https://drive.google.com/file/d/1XhooQhmBRRIouAbznfMj2QsP5VYmq0nY/view?usp=sharing"
                      >
                        VER CARTILLA
                      </a>
                    ) : (
                      ` `
                    )}
                    {dataQuote.provider === "premedic" &&
                    dataQuote.plan === "PLAN400" ? (
                      <a
                        className="link"
                        href="https://drive.google.com/file/d/1koyqfxk9c7VRmQIBArACrwIlPy1a-MU6/view?usp=sharing"
                      >
                        VER CARTILLA
                      </a>
                    ) : (
                      ` `
                    )}
                    {dataQuote.provider === "premedic" &&
                    dataQuote.plan === "PLAN500" ? (
                      <a
                        className="link"
                        href="https://drive.google.com/file/d/1RsCNcI8gi3gmpC7zzzn0M-82iTJzBUl_/view?usp=sharing"
                      >
                        VER CARTILLA
                      </a>
                    ) : (
                      ` `
                    )}
                  </div>
                </div>
              </div>
            </PDFExport>
          </div>

          <div className="box-col text-center mt-2 mb-2">
            <button
              className="btn btn-success"
              primary={true}
              onClick={handleExportWithComponent}
            >
              Imprimir
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Index;
