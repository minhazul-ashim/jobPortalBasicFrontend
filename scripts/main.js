window.onload = () => {
  injectJobs();
  injectCats();
};

function genCatCard(container, cat) {
  const card = `<li class="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                ${cat.name}
              </li>`;
  container.insertAdjacentHTML("beforeend", card);
}

function injectCats() {
  const categoriesData = [
    {
      id: 1,
      name: "Category 1",
    },
    {
      id: 2,
      name: "Category 2",
    },
    {
      id: 3,
      name: "Category 3",
    },
  ];

  const container = document.getElementById("catContainer");
  categoriesData.forEach((el) => genCatCard(container, el));
}

function genJobCard(container, job) {
  const card = `
    <div class="bg-white shadow-md p-4 rounded-md flex flex-col justify-between hover:shadow-lg cursor-pointer">
        <div class="space-y-4">
            <h3 class="text-lg font-semibold mb-2">${job.title}</h3>
            <p class="text-gray-600">
                <span class="font-bold">Location</span>: Dhaka, Bangladesh
            </p>
            <p class="text-gray-600">
                <span class="font-bold">Type</span>: Full-time
            </p>
            <p class="text-gray-600 pb-4">
                ${job.description.slice(0, 100)}...
            </p>
        </div>
        <div class="mt-auto flex justify-start">
            <a href="./job.html?id=${
              job.id
            }" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Apply Now
            </a>
        </div>
    </div>
    `;
  container.insertAdjacentHTML("beforeend", card);
}

function injectJobs() {
  const jobsData = [
    {
      id: 1,
      title: "Software Engineer",
      description:
        "Exciting opportunity for a software engineer to join our dynamic team.",
    },
    {
      id: 2,
      title: "Marketing Specialist",
      description:
        "Seeking a creative marketing specialist with experience in digital marketing.",
    },
    {
      id: 3,
      title: "Data Analyst",
      description:
        "Join our analytics team and help drive data-driven decisions.",
    },
    {
      id: 4,
      title: "Data Analyst",
      description:
        "Join our analytics team and help drive data-driven decisions.",
    },
  ];
  const container = document.getElementById("jobContainer");
  jobsData.forEach((el) => genJobCard(container, el));
}
