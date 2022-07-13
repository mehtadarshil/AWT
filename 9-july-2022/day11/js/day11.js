$(document).ready(function(){
    $("#01").click(function(){
        $("#05").hide(500);
        // $(this).attr("disabled",true);
        $("#02").attr("disabled",true);
    });
    $("#02").click(
        function(){
            $("#05").show(1000);
            $("#01").attr("disabled",true);
        }
    );
    $("#03").click(function(){
        var currentsize = parseInt($("#05").css("height"));
    
        if (currentsize>=500) {
            alert("not possible to increase");
        } else {
            currentsize+=10;
            $("#05").css("height",currentsize);
            $("#05").css("width",currentsize);
            
            $("#03").attr("disabled",true);
    }
    }
    );

    $("#04").click(function(){
        var currentsize = parseInt($("#05").css("height"));
    
        if (currentsize>=500) {
            alert("not possible to increase");
        } else {
            currentsize-=10;
            $("#05").css("height",currentsize);
            $("#05").css("width",currentsize);
            
            $("#04").attr("disabled",true);
    }
    }
    );
 });
