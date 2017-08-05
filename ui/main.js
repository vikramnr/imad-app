console.log('Loaded!');
var element= document.getElementById('madi');
var ginga=0;
function moveLeft(){
    
    ginga=ginga+1;
    element.style.marginLeft=ginga+'px';
}
element.onclick=function(){
    var interval=setInterval(moveLeft,50);
    
}
