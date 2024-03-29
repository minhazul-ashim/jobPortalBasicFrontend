document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", submitForm);
});

async function submitForm(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const username = formData.get("username");
  const email = formData.get("email");
  const first_name = formData.get("first_name");
  const last_name = formData.get("last_name");
  const accType = formData.get("account_type");
  const location = formData.get("location");
  const phone = formData.get("phone_number");
  const password = formData.get("password");
  const confirm_pass = formData.get("confirm_password");
  const obj = {
    username,
    email,
    first_name,
    last_name,
    accType,
    location,
    phone,
    password,
    confirm_pass,
  };

  const url = "https://drf-basics.onrender.com/account/register/";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  if (data) {
    window.alert("You are successfully registered.");
  } else {
    window.alert("Something went wrong.");
  }
}
