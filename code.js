var butttt = document.getElementById("butttton");
var woah = document.getElementById("class");
var nums= [document.getElementById("text1"), document.getElementById("text2"), document.getElementById("text3"),
    document.getElementById("text4"), document.getElementById("text5"), document.getElementById("text6"), document.getElementById("text7")];
//const dots = document.getElementsByClassName("theDots");
let dots = [document.getElementById("dot1"), document.getElementById("dot2"), document.getElementById("dot3"),
     document.getElementById("dot4"), document.getElementById("dot5"), document.getElementById("dot6"), document.getElementById("dot7")];

let theJson = ('./info.json');

fetch(theJson)
.then(resp => resp.json())
.then(json => theJson = json)


butttt.addEventListener("click", rollDice);

function rollDice(event){
    for(let i=0; i<dots.length; i++){
        dots[i].classList.add("hidden");
        if(nums[i].classList.contains("hidden")){
            nums[i].classList.remove("hidden");
        }
        nums[i].innerText = getRand();
    }
    changeText();
    
}

function getRand(){
    return Math.floor(Math.random() * 20) +1;
}

function changeText(){
    console.log(theJson.classes);
    
}