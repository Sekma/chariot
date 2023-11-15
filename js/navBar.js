
/* $(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $("#head").addClass("positionTop");
            $("#head").removeClass("positionBottom");
        }
        else{
            $("#head").addClass("positionBottom");
            $("#head").removeClass("positionTop");
        }
    });


}); */
    
function toggleMenu() {
    $('.burger-toggle').toggleClass('active');
    $('nav').toggleClass('active');
  }