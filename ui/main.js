console.log('Loaded!');
var element= document.getElementById('madi');

element.onclick=function(){
    var interval=setInterval(moveLeft,100);
    
}
function moveLeft(){
    ginga=0;
    ginga=ginga+10;
    element.style.marginLeft=ginga+'px';
}