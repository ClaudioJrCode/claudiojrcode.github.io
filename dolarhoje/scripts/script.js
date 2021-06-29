let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"
let usd = document.getElementById("valor")
let brl = document.getElementById("resultado")


async function calculate() {
    let usdconverted = usd.value.replace(",", ".")
    usdconverted = usdconverted.replace("$","")
    usdconverted = usdconverted.trim()
    await fetch(url)
        .then((res) => {

            return res.json()

        })
        .then((data) => {

            res = data.USDBRL.ask * usdconverted;
            
        })
    usdconverted = new Number(usdconverted)
    brl.value = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    usd.value = `$ ${usdconverted.toFixed(2)}`
}
calculate();