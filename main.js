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
skills(data.skills);
achievements(data.achievements);
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

// skills
function skills(skil){
  var heading=document.createElement("h2");
  heading.textContent="Technical skills";
  child2.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  // console.log(skil);
  for (var i=0;i<skil.length;i++){
var title=document.createElement("h4");
title.textContent=skil[i].title;
child2.appendChild(title);
var list=document.createElement("ul");
child2.appendChild(list);
console.log(skil[i].set.length);
for(var j=0;j<skil[i].set.length;j++){
  var listItem=document.createElement("li");
  listItem.textContent=skil[i].set[j];
  list.appendChild(listItem);
}
}
}
// achievements
function achievements (achievement){
  var heading=document.createElement("h2");
  heading.textContent="achievements";
  child2.appendChild(heading);
  var hLine=document.createElement("hLine");
  heading.appendChild(hLine);
  child2.appendChild(hLine);
  for(var i=0;i<achievement.length;i++){
    var achievedData=document.createElement("h4");
    achievedData.textContent=achievement[i].achievedData;
    child2.appendChild(achievedData);
  }
}
