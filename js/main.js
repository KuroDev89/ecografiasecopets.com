$('.carousel').carousel({
});

/*Menu color change on scroll*/

$(document).ready(function() {
  var scroll_start = 0;
  var startchange = $('#about');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $('.main_menu').addClass('menu');
      } else {
        $('.main_menu li').removeClass('menu2');
      }
    });
  }
});

$(document).ready(function() {
  var scroll_start = 0;
  var startchange = $('#about');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $('.main_menu li').addClass('menu2');
      } else {
        $('.main_menu').removeClass('menu');
      }
    });
  }
});

/*CONTACT_ME BUTTON*/
$(document).ready(function() {
  $('#contact_me').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      1700
    );
  });
});

/*'ABOUT ME' MENU LINK*/
$(document).ready(function() {
  $('#About').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#about').offset().top
      },
      1700
    );
  });
});

/*'SERVICES' MENU LINK*/
$(document).ready(function() {
  $('#Services').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#services').offset().top
      },
      1700
    );
  });
});

/*Flipping cards*/
$('.flip').hover(function() {
  $(this)
    .find('.card')
    .toggleClass('flipped');
});

/*'ZONES' MENU LINK*/
$(document).ready(function() {
  $('#Zones').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#zones').offset().top
      },
      1700
    );
  });
});

/*'CONTACTO' MENU LINK*/
$(document).ready(function() {
  $('#Contact').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      1700
    );
  });
});

/*BACK TO TOP BUTTON*/
$(document).ready(function() {
  $('.top').click(function() {
    $('body, html').animate(
      {
        scrollTop: '0px'
      },
      2000
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.top').slideDown(0);
    } else {
      $('.top').slideUp(0);
    }
  });
});

/*VALIDA EL NÚMERO DE TELÉFONO*/
function justNumbers(e) {
  var keynum = window.event ? window.event.keyCode : e.which;
  if (keynum == 8 || keynum == 46) return true;

  return /\d/.test(String.fromCharCode(keynum));
}

/*THIS SHOWS AND HIDES MENU ITEMS*/
$(document).ready(function() {
  $('.hamburguer-btn .fa-times').hide();

  $('.hamburguer-btn .fa-bars').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-times').show();
    $('.mobile_menu1 a li').addClass('active');
  });

  /*cierra automaticamente menu luego de hacer clic en un enlace*/
  $('.mobile_menu1').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-bars').show();
    $('.hamburguer-btn .fa-times').hide();
  });

  $('.hamburguer-btn .fa-bars').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-times').show();
    $('.mobile_menu1').show();
  });

  $('.hamburguer-btn .fa-times').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-bars').show();
    $('.mobile_menu1').hide();
  });
});

/*Evita Scroll horizontal*/
$(function() {
  var $body = $(document);
  $body.bind('scroll', function() {
    // "Desactivar" el scroll horizontal
    if ($body.scrollLeft() !== 0) {
      $body.scrollLeft(0);
    }
  });
});
