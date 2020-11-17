const scriptURL = "<https://script.google.com/macros/s/AKfycbwFC6TIcPRTqOVInU_hy-7TDsCRQ5kGW7M5L0GUEp8Tc-H6w0lC/exec>";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
