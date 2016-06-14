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

    /** This section is only needed once per page if manually copying **/
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
        var MauticDomain = 'https://pearcoffee.io';
        var MauticLang   = {
            'submittingMessage': "Muito obrigado, responderemos o mais breve possível"
        }
    }
