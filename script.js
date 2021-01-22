Studentarray=[];
function submit(){
var name_1=document.getElementById("name1").value;
var name_2=document.getElementById("name2").value;
var name_3=document.getElementById("name3").value;
var name_4=document.getElementById("name4").value;
var name_5=document.getElementById("name5").value;
var name_6=document.getElementById("name6").value;
var name_7=document.getElementById("name7").value;
var name_8=document.getElementById("name8").value;
var name_9=document.getElementById("name9").value;
var name_10=document.getElementById("name10").value;
Studentarray.push(name_1);
Studentarray.push(name_2);
Studentarray.push(name_3);
Studentarray.push(name_4);
Studentarray.push(name_5);
Studentarray.push(name_6);
Studentarray.push(name_7);
Studentarray.push(name_8);
Studentarray.push(name_9);
Studentarray.push(name_10);
console.log(Studentarray);
document.getElementById("displayname").innerHTML=Studentarray;
document.getElementById("button1").style.display="none"
document.getElementById("sortbutton").style.display="inline-block"
}
function sorting(){
    Studentarray.sort();
    document.getElementById("displayname").innerHTML=Studentarray;
    document.getElementById("sortbutton").style.display="none"
}