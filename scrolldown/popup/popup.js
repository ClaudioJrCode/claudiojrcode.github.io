const velInput = document.getElementById("inputVelocidade")
const btn = document.getElementById("onOff")

let vel = 1;
velInput.addEventListener("change", (e)=>{
    vel = e.target.value
})

btn.addEventListener("click", ()=>{
   sendMessage({vel})
})

function sendMessage(message){
    console.log(message)
    chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
       chrome.tabs.sendMessage(tabs[0].id, message, (response)=>{
       }) 
    })
}