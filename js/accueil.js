$(document).ready(function () {
    $.getJSON('js/boutique.json', function (data) {
        var monTableau = Object.keys(data).map(function(cle) {
            return [Number(cle), data[cle]];
        });
        let rootSpecialites = $('.specialites-container ul');

         $(`<li><img src="img/categorie/${monTableau[0][1].articles.images[5]}" /><span>Spécialité 1</span></li>`).appendTo(rootSpecialites);
         $(`<li><img src="img/categorie/${monTableau[1][1].articles.images[12]}" /><span>Spécialité 2</span></li>`).appendTo(rootSpecialites);
         $(`<li><img src="img/categorie/${monTableau[7][1].articles.image0}" /><span>Spécialité 3</span></li>`).appendTo(rootSpecialites);

         let rootOffres = $('.offres-container ul');

         $(`<li><img src="img/categorie/${monTableau[2][1].articles.image0}" /><span>Offre 1</span></li>`).appendTo(rootOffres);
         $(`<li><img src="img/categorie/${monTableau[3][1].articles.images[5]}" /><span>Offre 2</span></li>`).appendTo(rootOffres);
         $(`<li><img src="img/categorie/${monTableau[4][1].articles.images[1]}" /><span>Offre 3</span></li>`).appendTo(rootOffres);
         
         $(".specialites-container ul li").addClass("visible");
         $(".offres-container ul li").addClass("visible");
         $(".home-container-carte #title1").addClass("visible");
         $(".home-container-carte #title2").addClass("visible");
         $(".home-container-carte #title3").addClass("visible");
        }
    );
});