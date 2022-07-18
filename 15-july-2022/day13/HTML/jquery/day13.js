$(document).ready(function () {
    $('#myaccordion').accordion();
    $('#mytabs').tabs();

    $('#slidedate').datepicker({
        showAnim : "slide"
    }
    );

    $('#mydiv').dialog({
        autoOpen:false
    });
    $('#divbutton').click(function () {
       $('#mydiv').dialog("open"); 
    });
    $('#newslider').slider(
        {
            min:18,
            max:100,
            change: function(event,ui){
                $('#slidervalue').html(ui.value);
            }
        }
    );

    $("#newspin").spinner();
});