import { Button, Card, Grid, Paper, TextField } from "@mui/material";
import Swal from "sweetalert2";
import app_config from "../config";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOut = () => {
  const url = app_config.api_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [selEquipment, setSelEquipment] = useState(
    JSON.parse(sessionStorage.getItem("equipment"))
  );
  const [address, setAddress] = useState("");

  const [isPaymentLoading, setPaymentLoading] = useState(false);

  const checkoutForm = {
    name: "",
    username: "",
    mobileno: Number,
    password: String,
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  };

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        padding: "0.5rem",
        iconColor: "#c4f0ff",
        color: "#000",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        "::placeholder": {
          color: "#87bbfd",
        },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };

  const getIntent = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: selEquipment.price * 100 }),
    };
    return fetch(url + "/create-payment-intent", requestOptions).then(
      (response) => response.json()
    );
  };

  const payMoney = async (e) => {
    e.preventDefault();
    getIntent().then((res) => {
      console.log(res);
      let clientSecret = res.client_secret;

      completePayment(clientSecret);
    });
  };

  const completePayment = async (key) => {
    const paymentResult = await stripe.confirmCardPayment(key, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.name,
        },
      },
    });

    setPaymentLoading(false);
    if (paymentResult.error) {
      alert();
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: paymentResult.error.message,
      });
      console.log(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        console.log(paymentResult);

        // saveOrder();
        checkoutSubmit();
      }
    }
  };

  const checkoutSubmit = (values) => {
    console.log(values);
    fetch(url + "/order/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Loggedin Successfully",
        });
        // res.json((data) => {
        //   if (data.isAdmin) {
        //     sessionStorage.setItem("admin", JSON.stringify(data));
        //     navigate("/admin/addequipment");
        //   }
        // });
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Loggedin Failed",
        });
      }
    });
  };

  return (
    <div>
      <main class="mt-5 pt-4">
        <div class="container wow fadeIn">
          <div class="row">
            <div class="col-md-8 mb-4">
              <div class="card">
                <div class="row">
                  <div class="col-md-6 mb-2">
                    <div class="md-form ">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        disabled
                        value={currentUser.name}
                      />
                      <label for="name" class="">
                        Full name
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6 mb-2">
                    <div class="md-form">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        disabled
                        value={currentUser.email}
                      />
                      <label for="email" class="">
                        Email
                      </label>
                    </div>
                  </div>
                </div>

                <div class="md-form input-group pl-0 mb-5">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    id="username"
                    disabled
                    value={currentUser.username}
                    class="form-control py-0"
                    placeholder="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div class="md-form mb-5">
                  <textarea
                    type="text"
                    rows="5"
                    class="form-control"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                  <label for="email" class="">
                    Address
                  </label>
                </div>

                <div class="row">
                  <div class="col-lg-4 col-md-12 mb-4">
                    <label for="country">Country</label>
                    <select class="custom-select d-block w-100" required>
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4">
                    <label for="state">State</label>
                    <select
                      class="custom-select d-block w-100"
                      id="state"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4">
                    <label for="zip">Zip</label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Zip code required.</div>
                  </div>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="same-address"
                  />
                  <label class="custom-control-label" for="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="save-info"
                  />
                  <label class="custom-control-label" for="save-info">
                    Save this information for next time
                  </label>
                </div>
                <hr class="mb-4" />
                <CardElement className="card" options={CARD_OPTIONS} />

                <Button
                  disabled={isPaymentLoading}
                  className="mt-5 w-100"
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  {isPaymentLoading
                    ? "Loading..."
                    : `Pay ₹${selEquipment.price}/-`}
                </Button>
                <a
                  href="https://buy.stripe.com/test_fZe3ga0As20g56E7ss"
                  class="btn btn-primary btn-lg btn-block"
                >
                  Pay Now
                </a>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>

              <ul class="list-group mb-3 z-depth-1">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Product name</h6>
                    <small class="text">{selEquipment.type}</small>
                  </div>
                  <span class="text-muted">{selEquipment.price}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Second Product</h6>
                    <small class="text-muted">{selEquipment.type}</small>
                  </div>
                  <span class="text-muted">{selEquipment.price}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Third Product</h6>
                    <small class="text-muted">{selEquipment.type}</small>
                  </div>
                  <span class="text-muted">{selEquipment.price}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between bg-light">
                  <div class="text-success">
                    <h6 class="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span class="text-success">-$5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>{selEquipment.price}+{selEquipment.price}+{selEquipment.price}</strong>
                </li>
              </ul>

              <form class="card p-2">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Promo code"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-secondary btn-md waves-effect m-0"
                      type="button"
                    >
                      Redeem
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default CheckOut;
