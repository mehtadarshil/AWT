$(document).ready(function(){
    $('#div11').draggable(
        {
            delay:3000
        }
    );
    $('#span2').draggable({
        containment: "#div12"
    });
    $('#span3').draggable({
        axis: 'x'
    });
    $('#span4').draggable({
        axis: 'y'
    });
    $('#span5').draggable({
        helper: 'clone'
    });
    $('#div16').draggable({
        holder: 'div6'
    });
});