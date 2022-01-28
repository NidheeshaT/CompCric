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


let runs=0;
const maxWickets=10;
let target="-";
let over_runs=[]
let wickets=0

let userInput="-";
let compInput="-";
let userBatting=true;
let turn_left=1;
let result;
let game_over=false

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
    if(game_over)
        return
    userInput=s
    compInput=rand()

    if(over_runs.length===6)
        over_runs=[]

    if(userInput===compInput)
    {
        result="OUT"
        over_runs.push("W")
        wickets++
    }
    else{
        result=s
        runs+=s;
        over_runs.push(s)
    }

    if(wickets===maxWickets)
    {
        if(turn_left===1)
        {
            target=runs+1
            turn_left=0
            runs=0
            wickets=0
            over_runs=[]
        }
        else{
            game_over=true
        }
    }
        
   

    renderHTML()
}

function rand()
{
    if(turn_left===1)
    {
        if(userInput>3)
            return Math.ceil(Math.random()*4) +2
    }
    return Math.ceil(Math.random()*6)
}

function renderHTML()
{
    window1.top.ele[window1.top.target].innerHTML=target
    for(let i=0;i<6;i++)
    {
        if(over_runs[i])
            window1.top.ele[window1.top.ball[i]].innerHTML=over_runs[i]
        else
            window1.top.ele[window1.top.ball[i]].innerHTML="-" 
    }
    window1.top.ele[window1.top.runs].innerHTML=runs + "/" + wickets
    window1.top.ele[window1.top.wicketsLeft].innerHTML=maxWickets - wickets


    
    window1.mid.ele[window1.mid.compValue].innerHTML=compInput
    window1.mid.ele[window1.mid.result].innerHTML=result
    window1.mid.ele[window1.mid.userValue].innerHTML=userInput
}