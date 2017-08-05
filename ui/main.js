console.log('Loaded!');
var element= document.getElementById('madi');

element.onclick=function(){
    var interval=setInterval(moveLeft,10);
    
}
function moveLeft(){
    ginga=0;
    ginga=ginga+1;
    element.style.marginLeft=ginga+'px';
}