let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"
let brl = document.getElementById("valor")
let usd = document.getElementById("resultado")
let res = ""

function calcular(){
fetch(url)
    .then((res) => {

        return res.json()

    })
    .then((data) => {
        
       
        res =  data.USDBRL.high* brl.value;
       
    })
   usd.value = res;
}
