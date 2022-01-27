let window1 ={
    top : {
       ele : document.querySelectorAll(".box"),
       target : 0,
       over: 1,
       ball: [2,3,4,5,6,7],
       runs: 8,
       wicketsLeft : 9
    },

    mid:
    {
        ele: document.querySelectorAll(".mid-js"),
        compStat :0,
        compValue: 1,
        result:2,
        userStat:3,
        userValue:4
    }
        
}

const btn = document.querySelectorAll("#bottom button")


let userInput="-";
let runs="-";
const maxWickets=1;
let target="-";
let compInput="-";
let userBatting=true;
let innings=0

function intialise()
{

}




btn[0].addEventListener("click",function(){
    renderGame(1)
})
btn[1].addEventListener("click",function(){
    renderGame(2)
})
btn[2].addEventListener("click",function(){
    renderGame(3)
})
btn[3].addEventListener("click",function(){
    renderGame(4)
})
btn[4].addEventListener("click",function(){
    renderGame(5)
})
btn[5].addEventListener("click",function(){
    renderGame(6)
})

function renderGame(s)
{
    window1.mid.ele[window1.mid.userValue].innerHTML=s
    window1.mid.ele[window1.mid.compValue].innerHTML=rand()
}

function rand()
{
    return Math.ceil(Math.random()*6)
}