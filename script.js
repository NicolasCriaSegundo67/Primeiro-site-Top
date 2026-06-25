 // Botão de curtidas
const botaoCurtir = document.getElementById("curtir");

botaoCurtir.addEventListener("click", () => {
    let curtidas = document.querySelector("#curtir span");
    curtidas.textContent = parseInt(curtidas.textContent) + 667
});




// Botão Aumentar Fonte
const botaoTamanho = document.getElementById("tamanho");
tamanho.addEventListener("click", aumentarFonte)
let fonte = 16;

// FUNÇÃO
function aumentarFonte(){
    fonte++;
    document.body.style.fontSize = fonte + "px";
}



// Botão Contraste

 const contraste = document.getElementById("contraste")
    contraste.addEventListener("click", MudarContraste)

// Função Maneira
    
function MudarContraste(){
     document.body.style.color = 'yellow';
   }


