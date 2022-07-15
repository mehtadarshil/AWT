//Reg Ex Declaration - Globaly.
var $FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;
var $FullNameRegEx = /^([a-zA-Z ]{2,40})$/;
var $BankAccountNameRegEx = /^([a-zA-Z ]{2,60})$/;
var $PasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,12}$/;

var $EmailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;
var $ConNoRegEx = /^([0-9]{10})$/;
var $AgeRegEx = /^([0-9]{1,2})$/;
var $AadhaarNoRegEx = /^([0-9]{12})$/;
var $GSTNoRegEx=/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
var $IndianDrivingLicenseNoRegEx = /^([A-Z]{2,3}[-/0-9]{8,13})$/;
var $IndianVehicleRegNoRegEx = /^([A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4})$/;
var $PincodeRegEx = /^[1-9][0-9]{5,6}$/;
var $PANNoRegEx = /^[A-Z]{3}[ABCFGHLJPT][A-Z][0-9]{4}[A-Z]$/;
var $IFSCCodeRegEx = /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/;
var $BankAccountNoRegEx = /^([0-9]{9,18})$/;
var $LatitudeLongitude=/^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,8})?|180(?:\.0{1,8})?)$/;

$(document).ready(function(){
    $('#01').blur(function(){
        $('#s01').empty();
        if ($(this).val()==""|| $(this).val()==null) {
            $("#s01").html('(*) Name Required...!');
        } else {
            if (!$(this).val().match($FullNameRegEx)) {
                $("#s01").html("(*) Invalid Input");
            }
        }
    })
    $('#01').keypress(function(e){
        $('#s01').empty();
        var Flag=((e.which>=65 && e.which<=90) || (e.which>=97 && e.which<=121));
        if (Flag==false) {
            $('#s01').html('(*) Invalid Value');
        }
        return Flag;
    })
    $('#02').blur(function(){
        $('#s02').empty();
        if ($(this).val()==''|| $(this).val()==null) {
            $("#s02").html('(*) Email Required...!');
        } else {
            if (!(this).val().match($FullNameRegEx)) {
                $('#s02').html('(*) Invalid Input');
            }
        }
    })
    $('#03').blur(function(){
        $('#s03').empty();
        if ($(this).val()==''|| $(this).val()==null) {
            $("#s03").html('(*) Contact no. Required...!');
        } else {
            if (!(this).val().match($ConNoRegEx)) {
                $('#s03').html('(*) Invalid Input');
            }
        }
    })
    $('#03').keypress(function(e){
        $('#s03').empty();
        var Flag=((e.which>=48 && e.which<=57));
        if (Flag==false) {
            $('#s03').html('(*) Invalid Value');
        }
        return Flag;
    })
    $('#04').blur(function(){
        $("#s04").empty();
					if($(this).val()=="" || $(this).val()==null){
						$("#s04").html("(*) address required..!!");
					}
					else{
						if($("#04").val().length>300){
							$("#s04").html("(*) address message..!!");
						}
					}
    });
    
    var TxtNameFlag=false,TxtContactNoFlag=false,TxtEmailIdFlag=false,TxtContactMsgFlag=false;

    $('#05').click(function(){
        $('#s01').empty();
        if($("#01").val()=="" || $("#01").val()==null){
            $("#s01").html("(*) Name required..!!");
            TxtNameFlag=false;
        }
        else{
            if(!$("#01").val().match($FullNameRegEx)){
                $("#s01").html("(*) Invalid name..!!");
                TxtNameFlag=false;
            }
            else{
                TxtNameFlag=true;
            }
        }
        $("#s02").empty();
		if($("#02").val()=="" || $("#02").val()==null){
			$("#s02").html("(*) Email id required..!!");
			TxtEmailIdFlag=false;
		}
		else{
			if(!$("#02").val().match($EmailIdRegEx)){
			    $("#s02").html("(*) Invalid email id..!!");
				TxtEmailIdFlag=false;
			}
			else{
				TxtEmailIdFlag=true;
			    }
			}
            $("#s03").empty();
            if($("#03").val()=="" || $("#03").val()==null){
                $("#s03").html("(*) Contact no. required..!!");
                TxtContactNoFlag=false;
            }
            else{
                if(!$("#03").val().match($ConNoRegEx)){
                    $("#s03").html("(*) Invalid contact no..!!");
                    TxtContactNoFlag=false;
                }
                else{
                    TxtContactNoFlag=true;
                }
            }
            $("#s04").empty();
                if($("#04").val()=="" || $("#04").val()==null){
                    $("#s04").html("(*) Contact message required..!!");
                    TxtContactMsgFlag=false;
                }
                else{
                    if($("#04").val().length>300){
                        $("#s04").html("(*) Invalid contact message..!!");
                        TxtContactMsgFlag=false;
                    }
                    else{
                        TxtContactMsgFlag=true;
                    }
                }
                if(TxtNameFlag==true && TxtContactNoFlag==true && TxtEmailIdFlag==true && TxtContactMsgFlag==true){
                    $("input,textarea").val("");
                    alert("Form submitted successfully..!!");
                }
                else{
                    alert("Invalid Input..!!");
                }
                
    }
    )
});