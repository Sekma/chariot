$(document).ready(function (){
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('id')){
       $.getJSON('js/boutique.json', function (data) {
        let menuToDisplay = data[searchParams.get('id')];
        $('#boutique-item h1').text(menuToDisplay.title);
        let rootUl = $('#boutique-item ul');
                $.each(menuToDisplay.articles.images, function(index, image){
                        $(`<li class="article${index}"><img src="img/categorie/${image}" /></li>`).appendTo(rootUl);   
                       
               });
              $("#boutique-item li").each(function (index, element) {
                // element == this
                $(`<h3>${menuToDisplay.articles.names[index]}</h3>`).appendTo(this);
                $(`<p>${menuToDisplay.articles.prices[index]} DT</p>`).appendTo(this);
              });
              
             
        });
    } else {
        window.location.pathname = "boutique.html";
    }
});