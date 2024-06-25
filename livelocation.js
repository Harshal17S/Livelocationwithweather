const butt=document.getElementById("Butt");



async function gotlocation(postion){
    console.log(postion)

    const result=await getdata(postion.coords.latitude,postion.coords.longitude);
    console.log(result)
}

function error(){
 console.log("Erroe")
}

butt.addEventListener('click',async()=>{
      const loc=navigator.geolocation.getCurrentPosition(gotlocation,error)
})

async function getdata(lat,long){
    const promise=await fetch (`http://api.weatherapi.com/v1/current.json?key=5d434188c443495ba46142659242506&q=${lat},${long}&aqi=yes`);
 
 
    return await promise.json()
 }