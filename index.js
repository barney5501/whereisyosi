if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service_worker.js").then().catch(error=>{console.log('Error: ',error)})
}
else{
    console.log("Service Worker Not Supported")
}