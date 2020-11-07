import React from "react";
import { useForm } from "../hooks/useForm";
import { useDarkMode } from "../hooks/useDarkMode";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [values, showSuccessMessage, handleChanges, handleSubmit] = useForm(
    initialValue
  );

  const [darkMode, setDarkMode] = useDarkMode(true);

  return (
    <>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{ margin: "15px auto" }}
      >
        Dark Mode
      </button>
      <form className={darkMode ? "" : "form_light"} onSubmit={handleSubmit}>
        <h2 className={darkMode ? "" : "h2_light"}>Checkout Form</h2>
        <label className={darkMode ? "" : "label_light"}>
          First Name:
          <input
            name="firstName"
            className={darkMode ? "" : "input_light"}
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label className={darkMode ? "" : "label_light"}>
          Last Name:
          <input
            name="lastName"
            className={darkMode ? "" : "input_light"}
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label className={darkMode ? "" : "label_light"}>
          Address:
          <input
            name="address"
            className={darkMode ? "" : "input_light"}
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label className={darkMode ? "" : "label_light"}>
          City:
          <input
            name="city"
            value={values.city}
            onChange={handleChanges}
            className={darkMode ? "" : "input_light"}
          />
        </label>
        <label className={darkMode ? "" : "label_light"}>
          State:
          <input
            name="state"
            value={values.state}
            onChange={handleChanges}
            className={darkMode ? "" : "input_light"}
          />
        </label>
        <label className={darkMode ? "" : "label_light"}>
          Zip:
          <input
            name="zip"
            value={values.zip}
            onChange={handleChanges}
            className={darkMode ? "" : "input_light"}
          />
        </label>
        <button data-testid="checkout">Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
