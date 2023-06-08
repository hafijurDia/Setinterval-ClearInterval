let num = 0;
let handle = null;
const digitEl = document.getElementById('digit-counter');
//iincrease number
function myinterval(){
    digitEl.innerText = num++;
}
//set interval function
function myintervalId(){
    handle =  setInterval(myinterval,1000);
} 
//stop interval fuction
function stopinterval(){
    return clearInterval(handle);
}
//reset function
function reset(){
    num = '';
}

//start button event handler
document.getElementById('btn-strat').addEventListener('click',function(){
    myintervalId();
});
//stop button event handler
document.getElementById('btn-stop').addEventListener('click',function(){
    stopinterval();
});
//reset button event handlerd
document.getElementById('btn-reset').addEventListener('click',function(){
    digitEl.innerText = 0;
    stopinterval();
    num = 0;
});