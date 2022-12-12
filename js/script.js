console.log("Cześć!");

let przycisk = document.querySelector(".main__section__paragraph__przycisk")
let deleteButton = document.querySelector(".main__section__paragraph__deleteButton")
let krzyk = document.querySelector(".main__section--whoah");

przycisk.addEventListener("click", () => {
    krzyk.classList.toggle("white")
    if (krzyk.classList.contains("white")) {
        deleteButton.innerText = "Pokaż";
    } else {
        deleteButton.innerText = "Usuń";
    }

});
console.log(przycisk);