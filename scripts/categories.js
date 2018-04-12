$(document).ready(function() {

    var categories = [
        {
            name: "Koparki kołowe",
            amount: 15,
            imgSrc: "images/category/wheel-ex.jpg"
        },
        {
            name: "Koparki gąsienicowe",
            amount: 17,
            imgSrc: "images/category/tracked-ex.jpg"
        },
        {
            name: "Koparko-ładowarki",
            amount: 10,
            imgSrc: "images/category/backhoe.jpg"
        },
        {
            name: "Ładowarki",
            amount: 5,
            imgSrc: "images/category/loader.png"
        },
        {
            name: "Wozidła",
            amount: 9,
            imgSrc: "images/category/truck.jpg"
        },
        {
            name: "Spycharki",
            amount: 4,
            imgSrc: "images/category/dozer.jpg"
        },
        {
            name: "Walce",
            amount: 8,
            imgSrc: "images/category/roller.jpg"
        },
        {
            name: "Ładowarki teleskopowe",
            amount: 7,
            imgSrc: "images/category/telehandler.jpg"
        },
        {
            name: "koparki",
            amount: 5,
            imgSrc: "images/category/wheel-ex.jpg"
        },
        {
            name: "koparki",
            amount: 5,
            imgSrc: "images/category/wheel-ex.jpg"
        }
    ];



    var listGenerator = function() {
        $('.category-list').html(function() {
            for( var i = 0; i < categories.length; i++ ) {
                $(this).append("<li class='category'><a href=\"#\"><div class='image-wrapper'><a href=\"#\"><img src=\""+ categories[i].imgSrc +"\" alt=\"Roll-Car\"></a></div><div class='caption'><span class='caption-text'>"+ categories[i].name +"</span><div class='amount'>" + categories[i].amount + "</div></div></a></li>");
            }
        });    
    };

    listGenerator();

});