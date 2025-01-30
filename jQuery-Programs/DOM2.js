let myheading = document.getElementById("listofCourses");
// console.log(myheading);
myheading.textContent="Software Courses";

var courseHeading= document.querySelector("#listofCourses");
//courseHeading.style.color='Blue';

let coursename= document.querySelector('.coursename');
console.log(coursename.innerText);

let allcoursename= document.querySelectorAll('.coursename');
//console.log(allcoursename[0].innerText);

allcoursename[0].style.color='Red';
allcoursename[1].style.color='Orange';
allcoursename[2].style.color='Purple';
allcoursename[3].style.color='Green';

for(let i=0;i<allcoursename.length;i++)
{
   console.log(allcoursename[i].innerText);
}

//console.log(courseHeading);


function Myfunction()
{
//    let courses= document.getElementsByClassName("coursename");
// for(let i=0;i<courses.length;i++){
// console.log(courses[i].innerHTML);}

let content=document.getElementById("courseitem").value;//getting text content
if(content!="")
{
let mainlist=document.getElementById("Courselist");//UL
let newelement = document.createElement("li");//li
let liText=document.createTextNode(content);// creating text for li
newelement.appendChild(liText);// adding text to li
 mainlist.appendChild(newelement); // adding li to ul
 document.getElementById("courseitem").value="";
}
}
 