document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("paymentform");
  const errorDiv = document.getElementById("errorDiv");
  const fields = [
    document.getElementById("Card#"),
    document.getElementById("CVC#"),
    document.getElementById("amount"),
    document.getElementById("FirstName#"),
    document.getElementById("LastName#"),
    document.getElementById("city"),
    document.getElementById("postalcode"),
    document.getElementById("inputState"),
    document.getElementById("paymentmethod"),
    document.getElementById("message"),
  ];
  function paymentMethodVerification() {
    const paymentMethods = document.querySelectorAll(
      'input[name="paymentmethod"]'
    );
    return Array.from(paymentMethods).some((method) => method.checked);
  }
  function validateField(field) {
    if (field.tagName === "SELECT") {
      return field.value !== "Choose...";
    } else if (field.type === "radio") {
      return paymentMethodVerification();
    } else {
      return field.value.trim() !== "";
    }
  }

  function validateForm() {
    let isValid = true;

    fields.forEach((field) => {
      const isFieldValid = validateField(field);

      if (!isFieldValid) {
        isValid = false;
        field.classList.add("bg-danger-subtle", "text-danger", "text-bold");
      } else {
        field.classList.remove("bg-danger-subtle", "text-danger", "text-bold");
      }
    });

    errorDiv.style.display = isValid ? "none" : "block";

    return isValid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario enviado con éxito");
      form.reset();
    } else {
      console.log("Hay errores en el formulario");
    }
  });
});
