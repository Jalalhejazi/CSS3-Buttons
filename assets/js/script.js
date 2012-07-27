$(document).ready(function() {
    $(".buttonbar .group a").click(function() {
        $(this).parents(".group").find("li a").each(function() { $(this).removeClass("active");});
        //Set the clicked button to active and unactivate all others
        $(this).addClass("active");
    });
    
    $(".buttonbar .togglegroup a").click(function() {
        $(this).toggleClass("active");
    });
    
    $("a").click(function() {
        return false;
    })
});