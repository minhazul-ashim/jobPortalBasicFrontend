document.addEventListener("DOMContentLoaded", async function () {
  await resetUserDetails();
  hideNavButtonsLogic();
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("logoutBtn");
  if (!form) {
    return;
  }
  form.addEventListener("click", logout);
});

async function logout(e) {
  e.preventDefault();
  const url = "http://127.0.0.1:8000/auth/logout/";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    },
  });
  if (res.status === 200) {
      window.localStorage.clear();
      window.location.reload();
  }
}

const hideNavButtonsLogic = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user?.user?.id) {
    console.log("not user");
    document.getElementById("employerBtn").style.display = "none";
    document.getElementById("seekerBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "none";
    document.getElementById("loginBtn").style.display = "block";
    document.getElementById("registerBtn").style.display = "block";
  } else if (user.accType === "employer") {
    console.log("employer");
    document.getElementById("employerBtn").style.display = "block";
    document.getElementById("seekerBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "block";
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("registerBtn").style.display = "none";
  } else {
    console.log("seeker");
    document.getElementById("employerBtn").style.display = "none";
    document.getElementById("seekerBtn").style.display = "block";
    document.getElementById("logoutBtn").style.display = "block";
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("registerBtn").style.display = "none";
  }
};

const resetUserDetails = async () => {
  const userId = localStorage.getItem("user_id");
  if (!userId) {
    return;
  }
  const url = `http://127.0.0.1:8000/account/${userId}/`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    },
  });
  const user = await res.json();
  window.localStorage.setItem("user", JSON.stringify(user));
};
