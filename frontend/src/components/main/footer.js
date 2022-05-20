import { TextField } from "@mui/material";
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="bck text-center text-white">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-facebook-f"></i
          ></a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-twitter"> </i
          ></a>


          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-google"></i
          ></a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-instagram"></i
          ></a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-linkedin-in"></i
          ></a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-github"></i
          ></a>
        </section>

        <section className="">
          <form action="">

            <div className="row d-flex justify-content-center">

              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">

                <div className="form-outline form-white mb-4">
                 <TextField
                 variant="outlined"
                 label="Enter your email"
                 placeholder="email"
                 className="w-100 "



                 />
                </div>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>

            </div>

          </form>
        </section>

        <section className="mb-4">
          <p>
          “We see our customers as invited guests to a party, and we are the hosts.
           It’s our job every day to make every important aspect of the customer
            experience a little bit better.” – Jeff Bezos, Founder of Amazon.
          </p>
        </section>

        <section className="">

          <div className="row">

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 4</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 4</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 4</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 4</a>
                </li>
              </ul>
            </div>

          </div>

        </section>

      </div>



      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        @ ShootIT Website
        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>

    </footer>

  );
};

export default Footer;



{/* <Grid item md={4}>
          <div className="card">
            <img
              className="card-img-top"
              height="200"
              src={url + "/uploads/"+equipment.thumbnail}
              alt={equipment.name}
            />
            <div className="card-body">
              <p className="p-title">{equipment.title}</p>
              <p className="text-muted">{equipment.type}</p>
              <p className="text-muted">{equipment.price}</p>
              <p className="text-muted">{equipment.brand}</p>
              <p className="text-muted">{equipment.image}</p>
              <span className="p-rating">
                {equipment.rating} <i class="fas fa-star"></i>
              </span>
              &nbsp;&nbsp;
              <span className="text-muted">{equipment.reviews}</span>
              <p className="h4 mt-4">₹ {equipment.price}</p>
              <br />
              <button
                className="btn btn-outline-primary"
                onClick={(e) =>
                  navigate("/main/viewequipment/" + equipment._id)
                }
              >
                View more
              </button>
            </div>
          </div>
        </Grid> */}
