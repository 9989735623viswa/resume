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
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else {
        reject(new error('error'));
      }
    })
  })
}


var fetchedData=loadjson("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);

})
var child2=document.querySelector("#child2");
function career(car){
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}
