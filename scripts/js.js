// JavaScript Document
$(document).ready(function() {


$(document).ready(function(){
    $('.select_wrap').customSelect();
    /* -OR- set a custom class name for the stylable element */
});






 $(".CheckBoxClass").change(function(){ 
        if($(this).is(":checked")){
            $(this).next("label").addClass("LabelSelected");
        }else{   
            $(this).next("label").removeClass("LabelSelected");
        }  
    });  
	
	});//end DOM

