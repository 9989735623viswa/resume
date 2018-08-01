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
education(data.education);
})
var child2=document.querySelector("#child2");
function carrer(car)
{
  var heading=document.createElement("h2");
  heading.textContent="career objective";
  child2.appendChild(heading);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}

// education
function education(edu){
  var heading=document.createElement("h2");
  heading.textContent="education qualification";
  child2.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  var table=document.createElement("table");
  child2.appendChild(table);
  var tr="<tr> <td> s.no </td> <td> degree </td> <td> institute </td> <td> data </td> </tr>";
  table.innerHTML=tr;
  // table.innerHTML=tr;
  table.border="1";
    var tr1="";
  for (var i = 0; i < edu.length; i++) {
  tr1+="<tr> <td>"+(i+1)+"</td> <td>"+edu[i].degree+"</td> <td>"+edu[i].institute+"</td> <td>"+edu[i].data+"</td></tr>";
}
table.innerHTML=tr+tr1;
}
