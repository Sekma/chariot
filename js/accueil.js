$(document).ready(function () {
    $.getJSON('js/boutique.json', function (data) {
        var monTableau = Object.keys(data).map(function(cle) {
            return [Number(cle), data[cle]];
        });
        let rootSpecialites = $('.specialites-container ul');

         $.each(monTableau, function(index, image){
            $(`<li><img src="img/categorie/${image[1].articles.images[0]}" /></li>`).appendTo(rootSpecialites);
            console.log(image[1].articles.images[0]);
          });

        }
    );
});