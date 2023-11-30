
$(document).ready(function (){
        
        window.onscroll=function(){animation()};
        
        function animation(){
               if(document.documentElement.clientWidth>991){ 
                        if(document.documentElement.scrollTop>450){
                                $(".home-container-carte #title1").removeClass("visible");
                                $(".home-container-carte #title1").addClass("slideUp");
                                setTimeout(function(){
                                        $(".specialites-container ul li:nth-child(1)").removeClass("visible");
                                        $(".specialites-container ul li:nth-child(1)").addClass("slideUp");
                                },300)
                                setTimeout(function(){
                                        $(".specialites-container ul li:nth-child(2)").removeClass("visible");
                                        $(".specialites-container ul li:nth-child(2)").addClass("slideUp");
                                },600)
                                setTimeout(function(){
                                        $(".specialites-container ul li:nth-child(3)").removeClass("visible");
                                        $(".specialites-container ul li:nth-child(3)").addClass("slideUp");
                                },900)
                        }   
                        if(document.documentElement.scrollTop>850){
                                $(".home-container-carte #title2").removeClass("visible");
                                $(".home-container-carte #title2").addClass("slideUp");
                                setTimeout(function(){
                                        $(".offres-container ul li:nth-child(1)").removeClass("visible");
                                        $(".offres-container ul li:nth-child(1)").addClass("slideUp");
                                },300)
                                setTimeout(function(){
                                        $(".offres-container ul li:nth-child(2)").removeClass("visible");
                                        $(".offres-container ul li:nth-child(2)").addClass("slideUp");
                                },600)
                                setTimeout(function(){
                                        $(".offres-container ul li:nth-child(3)").removeClass("visible");
                                        $(".offres-container ul li:nth-child(3)").addClass("slideUp");
                                },900)
                        }  
                 }else{
                        if(document.documentElement.scrollTop>20){
                                $(".home-container-carte #title1").removeClass("visible");
                                $(".home-container-carte #title1").addClass("slideUp");
                                setTimeout(function(){
                                        $(".specialites-container ul li:nth-child(1)").removeClass("visible");
                                        $(".specialites-container ul li:nth-child(1)").addClass("slideUp");
                                },300)
                                setTimeout(function(){
                                        $(".specialites-container ul li:nth-child(2)").removeClass("visible");
                                        $(".specialites-container ul li:nth-child(2)").addClass("slideUp");
                                },600)
                                setTimeout(function(){
                                        $(".specialites-container ul li:nth-child(3)").removeClass("visible");
                                        $(".specialites-container ul li:nth-child(3)").addClass("slideUp");
                                },900)
                        }   
                        if(document.documentElement.scrollTop>400){
                                $(".home-container-carte #title2").removeClass("visible");
                                $(".home-container-carte #title2").addClass("slideUp");
                                setTimeout(function(){
                                        $(".offres-container ul li:nth-child(1)").removeClass("visible");
                                        $(".offres-container ul li:nth-child(1)").addClass("slideUp");
                                },300)
                                setTimeout(function(){
                                        $(".offres-container ul li:nth-child(2)").removeClass("visible");
                                        $(".offres-container ul li:nth-child(2)").addClass("slideUp");
                                },600)
                                setTimeout(function(){
                                        $(".offres-container ul li:nth-child(3)").removeClass("visible");
                                        $(".offres-container ul li:nth-child(3)").addClass("slideUp");
                                },900)
                        } 
                } 
        }
});
