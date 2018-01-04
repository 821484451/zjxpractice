$(document).ready(function(){
    var $banner=$('.lunbo');
    var num=0;
    var timer=setinterval(funxtion(){
        num++
        var distance=num*(-1600)
        $banner.animate({left:distance},2000)
    })
});