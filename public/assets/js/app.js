window.addEventListener("DOMContentLoaded", async (event) => {});

const btn = document.getElementById("btn-read-more");

btn.addEventListener("click", async (e) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  document.getElementById("axios-res").innerText = JSON.stringify(data);
});
