window.onload = () => {
  injectCats();
  injectJobs();
};

function genCatCard(container, cat) {
  const card = `<li class="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                ${cat.name}
              </li>`;
  container.insertAdjacentHTML("beforeend", card);
}

async function injectCats() {
  const url = "http://127.0.0.1:8000/category";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    },
  });
  const data = await res.json();

  const container = document.getElementById("catContainer");
  data.forEach((el) => genCatCard(container, el));
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

async function injectJobs() {
  const url = "http://127.0.0.1:8000/jobs";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    },
  });
  const data = await res.json();
  const container = document.getElementById("jobContainer");
  data.forEach((el) => genJobCard(container, el));
}
