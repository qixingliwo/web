/**
 * Created by qsx on 2016/11/8.
 */
window.onload=function(){
    var ul1=document.getElementById("contUl");
    var li1=document.getElementsByClassName("contLI");
    var oimg=document.getElementsByClassName("img");
    var oimg1=document.getElementsByClassName("img1");
    var speed=5;
    var item=0;
    oimg[0].onclick=function () {
        speed=5;
    }
    oimg1[0].onclick=function () {
        speed=-5
    }
    ul1.innerHTML=ul1.innerHTML+ul1.innerHTML;
    ul1.style.width=li1[0].offsetWidth*li1.length+"px";
    function test(){
        item=setInterval(function () {
            ul1.style.left=ul1.offsetLeft-speed+"px";
            if(ul1.offsetLeft<=-ul1.offsetWidth/2){
                ul1.style.left="0";
            }
            if(ul1.offsetLeft>0){
                ul1.style.left=-(ul1.offsetWidth/2)+"px";
            }
        },50)
        return item;
    }
    test()
    /* item=setInterval(function () {
     ul1.style.left=ul1.offsetLeft-speed+"px";
     if(ul1.offsetLeft<=-ul1.offsetWidth/2){
     ul1.style.left="0px";
     }
     if(ul1.offsetLeft>0){
     ul1.style.left=-(ul1.offsetWidth/2)+"px";
     }
     },50)*/
    ul1.onmouseover=function(){
        clearInterval(item);
    }
    ul1.onmouseout=function () {
        test()
        /*item=setInterval(function () {
         ul1.style.left=ul1.offsetLeft-speed+"px";
         if(ul1.offsetLeft<=-ul1.offsetWidth/2){
         ul1.style.left="0px";
         }
         if(ul1.offsetLeft>0){
         ul1.style.left=-(ul1.offsetWidth/2)+"px";
         }
         },50)*/
    }
}
