$(document).ready(function () {
    $.getJSON('js/boutique.json', function (data) {
        var monTableau = Object.keys(data).map(function(cle) {
            return [Number(cle), data[cle]];
        });
        console.log(monTableau[0]);
        let rootSpecialites = $('.boutique-main ul');

         $.each(monTableau, function(index, image){
            $(`<li><a href="boutique-item.html?id=${image[1].id}"><img src="img/categorie/${image[1].articles.image0}" /><span>${image[1].title}</span></a></li>`).appendTo(rootSpecialites);
            
          });
            
        }
    );
});