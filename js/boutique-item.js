$(document).ready(function (){
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('id')){
       $.getJSON('/js/boutique.json', function (data) {
        let menuToDisplay = data[searchParams.get('id')];
        $('#boutique-item h1').text(menuToDisplay.title);
        let rootUl = $('#boutique-item ul');
            $.each(menuToDisplay.image, function(index, image){
            $(`<li><img src="img/categorie/${image}" /></li>`).appendTo(rootUl);
        });
        });
    } else {
        window.location.pathname = "/boutique.html";
    }
});