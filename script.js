let button = document.getElementById("btn");

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = `<b>Ans - 100% obviously💗</b>`;
    document.getElementById("btn").setAttribute("style" , "display: none");
})
