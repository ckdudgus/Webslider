$(document).ready(function(){
    var px = $("#slider").width(); // 1200px
    var dir = -1; // 방향

    //Json 포멧에서 key는 절대 변수로 사용할 수 없다
    // "marginLeft" ->key , px*dir -> 값 
    setInterval(function(){
        $("#slider ul").animate( { "marginLeft" : px*dir } , 400 , function(){
            $(this).find("li").eq(0).appendTo($(this));
            $(this).css("margin-left" , 0); 
        });        
    }, 3000);
})
