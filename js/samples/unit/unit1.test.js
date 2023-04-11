// Vous importez la fonction à tester
import { sayHello } from "./unit1.js";

// Puis, vous créez le bloc de séries de test (ou Test Suite): c'est pour créer un ensemble ou une suite de tests
describe("sayHello Unit Test Suites", () => {
  it('should display "Hello, World"', () => {
    expect(sayHello()).toEqual("Hello, World");
  }); //it() est une fonction qui prend deux paramètres: le premier est le nom du test, le deuxième est une fonction qui contient le code du test

  it('should display "Bonjour Alexandra"', () => {
    expect(sayHello("Alexandra")).toEqual("Bonjour Alexandra");
  });

  it('should display "Hello, Thomas"', () => {
    expect(sayHello("Thomas")).toEqual("Hello, Thomas");
  });
});

//pour faire tourner le test on fait : npm run test
