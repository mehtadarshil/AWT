$(document).ready(function(){
    $('#01').focus(function () {
        $(this).css('background-color','red');
    })
    $('#02').blur(function(){
        $(this).css('background-color','blue');
    })
    $('#03').keypress(function(){
        alert($(this).val());
    })
    $('#04').keyup(function(){ 
        alert($(this).val());       
    })
})  