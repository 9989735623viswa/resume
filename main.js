// function loadjson(file,callbck)
// {
//   varxhr=new xmlhttpRequest();
//   xhr.override mimetype("application/json");
//   xhr.open("GET",file,true);
//   xhr.onready statechang = function()
// {
//   if(xhr.redaystate===4&&xhr.state=="200")
//   callbck(xhr.responsetxt);
//   }
// }
// xhr.send();
// }
function loadJSON(file){
  return new Promise((resolve,request)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else {
        reject(new Error('error'));
      }
    })
  })
}


var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  carrer(data.carrer);

})
var child2=document.querySelector("#child2");
function carrer(car)
{
  var heading=document.createElement("h2");
  heading.textContent="career objective";
  child2.appendChild(heading);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}
