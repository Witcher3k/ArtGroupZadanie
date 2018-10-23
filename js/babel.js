"use strict";

var checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener("click", function() {
  checkbox.classList.toggle("checked");
});

var submit = document.querySelector('.form button[type="submit"]').addEventListener("click", function(e) {
  e.preventDefault();
  var form = document.querySelector("form");
  var name = document.querySelector("input#name");
  var surname = document.querySelector("input#surname");
  var phone = document.querySelector("input#phone");
  var email = document.querySelector("input#email");

  var checkbox = document.querySelector("input#checkbox");

  var arr = [name, surname, phone, email];
  var validation = true;

  arr.forEach(function(element) {
    var alertElement = void 0;
    if (element.value === "") {
      alertElement = createAlert("Proszę uzupełnić wymagane pole formularza");
      validation = false;
      //check if alert exist
      if (!element.nextElementSibling.classList.contains("alert")) {
        form.insertBefore(alertElement, element.nextSibling);
        setTimeout(function() {
          form.removeChild(alertElement);
        }, 4000);
      }
    }

    //check if number in phone
    else if (element.id === "phone") {
      if (isNaN(parseInt(element.value))) {
        alertElement = createAlert("Prosze podać poprawny numer telefonu");
        validation = false;
        if (!element.nextElementSibling.classList.contains("alert")) {
          form.insertBefore(alertElement, element.nextSibling);
          setTimeout(function() {
            form.removeChild(alertElement);
          }, 4000);
        }
      }
    } else if (element.id === "email") {
      if (!ValidateEmail(element.value)) {
        alertElement = createAlert("Prosze podać poprawny email");
        validation = false;
        if (!element.nextElementSibling.classList.contains("alert")) {
          form.insertBefore(alertElement, element.nextSibling);
          setTimeout(function() {
            form.removeChild(alertElement);
          }, 4000);
        }
      }
    } else if (element.id === "name" || element.id === "surname") {
      if (!isNaN(parseFloat(element.value))) {
        //check if name or surn name dont have numbers
        alertElement = createAlert("Prosze podać poprawną godność");
        validation = false;
        if (!element.nextElementSibling.classList.contains("alert")) {
          form.insertBefore(alertElement, element.nextSibling);
          setTimeout(function() {
            form.removeChild(alertElement);
          }, 4000);
        }
      }
    }
  });

  if (!checkbox.classList.contains("checked")) {
    var alertCheckbox = createAlert("Proszę wyrazić zgodę na przetwarzanie danych");
    validation = false;
    //check if alert exist
    if (!checkbox.parentElement.nextElementSibling.classList.contains("alert")) {
      form.insertBefore(alertCheckbox, checkbox.parentElement.nextSibling);
      setTimeout(function() {
        form.removeChild(alertCheckbox);
      }, 4000);
    }
  }

  if (validation === true) {
    alert("Dane poprawne e-mail wysłany");
  }
});

function createAlert(string) {
  var div = document.createElement("div");
  div.classList.add("alert");
  div.innerText = string;

  return div;
}
function ValidateEmail(mail) {
  //function to validate email
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
