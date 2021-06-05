let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"
let usd = document.getElementById("valor")
let brl = document.getElementById("resultado")
let res = ""

async function calcular(){
await fetch(url)
    .then((res) => {

        return res.json()

    })
    .then((data) => {
             
        res = data.USDBRL.high* usd.value;
       
    })
   brl.value = res.toFixed(2);
}
