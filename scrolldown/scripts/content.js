let running = false;

function startStop(vel){
    running = !running;
    if(running){
        move(vel)
    }
}

function move(vel){
    requestAnimationFrame(()=>{
        window.scrollBy(0, vel)
        if(running){
            move(vel)
        }
    })
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    startStop(request.vel)
})