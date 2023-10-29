if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service_worker.js").then().catch(error=>{console.log('Error: ',error)})
}
else{
    console.log("Service Worker Not Supported")
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

function find(){
    let pic = document.getElementById('pic')
    pic.src="./media/earth_loader.gif"

    let txt = document.getElementById('txt')
    txt.innerText = 'מאתר...'

    sleep(2000).then(()=>{
        pic.src='./media/sad.png';
        txt.innerHTML = '';
        sleep(50).then(()=>{alert('לא ניתן לגשת לשירותי המיקום של יוסי כרגע, אנא נסו שנית במועד מאוחר יותר')});
    })
    let btn = document.getElementById('btn');
    btn.disabled = true;
}