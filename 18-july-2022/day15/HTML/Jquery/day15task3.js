$(document).ready(function(){
    $('#sortable1').sortable();
    $('#sortable2').sortable();
    $('#sortable1').sortable({
        connectWith:"#sortable2"
    });
    $('#sortable2').sortable({
        connectWith:"#sortable1"
    });
});