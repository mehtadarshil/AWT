$(document).ready(function(){
    $('#div1').draggable();
    $('#div2').droppable(
        {
            accept: '#div1',
            drop: function(event,ui){
                $(this).find('p').html('done....')
            }
        }
    );
});