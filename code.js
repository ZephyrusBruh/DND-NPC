var butttt = document.getElementById("butttton");
var woah = document.getElementById("class");
var nums= [document.getElementById("text1"), document.getElementById("text2"), document.getElementById("text3"),
    document.getElementById("text4"), document.getElementById("text5"), document.getElementById("text6")/*, document.getElementById("text7")*/];
//const dots = document.getElementsByClassName("theDots");
let dots = [document.getElementById("dot1"), document.getElementById("dot2"), document.getElementById("dot3"),
     document.getElementById("dot4"), document.getElementById("dot5"), document.getElementById("dot6")/*, document.getElementById("dot7")*/];
let traits = [document.getElementById("str"), document.getElementById("dex"), document.getElementById("con"),
    document.getElementById("int"), document.getElementById("wis"), document.getElementById("cha")]
let className = document.getElementById("ClassName");
let raceName = document.getElementById("RaceName");
let acText = document.getElementById("ac");
let hpText = document.getElementById("hp");
let modstext =[document.getElementById("modstr"),document.getElementById("moddex"),document.getElementById("modcon"),
    document.getElementById("modint"),document.getElementById("modwis"),document.getElementById("modcha")];




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
    return Math.floor(Math.random() * 15) +5;
}
function getClass(){
    var obj_keys = Object.keys(theJson.classes);
    var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    theJson.selectedclass = theJson.classes[ran_key];
    return theJson.selectedclass;
}
function getRace(){
    var obj_keys = Object.keys(theJson.races);
    var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    theJson.selectedrace = theJson.races[ran_key];
    return theJson.selectedrace;
}

function changeText(){
    let selectedclass = getClass();
    let selectedrace = getRace();
    className.innerText = selectedclass.name;
    raceName.innerText = selectedrace.name;
    acText.innerText = selectedclass.ac;
    hpText.innerText = getHP(selectedclass.hp, selectedrace.hp,selectedclass.con, selectedrace.con)
    for(let i=0; i<traits.length; i++){
        traits[i].innerText=nums[i].innerText;
    }
    getMods(selectedrace);
}

function getHP(hpClass, hpRace, conRace, conClass){
    var cons = hpClass + hpRace + conRace + conClass;
    return cons;
}
function getMods(selectedrace){
    if(((traits[0].innerText- 10)/2) + selectedrace.str >= 0){
        modstext[0].innerText = "+" + Math.floor((((traits[0].innerText- 10)/2))+ selectedrace.str);
    } else {
        modstext[0].innerText = Math.floor((((traits[0].innerText- 10)/2) + selectedrace.str));
    }
    if(((traits[1].innerText- 10)/2) + selectedrace.dex >= 0){
        modstext[1].innerText = "+" + Math.floor((((traits[1].innerText- 10)/2) + selectedrace.dex));
    } else {
        modstext[1].innerText = Math.floor((((traits[1].innerText- 10)/2) + selectedrace.dex));
    }
    if(((traits[2].innerText- 10)/2) + selectedrace.con >= 0){
        modstext[2].innerText = "+" + Math.floor(((traits[2].innerText- 10)/2)+ selectedrace.con);
    } else {
        modstext[2].innerText = Math.floor(((traits[2].innerText- 10)/2) + selectedrace.con);
    }
    if(((traits[3].innerText- 10)/2) + selectedrace.int >= 0){
        modstext[3].innerText = "+" + Math.floor(((traits[3].innerText- 10)/2) + selectedrace.int);
    } else {
        modstext[3].innerText = Math.floor(((traits[3].innerText- 10)/2) + selectedrace.int);
    }
    if(((traits[4].innerText- 10)/2) + selectedrace.wis >= 0){
        modstext[4].innerText = "+" + Math.floor(((traits[4].innerText- 10)/2) + selectedrace.wis);
    } else {
        modstext[4].innerText = Math.floor(((traits[4].innerText- 10)/2) + selectedrace.con);
    }
    if(((traits[4].innerText- 10)/2) + selectedrace.cha >= 0){
        modstext[5].innerText = "+" + Math.floor(((traits[4].innerText- 10)/2)+ selectedrace.cha);
    } else {
        modstext[5].innerText = Math.floor(((traits[4].innerText- 10)/2) + selectedrace.cha);
    }
    
}

 