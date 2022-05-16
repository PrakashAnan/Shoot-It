import { Button, Card, CardContent, Paper, TextField } from '@mui/material';
import React from 'react';
import "./home.css"

const Home = () => {
  return (
    <div>
   

<div className="view rgba-black-light">
<div className="full-bg-img flex-center pattern-4">
  <ul className="list-unstyled">
    <li>
      <h1 className="h1-responsive wow fadeInUp title"><strong>Hey,let's have a photoshoot!!</strong></h1><br/>
    </li>
    <li>
      <div className="row wow fadeIn" data-wow-delay="0.4s">
        <div className="col-md-3">
          <div className="md-form">
            <input type="text" id="form1" className="form-control input"/>
            <label for="form1">Your city</label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="md-form">
            <input type="text" id="form2" className="form-control validate input"/>
            <label for="form2">Street</label>
          </div>
        </div>
        <div className="col-md-2">
          <div className="md-form">
            <input type="text" id="form3" className="form-control validate input"/>
            <label for="form3">House</label>
          </div>
        </div>
        <div className="col-md-3">
          <div className="md-form">
            <button className="btn btn-lg btn-danger">Order</button>
          </div>
        </div>
      </div>
    </li>
    <li className="payment">
      <i className="fab fa-cc-visa fa-2x" aria-hidden="true"></i>
      <i className="fab fa-cc-mastercard fa-2x" aria-hidden="true"></i>
      <i className="fas fa-money-bill-alt fa-2x" aria-hidden="true"></i>
    </li>
  </ul>
</div>
</div>

<footer className="page-footer text-center text-md-left mt-0 pt-4"/>

<div className="container-fluid">
  <div className="row">
  
    {/* <div className="col-lg-3 col-md-6 ml-auto">
      <h5 className="title mb-3"><strong>About material design</strong></h5>
      <p>Material Design (codenamed Quantum Paper) is a design language developed by Google.</p>
      <p>Material Design for Bootstrap (MDB) is a powerful Material Design UI KIT for most popular HTML, CSS,
        and JS framework - Bootstrap.</p>
    </div> */}
  
    <hr className="w-100 clearfix d-sm-none"/>

    <div className="col-lg-2 col-md-6 ml-auto mb-4">
      {/* <ul className="list-unstyled">
        <li>
          <a href="#!">Link 1</a>
        </li>
        <li>
          <a href="#!">Link 2</a>
        </li>
        <li>
          <a href="#!">Link 3</a>
        </li>
        <li>
          <a href="#!">Link 4</a>
        </li>
      </ul> */}
    </div>

    <hr className="w-100 clearfix d-sm-none"/>
  
    <div className="col-lg-2 col-md-6 ml-auto mb-4">
      {/* <ul className="list-unstyled">
        <li>
          <a href="#!">Link 1</a>
        </li>
        <li>
          <a href="#!">Link 2</a>
        </li>
        <li>
          <a href="#!">Link 3</a>
        </li>
        <li>
          <a href="#!">Link 4</a>
        </li>
      </ul> */}
    </div>
    <hr className="w-100 clearfix d-sm-none"/>
    <div className="col-lg-2 col-md-6 ml-auto mb-4">
      {/* <ul className="list-unstyled">
        <li>
          <a href="#!">Link 1</a>
        </li>
        <li>
          <a href="#!">Link 2</a>
        </li>
        <li>
          <a href="#!">Link 3</a>
        </li>
        <li>
          <a href="#!">Link 4</a>
        </li>
      </ul> */}
    </div>
  </div>
</div>
{/* <hr> */}
<div className="call-to-action text-center my-4">
  <h4 className="mb-4">Material Design for Bootstrap</h4>
  <h5 className="mb-4">Get our UI KIT for free</h5>
  <ul className="list-unstyled list-inline">
    <li className="list-inline-item">
      <a target="_blank" href="https://mdbootstrap.com/getting-started/" className="btn btn-primary waves-effect waves-light"
        rel="nofollow">Sign up!</a>
    </li>
    <li className="list-inline-item">
      <a target="_blank" href="https://mdbootstrap.com/material-design-for-bootstrap/" className="btn btn-info waves-effect waves-light"
        rel="nofollow">Learn more</a>
    </li>
  </ul>
</div>
<div className="footer-copyright py-3 text-center">
  <div className="containter-fluid">
    © 2018 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
  </div>
</div>
</div>   
  )
};

export default Home;