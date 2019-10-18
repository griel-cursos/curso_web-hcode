//Exemplo de um Alert: alert("Olá Mundo!");

//var == variavel em Javascript
//Exemplo de um Confirm: var resposta = confirm("Deseja sair do sistema?");

//Exibindo a resposta do confirm no console: console.log(resposta);

var a = 10;
var b = 33;

function somar(a, b)
{
    return a + b;
}

document.querySelector("#calcular").addEventListener("click", function(){
    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valorB").value;
    if (valorB.length > 0 && valorA.length > 0) {
    alert(parseInt(valorA)+parseInt(valorB));
    } else {
        alert("Digite o valor");
    }
});

//console.log(somar(25, 199));