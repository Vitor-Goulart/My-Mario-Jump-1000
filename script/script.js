const Mario = document.querySelector(".Mario")
const Cano = document.querySelector(".Cano")

const pulo = function () {
  Mario.classList.add("pulo")
  setTimeout(function () {
    Mario.classList.remove("pulo")
  }, 500)
}

const loop = setInterval(() => {
  const posiçãodocan = Cano.offsetLeft
  const posiçãodomario = +window
    .getComputedStyle(Mario)
    .bottom.replace("px", " ")

  if (posiçãodocan <= 120 && posiçãodomario < 80) {
    Cano.style.animation = "none"
    Cano.style.left = "${posiçãodocano}px"
  }
}, 10)

document.addEventListener("keydown", pulo)
