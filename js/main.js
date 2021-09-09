jQuery(document).ready(function ($) {
  //FIXED HEADER
  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $('#header').addClass('active');
    } else {
      $('#header').removeClass('active');
    }
  };

  //ISOTOPE
  let btns = $('#services .button-group button');

  btns.click(function (e) {
    $('#services .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('#services .grid').isotope({
      filter: selector,
    });
  });

  $(window).on('load', function () {
    $('#services .grid').isotope({
      filter: '*',
    });
  });

  //MAGNIFY
  $('.grid .popup-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
      tPrev: 'Anterior',
      tNext: 'Proxima',
      tCounter: '%curr% de %total%',
    },
  });

  //OWL
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});

//BOOTSTRAP
function bootstrapAlert() {
  $('.bootstrap-growl').remove();
  $.bootstrapGrowl('Successfully downloaded', {
    type: 'success',
    offset: { from: 'top', amount: 950 },
    align: 'center',
    width: 300,
    delay: 1500,
    allow_dismiss: true,
  });
}

$('#example').popover('hide');
$('#example').click(function () {
  $('#example').popover('show');
});

//WEATHER
$(document).ready(function () {
  $('#submitWeather').click(function () {
    var city = $('#city').val();

    if (city != '') {
      $.ajax({
        url:
          'https://api.openweathermap.org/data/2.5/weather?q=' +
          city +
          '&units=metric' +
          '&appid=001b0f58045147663b1ea518d34d88b4',
        type: 'GET',
        dataType: 'jsonp',
        success: function (data) {
          var widget = show(data);

          $('#show').html(widget);

          $('#city').val('');
        },
      });
    } else {
      $('#error').html('Field cannot be empty');
    }
  });
});

function show(data) {
  return '<h3><strong>Weather</strong>: ' + data.main.temp + '</h3>';
}
