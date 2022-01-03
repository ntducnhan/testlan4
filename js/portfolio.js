$(document).ready(function(){
 
    const reset = () => {
        $("#por-item-1").fadeIn(0,"linear");
        $("#por-item-2").fadeIn(0,"linear");
        $("#por-item-3").fadeIn(0,"linear");
        $("#por-item-4").fadeIn(0,"linear");
        $("#por-item-5").fadeIn(0,"linear");
        $("#por-item-6").fadeIn(0,"linear");
        $("#por-item-7").fadeIn(0,"linear");
        $("#por-item-8").fadeIn(0,"linear");
        $("#por-item-9").fadeIn(0,"linear");
    }

    $("#por-1").click(function(){
            reset();
    });
 
    $("#por-2").click(function(){     

        reset();
        $("#por-item-2").fadeOut(300,"linear");
        $("#por-item-4").fadeOut(300,"linear");
        $("#por-item-5").fadeOut(300,"linear");
        $("#por-item-6").fadeOut(300,"linear");
        $("#por-item-7").fadeOut(300,"linear");
        $("#por-item-8").fadeOut(300,"linear");
        $("#por-item-9").fadeOut(300,"linear");
    
    });

 
    $("#por-3").click(function(){

        reset();
        $("#por-item-1").fadeOut(300,"linear");
        $("#por-item-3").fadeOut(300,"linear");
        $("#por-item-4").fadeOut(300,"linear");
        $("#por-item-5").fadeOut(300,"linear");
        $("#por-item-6").fadeOut(300,"linear");
        $("#por-item-7").fadeOut(300,"linear");
        $("#por-item-8").fadeOut(300,"linear");
        $("#por-item-9").fadeOut(300,"linear");   
  
    });

    $("#por-4").click(function(){

        reset();

        $("#por-item-1").fadeOut(300,"linear");
        $("#por-item-2").fadeOut(300,"linear");
        $("#por-item-3").fadeOut(300,"linear");
        $("#por-item-5").fadeOut(300,"linear");
        $("#por-item-8").fadeOut(300,"linear");
   
    });

    $("#por-5").click(function(){

        reset();
        $("#por-item-1").fadeOut(300,"linear");
        $("#por-item-2").fadeOut(300,"linear");
        $("#por-item-3").fadeOut(300,"linear");
        $("#por-item-4").fadeOut(300,"linear"); 
        $("#por-item-6").fadeOut(300,"linear");
        $("#por-item-7").fadeOut(300,"linear");
        $("#por-item-9").fadeOut(300,"linear");  
   
    });
});