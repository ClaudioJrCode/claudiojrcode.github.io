document.addEventListener('DOMContentLoaded', () => { //Listen do DOM confirmando o carregamento da pagina

    //array de squares 
    var squares = document.querySelectorAll(".square");

    //escuta o evento de click de cada square identificados no array
    squares.forEach((square) => {

        square.addEventListener('click', handleClick);

    })
})
let count = 0;
function handleClick(event) {

    let square = event.target;
    let pos = square.id;

    if (handleMove(pos)) {

        setTimeout(() => {
            let winner = playerTime == 0 ? 'Circle' : 'Cross'
            alert(`${winner} Wins !!!`)
            location.reload();
        }, 100);
    }
    if(count == 8 && !gameOver)
    setTimeout(() => {
        alert(`Draw Game`)
        location.reload();
    }, 100)
    updateBoard();
    count++;

}

function updateBoard() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let symbol = board[square.id];
        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`;

        }
    })
}
