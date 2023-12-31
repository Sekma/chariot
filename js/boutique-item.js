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
                $(`<div><h3>${menuToDisplay.articles.names[index]}</h3><p>${menuToDisplay.articles.prices[index]} DT</p></div>`).appendTo(this);
              
              });
              
             
        });
    } else {
        window.location.href = "boutique.html";
    }
});