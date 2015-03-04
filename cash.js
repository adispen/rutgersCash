$(document).ready(function(){
    var cash="<div class='cash'> </div>";
    var numCashs=Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    for(var x=1;x<=numCashs;x++){
        $(cash).appendTo("body");
    }
    // get window dimentions
    var ww = $(window).width();
    var wh = $(window).height();
    $(".cash").each(function(i){
        var rotationNum=Math.round((Math.random()*720)+1);
        var rotation="rotate("+rotationNum+"deg)";
        var posx = Math.round(Math.random() * ww)-50;
        var posy = Math.round(Math.random() * wh)-50;
        $(this).css("top", posy + "px").css("left", posx + "px").css("transform",rotation).css("-ms-transform",rotation).css("-webkit-transform",rotation);
    });
    //they spinnin' baby
    $('.cash').click(function(){
		$('body').css("background-image","url(./cashtophatmonocle.png)");
        $('.cash').animate({  borderSpacing: -1080 }, {
            step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)');
            $(this).css('-moz-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');
            },
            duration:'slow'
        },'linear');
        play()
    });
    function play(){
         var audio = document.getElementById("audio");
         audio.play();
    }
});
