let form = document.getElementById("calcForm");
let divResultado = document.getElementById("resultado");
//
form.addEventListener("submit",function(event){
event.preventDefault();
calculoSoma();
});
function calculoSoma(){
    let valor1 = parent(document.getElementById("valor1").value);
    let valor2 = parent(document.getElementById("valor2").value);
    let soma = valor1+valor2;
    divResultado.textContent = "A soma é"+soma;
}