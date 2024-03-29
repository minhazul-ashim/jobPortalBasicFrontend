document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("profileForm");
  form.addEventListener("submit", submitProfile);
});

window.onload = async () => {
  setProfileInitialForm();
  userAppliedJobs();
};

async function submitProfile(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const username = formData.get("username");
  const first_name = formData.get("first_name");
  const last_name = formData.get("last_name");
  const location = formData.get("location");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const resume = formData.get("resume");
  const obj = {
    id: localStorage.getItem("user_id"),
    user: {
      username,
      first_name,
      last_name,
    },
    location,
    phone,
    resume,
    email,
    accType: "employer",
  };
  console.log(obj);
  const url = "https://drf-basics.onrender.com/account/update/";
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  console.log(data);
  if (data) {
    window.alert("Updated");
  }
}

function setProfileInitialForm() {
  const user = JSON.parse(localStorage.getItem("user"));
  const form = `
    <div class="mb-4">
        <label for="username" class="block text-gray-700 font-bold mb-2"
        >Username</label
        >
        <input
        type="text"
        id="username"
        name="username"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter username"
        value=${user.user.username}
        />
    </div>
    <div class="mb-4">
        <label for="first_name" class="block text-gray-700 font-bold mb-2"
        >First Name</label
        >
        <input
        type="text"
        id="first_name"
        name="first_name"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter first name"
        value=${user.user.first_name || "Unset"}
        />
    </div>
    <div class="mb-4">
        <label for="last_name" class="block text-gray-700 font-bold mb-2"
        >Last Name</label
        >
        <input
        type="text"
        id="last_name"
        name="last_name"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter last name"
        value=${user.user.last_name || "Unset"}
        />
    </div>
    <div class="mb-4">
        <label for="location" class="block text-gray-700 font-bold mb-2"
        >Location</label
        >
        <input
        type="text"
        id="location"
        name="location"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter location"
        value=${user.location || "Unset"}
        />
    </div>
    <div class="mb-4">
        <label for="phone" class="block text-gray-700 font-bold mb-2"
        >Phone Number</label
        >
        <input
        type="tel"
        id="phone"
        name="phone"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter phone number"
        value=${user.phone || "Unset"}
        />
    </div>
    <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2"
        >Email</label
        >
        <input
        type="email"
        id="email"
        name="email"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter email"
        value=${user.user.email}
        />
    </div>
    <div class="mb-4">
        <label for="resume" class="block text-gray-700 font-bold mb-2"
        >Resume (PDF/DOC)</label
        >
        <input
        type="file"
        id="resume"
        name="resume"
        accept=".pdf,.doc"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
    </div>
    <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
    >
        Update Profile
    </button>
    `;

  const container = document.getElementById("profileForm");
  container.insertAdjacentHTML("beforeend", form);
}

const userAppliedJobs = () => {
  container = document.getElementById("jobContainerSeeker");
  const user = JSON.parse(localStorage.getItem("user")).user;
  user.user_application.forEach((el) => {
    const job = el.job;
    const element = `
    <div class="bg-white shadow-md p-4 rounded-md flex flex-col justify-between hover:shadow-lg cursor-pointer">
        <div class="space-y-4">
            <h3 class="text-lg font-semibold mb-2">Job Id : ${job}</h3>
        </div>
        <div class="mt-auto flex justify-start">
            <a href="./job.html?id=${job}" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                View
            </a>
        </div>
    </div>
    `;

    container.insertAdjacentHTML("beforeend", element);
  });
};
