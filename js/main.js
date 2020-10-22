---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  window.onscroll = function () { window.scrollTo(0, 0); };
  $('body').bind('touchmove', function(e){e.preventDefault()})

  $('a.panel-button').click(function (e) {
    //if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    if ($('.content-wrapper').hasClass('showing')){
      $('.content-wrapper').removeClass('animated slideInRight')
      $('.panel-cover').removeClass('panel-cover--collapsed')
      window.onscroll = function () { window.scrollTo(0, 0); };
      $('body').bind('touchmove', function(e){e.preventDefault()})

      $('.panel-cover').css('max-width', '100%')
      $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
      $('.content-wrapper').removeClass('showing')
      window.location.hash = '';
      parent.location.hash = ''
      return;
    }
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      window.onscroll = function (){};
      $('body').unbind('touchmove')

      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
    $('.content-wrapper').addClass('showing');
  })

  if (window.location.hash && window.location.hash == '#projects') {
    $('.panel-cover').addClass('panel-cover--collapsed')
     window.onscroll = function (){};
     $('body').unbind('touchmove')

  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    window.onscroll = function (){};
    $('body').unbind('touchmove')

  }

  $('.btn-mobile-menu').click(function () {
         window.onscroll = function (){};
         $('body').unbind('touchmove')

    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .projects-button').click(function () {
    if ($('.content-wrapper').hasClass('showing')){
    window.onscroll = function (){};
    $('body').unbind('touchmove')

  }
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
})
