function carrCidades() {
    document.getElementById("evento-Botao").style.display = 'block';
}

function semCidades(){
    document.getElementById("evento-Botao").style.display = 'none';
}

/*FUNÇOES PAGINA NOSSAS LOJA*/
function openNav() {
    document.getElementById("menupri").style.display = 'block';
    document.getElementById("menu-pag").style.height = '30vh';
}

function btnClose(){
    document.getElementById("menupri").style.display = 'none';
    document.getElementById("menu-pag").style.height = '23vh';
}

/*FIM FUNÇOES NOSSAS LOJAS*/ 

/*funçoes planos internet*/
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("esquerda");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
function openres() {
    document.getElementById("fecharp").style.display = 'inline-block';
}

function closeres(){
    document.getElementById("fecharp").style.display = 'none';
}
function openres2() {
    document.getElementById("fecharp2").style.display = 'inline-block';
}

function closeres2(){
    document.getElementById("fecharp2").style.display = 'none';
}
function openres3() {
    document.getElementById("fecharp3").style.display = 'inline-block';
}

function closeres3(){
    document.getElementById("fecharp3").style.display = 'none';
}
function openres4() {
    document.getElementById("fecharp4").style.display = 'inline-block';
}

function closeres4(){
    document.getElementById("fecharp4").style.display = 'none';
}


