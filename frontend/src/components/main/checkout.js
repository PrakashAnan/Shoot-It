import { Button, Card, Grid, Paper, TextField } from "@mui/material";
import Swal from "sweetalert2";
import app_config from "../config";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const url = app_config.api_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [selEquipment, setSelEquipment] = useState(
    JSON.parse(sessionStorage.getItem("equipment"))
  );

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
                <Formik initialValues={currentUser} onSubmit={checkoutSubmit}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={checkoutSubmit} className="card-body">
                      <div class="row">
                        <div class="col-md-6 mb-2">
                          <div class="md-form ">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              onChange={handleChange}
                              value={values.name}
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
                              onChange={handleChange}
                              value={values.email}
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
                          onChange={handleChange}
                          value={values.username}
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
                      {/* 
                      <div class="d-block my-3">
                        <div class="custom-control custom-radio">
                          <input
                            id="credit"
                            name="paymentMethod"
                            type="radio"
                            class="custom-control-input"
                            checked
                            required
                          />
                          <label class="custom-control-label" for="credit">
                            Credit card
                          </label>
                        </div>
                        <div class="custom-control custom-radio">
                          <input
                            id="debit"
                            name="paymentMethod"
                            type="radio"
                            class="custom-control-input"
                            required
                          />
                          <label class="custom-control-label" for="debit">
                            Debit card
                          </label>
                        </div>
                        <div class="custom-control custom-radio">
                          <input
                            id="paypal"
                            name="paymentMethod"
                            type="radio"
                            class="custom-control-input"
                            required
                          />
                          <label class="custom-control-label" for="paypal">
                            Paypal
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 mb-3">
                          <label for="cc-name">Name on card</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-name"
                            placeholder=""
                            required
                          />
                          <small class="text-muted">
                            Full name as displayed on card
                          </small>
                          <div class="invalid-feedback">
                            Name on card is required
                          </div>
                        </div>
                        <div class="col-md-6 mb-3">
                          <label for="cc-number">Credit card number</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-number"
                            placeholder=""
                            required
                          />
                          <div class="invalid-feedback">
                            Credit card number is required
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3 mb-3">
                          <label for="cc-expiration">Expiration</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-expiration"
                            placeholder=""
                            required
                          />
                          <div class="invalid-feedback">
                            Expiration date required
                          </div>
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="cc-expiration">CVV</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-cvv"
                            placeholder=""
                            required
                          />
                          <div class="invalid-feedback">
                            Security code required
                          </div>
                        </div>
                      </div> */}
                      <hr class="mb-4" />
                      <a
                        href="https://buy.stripe.com/test_fZe3ga0As20g56E7ss"
                        class="btn btn-primary btn-lg btn-block"
                      >
                        Pay Now
                      </a>
                    </form>
                  )}
                </Formik>
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
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$12</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Second product</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$8</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Third item</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$5</span>
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
                  <strong>$20</strong>
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
