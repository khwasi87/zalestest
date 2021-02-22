$('#owl1').owlCarousel({
    loop: true,
    items: 2,
    margin: 10,
    nav: false,
    autoplay: false,
    dots: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});
$('#owl2').owlCarousel({
    loop: true,
    items: 5,
    margin: 10,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left fa-lg" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right fa-lg" aria-hidden="true"></i>'
    ],
    autoplay: false,
    dots: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 5
        },
        1000: {
            items: 5
        }
    }
});
$('#owl3').owlCarousel({
    loop: true,
    items: 7,
    margin: 10,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left fa-lg" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right fa-lg" aria-hidden="true"></i>'
    ],
    autoplay: false,
    dots: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 4
        },
        600: {
            items: 4
        },
        1000: {
            items: 8
        }
    }
});

// Material Select Initialization
$(document).ready(function() {
    $('.mdb-select').materialSelect();
    $('.select-wrapper.md-form.md-outline input.select-dropdown').bind('focus blur', function() {
        $(this).closest('.select-outline').find('label').toggleClass('active');
        $(this).closest('.select-outline').find('.caret').toggleClass('active');
    });
});

$(document).ready(function() {
    $('#rateMe1').mdbRate();
    $('#rateMe2').mdbRate();
    $('#rateMe3').mdbRate();
    $('#rateMe4').mdbRate();
    $('#rateMe5').mdbRate();
    $('#rateMe6').mdbRate();
});