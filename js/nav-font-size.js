

$(function() {

  $(window).scroll(function() {

      var mass = Math.max(1.5, 6-0.011*$(this).scrollTop()) + 'vw';

    $('#expandable').css({'font-size': mass, 'line-height': mass});

    var padding = Math.max(1, 20-0.047*$(this).scrollTop()) + '%';

  $('#expandable').css({'padding-top': padding, 'font-weight': padding});

  var margin_left = Math.max(1, 35-0.085*$(this).scrollTop()) + '%';

$('#expandable').css({'margin-left': margin_left, 'margin-left': margin_left});

var navbar = Math.max(0.01, 60-0.10*$(this).scrollTop()) + '%';

$('.navbar ul').css({'top': navbar, 'top': navbar});

var navbar_opacity = 0 + (0.002*$(this).scrollTop());

$('.navbar ul').css({'opacity': navbar_opacity});


var span = Math.max(23, 44-0.1*$(this).scrollTop()) + 'px';

$('#span').css({'font-size': span, 'line-height': span});


  });
});
