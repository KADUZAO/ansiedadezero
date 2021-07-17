const buttonone = document.querySelector(".buttonone")
const buttontwo = document.querySelector(".buttontwo")

function ermergir() {
    buttonone.style.display = 'block'
    buttontwo.style.display = 'block'
}

setTimeout(() => {
    ermergir()
}, 5000)