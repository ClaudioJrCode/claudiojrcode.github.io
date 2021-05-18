let tela = document.getElementById("tela")
let context = tela.getContext("2d");

tela.style.backgroundColor = "lavender"

//circulos
//circulos recebem em inicio e fim cordenadas de 2ᴨR (dois Pi R)


let x = 250;
let y = 250;
let raio = 100;
let inicio = 0;
let fim = (0.5 * Math.PI);

context.beginPath();
context.strokeStyle = "green";
context.fillStyle = "green"
context.arc( x, y, raio, inicio, fim);
context.lineTo(250,250)
context.closePath();
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.moveTo(240,240);
context.fillStyle = "darkgreen"
context.arc(240,240, 110, 0.5 * Math.PI, 2 * Math.PI)
context.fill();





/*Linhas*/
// context.moveTo (0,0);
// context.lineTo (250,250);
// context.lineTo (500,0);
// context.stroke();

/*Retagulo totalmente preenchido com uma cor*/
// context.fillStyle = "blue";
// context.fillRect(10,10,100,200);

/*Retangulo só com bordas*/
// context.strokeStyle = "green"
// context.strokeRect(50,50,100,200);

// /*Retangulo com bordas e preenchimentos diferentes*/
// context.rect(50,50,100,200);/*Coordenadas : Distancia X, Distancia Y, Tamanho X, Tamanho Y */
// context.fillStyle = "green";
// context.strokeStyle = "red";
// context.lineWidth = "5"
// context.fill();
// context.stroke();

//limpa certas partes do retangulo
// context.clearRect(60, 60, 35, 30);
// context.clearRect(105, 60, 35, 30);
// context.clearRect(60, 100, 35, 30);
// context.clearRect(105, 100, 35, 30);
// context.clearRect(60, 140, 35, 30);
// context.clearRect(105, 140, 35, 30);
// context.clearRect(60, 180, 35, 30);
// context.clearRect(105, 180, 35, 30);


// context.beginPath();
// context.lineWidth = 4;
// context.strokeStyle = "red";
// context.moveTo(10,10);
// context.lineTo(400,300)
// context.stroke();

// context.beginPath();
// context.lineWidth = 4;context.strokeStyle = "lavender"
// context.moveTo(30,10)
// context.lineTo(400,400)
// context.lineTo(200,400)
// context.fillStyle = "green"
// context.fill();
// context.closePath();
// context.stroke();




