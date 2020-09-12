let content = $(".text");
content.css({'display':'none'});
let $folding = $(".folding");
var elements = $folding.children();
for(i = 1; i< elements.length+1; i++){
    var element = $(".folding li:nth-child("+i+")");
    element.attr("id", i); 
}
$("#btn").on('click', function(){
    $("#5").addClass('animate');
    setTimeout(function(){
        $("#6").addClass('animateX');
    },2000);
    setTimeout(function(){
        $("#4").addClass('animate-X');
    },3000)
    setTimeout(function(){
        $("#8").addClass("animate-Y");
    }, 1000);
    setTimeout(function(){
        $("#2").addClass("animateY");
    }, 4000);
    setTimeout(function(){
        $("#1").addClass('animateY');
        $("#3").addClass('animateX');
        $("#7").addClass('animate-X');
        $("#9").addClass('animate-Y');
    },5000);
    setTimeout(function(){
        content.fadeIn();
        $folding.remove();
    },7000);
})