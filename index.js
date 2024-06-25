const temp=document.getElementById("temp")
const aiqq=document.getElementById("aiq")
const cityy=document.getElementById("cityy")

const button=document.getElementById("search-button")
const ip=document.getElementById("inputttt")
button.addEventListener("click",async()=>{
//    console.log(ip.value);

const value=ip.value;
const result=await getdata(value);

cityy.innerHTML=`${result.location.name},${result.location.region}`;
aiqq.innerHTML=`${result.current.air_quality.co}`;
temp.innerHTML=`${result.current.humidity}`;

console.log(result)
  

})
//http://api.weatherapi.com/v1/current.json?key=5d434188c443495ba46142659242506&q=London&aqi=ye


async function getdata(city){
   const promise=await fetch (`http://api.weatherapi.com/v1/current.json?key=5d434188c443495ba46142659242506&q=${city}&aqi=yes`);


   return await promise.json()
}