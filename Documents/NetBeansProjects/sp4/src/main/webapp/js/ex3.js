$(document).ready(function() {
    //Opgave 1
    $(".box").css({
        "width":"100px",
        "height":"100px",
        "margin":"10px",
        "float":"left"
    });

    $(".box:nth-child(1)").css("background-color","purple");
    $(".box:nth-child(2)").css("background-color","yellow");
    $(".box:nth-child(3)").css("background-color","lime");

    $(".box:first-child").click(function() {
       $(this).hide();
    });

    $(".box:nth-child(2)").mouseover(function() {
        $(this).css("border","4px solid black");
    });

    $(".box:nth-child(2)").click(function() {
       $(".box:nth-child(3)").css("font-size","24px"); 
    });

    //Opgave 2
    $(".grid").css({
        "clear":"both",
        "width":"360px",
        "height":"360px"
    });
    
    $(".grid div").css({
        "width":"100px",
        "height":"100px",
        "float":"left",
        "margin":"10px",
        "background":"#eee"
    });
    
    $(".grid div").click(function() {
        var value = $(this).html();
        var newvalue = value*2;
        $(this).html(newvalue);
    });
    
    // Opgave 3
    $("li").filter(":odd").css("background","#eee");
    
    $("li").mouseover(function() {
       $(this).css("font-size","16px"); 
    });
   
   
});