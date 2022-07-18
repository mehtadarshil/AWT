$(document).ready(function(){
    $('#newslider').slider(
        {
            min:18,
            max:100,
            value:18,
            change: function(event,ui){
                $('#slidervalue').html(ui.value);
            },
        }
    );
    $('#rangeslider').slider(
        {
            min:1,
            max:800,
            range:true,
            values:[1,80],
            start: function(event,ui){
                $('#startingval').html("$"+ui.values[0]);
            },
            stop: function(event,ui){
                $('#endingval').html("$"+ui.values[1]);
            },
            change: function(event,ui){
                $('#startend').html('$'+ ui.values[0] +'-$' + ui.values[1]);
            }
        }
    );
   
   

});