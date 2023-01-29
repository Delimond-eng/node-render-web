window.addEventListener("DOMContentLoaded", async (event) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  document.getElementById("axios-res").innerText = JSON.stringify(data);
});

const btn = document.getElementById("btn-read-more");

/*async api call*/
btn.addEventListener("click", async (e) => {
  const { data } = await axios.get("/create-test");
  console.log(data);
});
