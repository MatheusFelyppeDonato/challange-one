function loadProducts() {
    $.get('https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json')
        .then( response => {

            console.log({response})

            var potions = response.potions;

            var all = "";

            $.map(potions,  potion => {
                var html = '';
                html += '<li class="products__list__item">';
                html += '   <a href="#">';
                html += '       <img class="products__list__item__image" src="source/assets/images/products/' + potion.image + '"/>';
                html += '       <div class="products__list__item__name">';
                html += '           <h5>'+ potion.name +'</h5>';
                html += '           <h5>'+ potion.price +'</h5>';
                html += '       </div>';
                html += '   </a>';
                html += '</li>';

                all += html;
            })

            $('.products__list').append(all)

        })

}

$(function(){
    loadProducts();
})