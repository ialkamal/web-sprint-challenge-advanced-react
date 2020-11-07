import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  //fill out form
  fireEvent.change(screen.getByLabelText(/first name/i), {
    target: { value: "Ismail" },
  });
  fireEvent.change(screen.getByLabelText(/last name/i), {
    target: { value: "Al Kamal" },
  });
  fireEvent.change(screen.getByLabelText(/address/i), {
    target: { value: "Prince Sultan Rd" },
  });
  fireEvent.change(screen.getByLabelText(/city/i), {
    target: { value: "Jeddah" },
  });
  fireEvent.change(screen.getByLabelText(/state/i), {
    target: { value: "Makkah" },
  });
  fireEvent.change(screen.getByLabelText(/zip/i), {
    target: { value: "23423" },
  });

  //submit form
  fireEvent.click(screen.getByRole("button"));

  //check if success message exists
  expect(screen.queryByTestId("successMessage")).toBeInTheDocument();

  //Check Form fields
  const firstname = await screen.findByText(/ismail/i);
  const lastname = await screen.findByText(/al kamal/i);
  const address = await screen.findByText(/prince sultan rd/i);
  const city = await screen.findByText(/jeddah/i);
  const state = await screen.findByText(/makkah/i);
  const zip = await screen.findByText(/23423/i);

  expect(firstname).toHaveTextContent(/ismail/i);
  expect(lastname).not.toHaveTextContent(/sprint/i);
  expect(address).toHaveTextContent(/prince sultan rd/i);
  expect(city).toHaveTextContent(/jeddah/i);
  expect(state).toHaveTextContent(/makkah/i);
  expect(zip).toHaveTextContent(/23423/i);
});
