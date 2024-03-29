window.onload = () => {
  getJobDetails();
};

const applyJob = async (obj) => {
  console.log(obj);
  const url = "http://127.0.0.1:8000/application/";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  console.log(data);
};

async function getJobDetails() {
  const id = window.location.href.split("?")[1].split("=")[1];
  const url = `http://127.0.0.1:8000/jobs/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    },
  });
  const data = await res.json();
  const container = document.getElementById("detailContainer");
  const element = `
        <h1 class="text-3xl font-semibold mb-4" id="jobTitle">
            ${data.title}
        </h1>
        <p class="text-lg text-gray-800" id="jobLocation">
            <span class="font-bold">Company : </span> ${data.company}
        </p>
        <p class="text-lg text-gray-800" id="jobLocation">
            <span class="font-bold">Location :</span>  ${data.location}
        </p>
        <p class="text-lg text-gray-800" id="jobType">
            <span class="font-bold">Type :</span>  ${data.jobType}
        </p>
        <p class="text-lg text-gray-800" id="JobDescription">
            <span class="font-bold">Job Description :</span>  ${
              data.description
            }
        </p>
        <p class="text-lg text-gray-800" id="JobDescription">
            <span class="font-bold">Category :</span>  ${data.category.name}
        </p>
        <p class="text-lg text-gray-800" id="JobDescription">
            <span class="font-bold">Job Description :</span>  ${new Date(
              data.postedAt
            ).toLocaleString()}
        </p>
        <a onclick="() => ${applyJob({
          user: JSON.parse(localStorage.getItem("user")).user.id,
          job: data.id,
        })}" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-8 inline-block cursor-pointer">
            Apply Now
        </a>
    `;

  container.insertAdjacentHTML("beforeend", element);
}
