$(document).ready(function () {
    $.getJSON('js/boutique.json', function (data) {
        var monTableau = Object.keys(data).map(function(cle) {
            return [Number(cle), data[cle]];
        });
        let rootSpecialites = $('.specialites-container ul');

         $(`<li><img src="img/categorie/${monTableau[0][1].articles.images[5]}" /></li>`).appendTo(rootSpecialites);
         $(`<li><img src="img/categorie/${monTableau[1][1].articles.images[12]}" /></li>`).appendTo(rootSpecialites);
         $(`<li><img src="img/categorie/${monTableau[7][1].articles.image0}" /></li>`).appendTo(rootSpecialites);

         let rootOffres = $('.offres-container ul');

         $(`<li><img src="img/categorie/${monTableau[2][1].articles.image0}" /></li>`).appendTo(rootOffres);
         $(`<li><img src="img/categorie/${monTableau[3][1].articles.images[5]}" /></li>`).appendTo(rootOffres);
         $(`<li><img src="img/categorie/${monTableau[4][1].articles.images[1]}" /></li>`).appendTo(rootOffres);
           
            console.log(monTableau[0][1]);
        }
    );
});