let buttonLike = document.querySelector(".buttonlike");

document.querySelectorAll(".buttonlike").forEach(buttonLike => {
    buttonLike.addEventListener("click", (e) => { //parametro receptor do evento
    count = e.target.parentNode.parentNode.querySelector(".likes"); // selecionando elemento pai do elemento pai do elemento alvo do click e selecionando .likes dentro dele
    clicked = e.target.innerText;
    if(clicked == "Curtir") {
        clicked = true;
        buttonLike.innerHTML = `Descurtir`
        count.textContent++;
    } else {
        clicked = false;
        buttonLike.innerHTML = `Curtir`
        count.textContent--;
    }
});
})