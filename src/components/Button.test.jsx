import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "../App";
import "@testing-library/jest-dom";
test("Le compteur s'incrémente au clic", () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const button = screen.getByText("count is 0");
  fireEvent.click(button);
  expect(screen.getByText("count is 1")).toBeInTheDocument();
});
