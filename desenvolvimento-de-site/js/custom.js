jQuery(function () {
	$(document).ready(function(){

		jQuery('.skillbar').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).find('.count-bar').animate({
					width:jQuery(this).attr('data-percent')
				},3000);
				var percent = jQuery(this).attr('data-percent');
				jQuery(this).find('.count').html('<span>' + percent + '</span>');
			});
		});
	});

}());

$(document).ready(function() {
	$('#quero-meu-site').click(function() {
		$('#formulario').fadeIn(1000);
	});
})

$(document).ready(function() {
	$('#quero-meu-site-2').click(function() {
		$('#formulario').fadeIn(1000);
	});
})

$(document).ready(function() {
	$('#quero-meu-site-3').click(function() {
		$('#formulario').fadeIn(1000);
	});
})

var mauticUrl = 'https://williandutras.mautic.net';
var src = mauticUrl + '/mtracking.gif?page_url=' + encodeURIComponent(window.location.href) + '&page_title=' + encodeURIComponent(document.title);
var img = document.createElement('img');
img.style.width  = '1px';
img.style.height  = '1px';
img.style.display = 'none';
img.src = src;
var body = document.getElementsByTagName('body')[0];
body.appendChild(img);

    if (typeof MauticSDKLoaded == 'undefined') {
        var MauticSDKLoaded = true;
        var head            = document.getElementsByTagName('head')[0];
        var script          = document.createElement('script');
        script.type         = 'text/javascript';
        script.src          = 'https://williandutras.mautic.net/mautic/media/js/mautic-form.js';
        script.onload       = function() {
            MauticSDK.onLoad();
        };
        head.appendChild(script);
        var MauticDomain = 'https://williandutras.mautic.net';
        var MauticLang   = {
            'submittingMessage': "Por favor aguarde..."
        }
    }
