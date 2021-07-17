const alert = document.querySelector(".alert")
const close = document.querySelector(".close-btn")
function showorhiden() {
    alert.classList.remove("hide")
    alert.classList.add("show")
    alert.classList.add("showAlert")
}

setTimeout(() => {
    showorhiden()
}, 3000)

setTimeout(() => {
    alert.classList.add("hide")
    alert.classList.remove("show")
}, 5000)

alert.addEventListener("click", () => {
    alert.classList.add("hide")
    alert.classList.remove("show")
})