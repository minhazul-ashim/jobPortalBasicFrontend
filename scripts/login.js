document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", submitForm);
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("logoutBtn");
  form.addEventListener("click", logout);
});

async function logout(e) {
  e.preventDefault();
  const url = "https://drf-basics.onrender.com/auth/logout/";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    },
  });
  if (res.status === 200) {
    window.localStorage.clear();
  }
}

async function submitForm(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const username = formData.get("username");
  const password = formData.get("password");
  const obj = {
    username,
    password,
  };

  const url = "https://drf-basics.onrender.com/auth/login/";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  if (data.token) {
    window.alert("You are successfully logged in");
    const url = `https://drf-basics.onrender.com/account/${data.userId}/`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
      },
    });
    const user = await res.json();
    window.localStorage.setItem("token", data.token);
    window.localStorage.setItem("user_id", data.userId);
    window.localStorage.setItem("user", JSON.stringify(user));
    window.location.reload();
  } else {
    window.alert("Something went wrong.");
    window.localStorage.clear();
  }
}
