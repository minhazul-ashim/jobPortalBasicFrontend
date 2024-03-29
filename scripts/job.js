window.onload = () => {
  getJobDetails();
};

function getJobDetails() {
  const container = document.getElementById("detailContainer");

  const element = `
        <h1 class="text-3xl font-semibold mb-4" id="jobTitle">
            Job Title
        </h1>
        <p class="text-lg text-gray-800" id="jobLocation">
            <span class="font-bold">Company : </span> NeroBytes Ltd
        </p>
        <p class="text-lg text-gray-800" id="jobLocation">
            <span class="font-bold">Location :</span> Dhaka, Bangladesh
        </p>
        <p class="text-lg text-gray-800" id="jobType">
            <span class="font-bold">Type :</span> Full-time
        </p>
        <p class="text-lg text-gray-800" id="JobDescription">
            <span class="font-bold">Job Description :</span> Job Description
        </p>
        <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-8 inline-block">
            Apply Now
        </a>
    `;

  container.insertAdjacentHTML("beforeend", element);
}
