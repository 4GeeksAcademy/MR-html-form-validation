/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { validate } from "webpack";
const card = document.getElementById("Card#");
const CVC = document.getElementById("CVC#");
const amount = document.getElementById("amount");
const firstname = document.getElementById("FirstName#");
const lastname = document.getElementById("LastName#");
const city = document.getElementById("city");
const inputstate = document.getElementById("inputState");
const postalcode = document.getElementById("postalcode");
const paymentmethod = document.getElementById("paymentmethod");
const message = document.getElementById("message");

const Sendbutton = document.getElementById("Sendbutton");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {};
