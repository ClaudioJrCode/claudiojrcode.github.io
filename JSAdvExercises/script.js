let dog = {
    sound: "Au Au",
    speak: speakGeneric,
}

let cat = {
    sound: "Miau",
    speak: speakGeneric,
}
//chamamos a function speak que contem a funcao speakGeneric
function speakGeneric(){
    console.log(this.sound)
}
//podemos passar com o bind para informar na função o que o THIS será
let x = speakGeneric.bind();
cat.speak();
dog.speak();
let a = 2;
let b = 2;
var res = a + b;
// arrow Function que retorna um boolean se o numero é par ou impar

let isPar = (x) => x % 2 == 0 ? true : false;
console.log(isPar(res));

function novoAluno(nome, idade){
    return {nome, idade};
}

var alunos = [
    novoAluno("Mario", 25),
    novoAluno("Claudio", 36),
    novoAluno("Ana", 32),
    novoAluno("Clovis", 20),
    novoAluno("Ernesto", 30),
    novoAluno("Abigail", 32),
];

//Map manually


let array = [];
for (let i in alunos) {
    
     array.push(alunos[i].nome +" tem "+ alunos[i].idade +" anos.") 
}
console.log(array);


//Reduce manually

function reduce(array, inicio){
    let res = inicio;
    
    if(typeof(inicio) =="number"){
        for(let i in array){
            res += (array[i].idade)
        }
    }
    else
    {    
        for(let i in array){
            res += (array[i].nome) + " "
    }   
} 
    console.log(res);
}
reduce(alunos,);
