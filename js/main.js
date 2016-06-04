$(document).ready(function(){

  var $header_top = $('.topo');
  var $nav = $('nav');

  $header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
  });

  $('#fullpage').fullpage({
    sectionsColor: ['transparent', '#000', '#b2cb59', '#000', '#fff', '#000', '#fff', '#b2cb59'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    anchors: ['home', 'solucoes', 'servicos', 'design', 'codigo', 'feitoamao', 'portfolio', 'contato'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      if(anchorLink == 'solucoes' || anchorLink == 'design' || anchorLink == 'feitoamao') {
        $('.logo').attr('src', 'img/logo-white.png');

        $('.toggle-menu').css('border', '4px solid #fff');
        $('.toggle-menu i:nth-child(1)').css('background', '#fff');
        $('.toggle-menu i:nth-child(2)').css('background', '#fff');
        $('.toggle-menu i:nth-child(3)').css('background', '#fff');
      }else{
        $('.logo').attr('src', 'img/logo-black.png');

        $('.toggle-menu').css('border', '4px solid #000');
        $('.toggle-menu i:nth-child(1)').css('background', '#000');
        $('.toggle-menu i:nth-child(2)').css('background', '#000');
        $('.toggle-menu i:nth-child(3)').css('background', '#000');
      }
    },

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      if(anchorLink == 'portfolio' && slideIndex == 1, 2) {
        $('#fp-nav').hide();
        $('.fp-prev').show();
        $('.fp-next').show();
        $.fn.fullpage.setAllowScrolling(false, 'up');
        $header_top.css('background', 'transparent');
        $nav.css('background', 'transparent');
        $(this).css('background', 'transparent');
        $(this).find('h2').css('color', '#000');
        $(this).find('h3').css('color', '#000');
        $(this).find('p').css(
          {
            'opacity': 1,
            'transform': 'translateY(0)'
          }
        );
      }else{
        $('.fp-prev').hide();
        $('.fp-next').hide();
        $('#fp-nav').show();
      };

        if(anchorLink == 'portfolio' && slideIndex == 2) {
          $('.cintya').hide();
        }else{
          $('.cintya').show();
        };
    },

    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      if(anchorLink == 'portfolio' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(true, 'up');
      }
    }
  });

});

$( document ).ready(function() {
  $("h1").delay(500).fadeIn(2000);
  $(".btn-verde").delay(700).fadeIn(2000);
});

particlesJS.load('particles-js', 'particlesjs-config.json', function() {
        //console.log('callback - particles.js config loaded');
});

var keenClient = new Keen({
    projectId: "574479aa33e4067a870a06b2",
    writeKey: "92c1cc02cf9388ed2798aae99f3cbf35ec745434d231a34c6f125504a46381664258fdc1d0d6415e152582cc385358995459feb7feca4190ffc903033cd7980240300c5dbfd2cf9369a0ade026e1c98c79b5fc53b5f56ae00b7ce70fad6c93f2"
  });

$("#cintya").hover(function(event) {
        event.preventDefault();
        keenClient.addEvent("cintya", {
          //Aplicando os detalhes do perfil
          cliente  : "Cintya Sabino",
          servico  : "Banner para o canal do Youtube",
          preco    : "Gratuito",
          link     : "https://www.youtube.com/channel/UCYLD2XEuOg-WfeqG78GfwZw"
        }), function() {
          window.open('https://www.youtube.com/channel/UCYLD2XEuOg-WfeqG78GfwZw', '_blank');
        }
      });

$("#edsnet").hover(function(event) {
        event.preventDefault();
        keenClient.addEvent("edsnet", {
          //Aplicando os detalhes do perfil
          cliente  : "EDSNET Informática",
          servico  : "Criação do site em Wordpress",
          preco    : "Gratuito",
          link     : "http://edsnet.com.br/"
        }), function() {
          window.open('http://edsnet.com.br/', '_blank');
        }
      });
