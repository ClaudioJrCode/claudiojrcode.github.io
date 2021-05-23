let i = 0; /*contador para a lista de nomes*/


/*Evento que executa a function inserir() ao clicar enter*/
document.addEventListener('keydown', function (e) {
    if (e.key == "Enter"){
        inserir();
    }
});

function sortear(){
    let np = document.getElementById("max").value;
    let ns = Math.ceil(Math.random() * np)
    document.getElementById("n").innerHTML = "numero sorteado: "+ ns;
}

function inserir(){
    let lista = document.getElementById("lista");
    let nome = document.getElementById("txtnome");

    if(nome.value.length === 0){
        alert("Nome Vazio, Digite algum nome") 
    }
    else{
        lista.innerHTML += "<li id='pessoa"+i+"' class='mb'>" + nome.value + "</li>";
        nome.value = "";/*Só limpa o campo nome*/
        i++;
    }
}

function sortearNome(){
    let numeroSorteado = Math.floor(Math.random() * i);
    let res = document.getElementById("resultado")
    let ganhador = document.getElementById("pessoa"+numeroSorteado).innerHTML
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "E o vencedor é: "+ ganhador
}





