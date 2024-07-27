let music =new Audio("TicFinish.mp3")
let audioturn=new Audio("Tacclick.mp3")
let gameover=new Audio("Ticclick.mp3")
let Gameover=false;
let Turn ="X"

const changeTurn = ()=>{
 return Turn ==="X"? "0" : "X"
}
const reset=()=>{
    document.getElementsByClassName('text')=text.remove();
}
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('text');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,5],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
      if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) 
        && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) 
        && (boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText= boxtext[e[0]].innerText +" Won"
            Gameover=true;
            document.querySelector('.im').getElementsByTagName('img')[0].style.width="20vw"

        }
     })

}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
   let text=element.querySelector('.text');
   element.addEventListener('click',()=>{
    if(text.innerText===''){
        text.innerText=Turn;
        Turn= changeTurn();
        audioturn.play();
        checkWin();
        if(!Gameover){
            document.getElementsByClassName('info')[0].innerText="Turn for "+ Turn;
            
        }
    }
   })
})
document.addEventListener('DOMContentLoaded', () => {
    let reset = document.getElementById('reset');
    if (reset) {
        reset.addEventListener('click', () => {
            let texts = document.querySelectorAll('.text');
            Array.from(texts).forEach(element => {
                element.innerText = "";
            });
            Turn="X";
            Gameover = false;
            document.getElementsByClassName("info")[0].innerText="Turn for " +Turn;
            document.querySelector('.im').getElementsByTagName('img')[0].style.width="0px"
        });
    } else {
        console.error("Element with id 'reset' not found.");
    }
});