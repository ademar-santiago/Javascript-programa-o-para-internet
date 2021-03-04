

function clicou(){
    document.getElementById("agradecimentos").innerHTML = "Obrigado por clicar";
    //console.log()
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com");
   // window.location.href = "https://www.uol.com.br"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Passe o mouse aqui";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}
/*
var validar = 0
function validarIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
validarIdade(idade)
console.log(validar);
*/

/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Flamengo", "Flamengo", "Palmeiras"));
*/

/*
var D = new Date();
alert(D.getDay());
alert(D.getHours());
alert(D.getMinutes());
*/


/*
var count;
for (count=0; count <=3; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 10){
    console.log(count);
    count++;
}
*/

/*
var site = "Adulto";
var site2 = "Infantil"
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade" + " " + site + " " + "Site Permetido");
}else{
    alert("Menor de idade" + site2);
};
*/


/* var carro = [{nome:"camaro", cor:"amarelo"}, {nome:"corolla", cor:"branco"} ]
console.log(carro);
alert(carro[1].nome);
*/

//var list = ["maça", "caju", "uva"];
//list.push("melancia");
//list.pop();
//console.log(list)
//console.log(list.length);
//console.log(list.toString());
//var nome = "Ademar Santiago";
//var idade = 42;
       // alert(" Bem Vindo " + nome + " Tem " + idade + " Anos ");
    //console.log(nome);