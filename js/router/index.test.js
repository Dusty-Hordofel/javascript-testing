/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { getByTestId } from "@testing-library/dom";
import { router } from "./index";

describe("Router Integration Suites", () => {
  it("should render the sign in page", async () => {
    document.body.innerHTML = `<div id="root"></div>`;
    await router();
    expect(getByTestId(document.body, "sign-in-form-title")).toHaveTextContent(
      "Veuillez vous connecter"
    ); //toBeInTheDocument()
  });

  it("should render the sensors  Home Page", async () => {
    document.body.innerHTML = `<div id="root"></div>`;
    document.location = "/#/home";
    await router();
    expect(getByTestId(document.body, "home-sensors-title")).toHaveTextContent(
      "Vos capteurs"
    );
  });
  it("should render the sensors Page", async () => {
    document.body.innerHTML = `<div id="root"></div>`;

    document.location = "/#/facade-details";

    await router();
    expect(getByTestId(document.body, "sensor-detail-title")).toHaveTextContent(
      "Détails du capteur #7"
    );
  });

  it("should render the Add Sensor Page", async () => {
    document.body.innerHTML = `<div id="root"></div>`;

    document.location = "/#/add-sensor";

    await router();
    expect(getByTestId(document.body, "add-sensor-title")).toHaveTextContent(
      "Ajout d'un nouveau capteur"
    );
  });
});
