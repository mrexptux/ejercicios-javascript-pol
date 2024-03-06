
const button = document.querySelector("#btnToClick");

button.addEventListener("click", (event) => {
    console.log(event.detail);
});