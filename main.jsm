function loadjson(file,callbck)
{
  varxhr=new xmlhttpRequest();
  xhr.override mimetype("application/json");
  xhr.open("GET",file,true);
  xhr.onready statechang = function()
{
  if(xhr.redaystate===4&&xhr.state=="200")
  callbck(xhr.responsetxt);
  }
}
xhr.send();
}
function loadjson(file){
  return new promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(responce.json());
      }else {
        reject(new error('error'));
      }
    })
  })
}


var fetchedData=loadjson("data.json");
fetchedData.then(data=>{
  consol.log(data);
})
