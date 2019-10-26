


function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
   
    var restaurantArray = restaurants.map(function(element){
        let priceHolder =""
        for (i=0;i<element.priceRating;i++){
            priceHolder += "$"
        }
     
        return `<div style="display:inline-block;width:150px;margin:15px;inline-block;background-color:lightgrey;border-radius:5px;"> <span style="color:black;font-weight:bold; font-size:15px;">${element.name} <p style="color: grey;font-size:9px;"> ${element.type} <p style ="color:green;">${priceHolder}</p></div>`
   })
   
   var restaurantJoin = restaurantArray.join('')
   
    return `
        <div class="text-center mt-5">
            <code>${restaurantJoin}</code>
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}