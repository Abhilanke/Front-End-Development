let abhi=document.getElementById("list");
console.log(abhi);
abhi.textContent="Software Cources";
let kunal=document.getElementById("role")
console.log(kunal);
kunal.textContent="Compter science Student";
let piu=document.getElementById("sname");
console.log(piu);
piu.textContent="Data Science";


function myFuction(){
    let Cources=document.getElementsByClassName("sname");
    console.log(Cources[0].innerHTML);
    for(let i=0;i<Cources.length;i++){
        console.log(Cources[i].innerHTML);

    }
}

