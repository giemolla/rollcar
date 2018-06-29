const photos = [
    {
        id: 1,
        url: "images/machinery/truck.jpg"
    },
    {
        id: 2,
        url: "images/header.jpg"
    },
    {
        id: 3,
        url: "images/machinery/liebherr.jpg"
    },
    {
        id: 4,
        url: "images/loader.jpg"
    },
    {
        id: 5,
        url: "images/photo.jpg"
    },
    {
        id: 6,
        url: "images/volvo.jpg"
    },
    {
        id: 7,
        url: "images/volvos.jpg"
    }
];

$(document).ready(() => {
    const priceSection = $('.price-section');
    const offTop = $('.main-photo').offset().top - 60;
    const offInfo = $('.info-section').offset().top;

    stickyPrice = () => {
        var ScrollY = $(window).scrollTop();

        if (ScrollY >= 0 && ScrollY <= 160) {
            priceSection.css({'top': offTop + 20});
        }
        if (ScrollY >= 160) {
            priceSection.css({'top': ScrollY + 60});
        }
        if (ScrollY >= 850) {
            priceSection.css({'top': offInfo - 60});
        }
    };

    $(window).scroll(() => stickyPrice());

    changeCurrency = (elem) => {
        let eur = "38 000";
        let pln = "160 000";
        if ($(elem).hasClass('chosen') === false) {
            $('.chosen').removeClass('chosen');
            $(elem).addClass('chosen');
        }
        if ($(elem).hasClass('pln')) {
            $('.price-info > h1').html(pln);
        } else if ($(elem).hasClass('eur')) {
            $('.price-info > h1').html(eur);
        }
    };

    thumbsGenerator = () => {
        photos.map((photo) => {
            if (photo.id === 1) {
                $('.thumbs').append('<a href="#" class="thumb"><img src="' + photo.url + '" data-id=' + photo.id + ' id=' + photo.id + ' class="chosen"></a>');
            } else {
                $('.thumbs').append('<a href="#" class="thumb"><img src="' + photo.url + '" data-id=' + photo.id + ' id=' + photo.id + '></a>');
            }
        });
    };

    thumbsGenerator();

    let current = 1;
    let next = $('#next');
    let prev = $('#prev');
    let mainPhotoContainer = $('.main-photo > a');

    showPhoto = (n) => {
        mainPhotoContainer.empty().append('<img src="' + photos[n - 1].url + '">');
        $('.thumb > img#' + n).addClass('chosen');
    };


    showPhoto(current);

    next.on('click', () => {
        $('.chosen').removeClass('chosen');
        if (current < photos.length) {
            current += 1;
        } else if (current >= photos.length) {
            current = 1;
        }
        showPhoto(current);
    });

    prev.on('click', () => {
        $('.chosen').removeClass('chosen');
        if (current === 1) {
            current = photos.length;
        } else {
            current -= 1;
        }
        showPhoto(current);
    });

    $('.thumb').on('click', (e) => {
        let chosenPhoto = $(e.target);
        $('.chosen').removeClass('chosen');
        chosenPhoto.addClass('chosen');
        current = chosenPhoto.data('id');
        showPhoto(current);
    });

});