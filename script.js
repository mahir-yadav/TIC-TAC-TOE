console.log("Welcome To Tic tac toe")
let music=new Audio("music.mp3")
let audioTurn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn = "X"
let isGameOver=false;

const changeTurn=()=>{
    return turn ==="X"?"0": "X";
}
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&& (boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Won"
            isGameOver=true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
        }
    })
}
music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver)
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;

        }
    })
})
reset.addEventListener('click',()=>{
    let boxtextss=document.querySelectorAll('.boxtext');
    Array.from(boxtextss).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    isGameOver=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";

})