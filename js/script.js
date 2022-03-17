$(document).ready(function(){
    var classNm = "show" // 1200px
    var count = 0; // 방향
    var total = $("#slider li").length; // $("#slider li").size()

    //Json 포멧에서 key는 절대 변수로 사용할 수 없다
    // "marginLeft" ->key , px*dir -> 값 
    setInterval(function(){
        count++
        count %= total; // 0~2
        // $("#slider li").removeClass(classNm);
        $("#slider li").eq(count).addClass(classNm).siblings().removeClass(classNm)
    } , 3000);

    $('.tabs h3').click(function(){
        $('.tabs > div').removeClass('on');
        $(this).parent().addClass('on');
    });
     

    $('#modal button').click(function(){
        $('#modal').addClass('d-none')
    });
    $('#popup').click(function(){
        $('#modal').removeClass('d-none')
    });
        
})
