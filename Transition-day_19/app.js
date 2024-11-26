var Imgbox = document.querySelector(".img-box");
var ImgWrap = document.querySelector(".img-wrap");
let OriginalImg = document.getElementById("OriginalImg");
let line = document.getElementById("line");    

OriginalImg.style.width = Imgbox.offsetWidth + "px";

let leftSpace = Imgbox.offsetLeft;

Imgbox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    ImgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}