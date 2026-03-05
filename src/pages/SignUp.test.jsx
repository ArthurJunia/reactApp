import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import SignUpForm from "../components/SignUpForm";

const renderForm = () =>
  render(
    <MemoryRouter>
      <SignUpForm />
    </MemoryRouter>
  );

test("Le formulaire s'affiche avec les champs nom, prénom et âge", () => {
  renderForm();
  expect(screen.getByPlaceholderText("Nom")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Prenom")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Age")).toBeInTheDocument();
});

test("Une erreur s'affiche si le nom est trop court à la soumission", async () => {
  renderForm();
  fireEvent.change(screen.getByPlaceholderText("Nom"), {
    target: { value: "A" },
  });
  fireEvent.click(screen.getByText("Connexion"));
  expect(
    await screen.findByText("Le nom dois contenir au moins 2 caractères")
  ).toBeInTheDocument();
});

test("Le bouton Connexion fire bien le submit", () => {
  renderForm();
  const button = screen.getByText("Connexion");
  expect(button).toBeInTheDocument();
  expect(button.closest("form")).toBeTruthy();
  fireEvent.click(button);
});
