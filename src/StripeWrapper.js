import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./components/CheckoutForm";
import "./Stripe.css";

const stripePromise = loadStripe("pk_test_51LBGY5CG5ft7NspYRPmiePll318t0hw8APhVMiMsrbFNWHYbnUV98jQxVImtib3ForxLxXkW90ZaSJsScj59S2CD00DT6mfIM2");

export default function StripeWrapper(props) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    console.log(props.basket)
    console.log(props.addressDetails)
    fetch("https://ebiznesbackend.azurewebsites.net/create-payment-intent", {
      method: "POST",
      headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("JWT_TOKEN")}` 
        },
      body: JSON.stringify({basket: props.basket, addressDetails: props.addressDetails})
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}