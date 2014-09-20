$(document).ready(function(){

	$('.teamBox .twoColumns').each(function() {
		headline = $(this).find('h3');
		$(this).find('.csc-textpic-text').prepend(headline);
	});
	
	var isScrolled = false;
	$(window).scroll(function () { 
    	if($(document).scrollTop() > 0 ) {
    		if(!isScrolled) {
    			$('#scrollUp').fadeIn();
    		}
    		isScrolled = true;
    	} else {
    		if(isScrolled) {
    			$('#scrollUp').fadeOut();
    		}
    		isScrolled = false;
    	}
    });
    
    $('#scrollUp').click(function() {
    	$("html:not(:animated),body:not(:animated)").animate({scrollTop: 0}, 600);
    	return false;
    });
    
    setTimeout(function() {
    	$('.socials .csc-default:first').append($('#___plusone_0'));
    }, 500);
    

/*	if iPhone | iPad
	checkiPhone(), checkiPad() unten
**************************************************/

	jQuery(function() {
		iPhone=checkiPhone();
		iPad=checkiPad();
		
		iPadOS4=checkiPadOS4();
		iPhoneOS4=checkiPhoneOS4();
		iPhone3G=checkiPhone3G();
	});
	
	$('iframe:nth-child(3n)').css('margin-right','0');
	$('#sidebarRight #news .simpleNewsList li:last-child').addClass('lastchild');

	
/*	Listen halbieren
**************************************************/

	$('.halfList ul').each(function() {
	    var t = $(this),               // Store a copy of both $(this) and t.children(), 
	    children = t.children(),   // to avoid calling the jQuery function too much
		// Create a clone of the original list, then empty it and insert it after the original
		secondList = t.clone(false).empty().insertAfter(this), 
	    // Calculate the number of elements to move to the second list
	    // ie. half the number of elements in the list, divided by two and rounded up
	    length = Math.ceil(children.length / 5);
		
	   	// Move half the children of the original list to the new one
	    children.slice(children.length / 2).appendTo(secondList);
		
		// If the list is an ordered list, let the list start at the correct position 
	    if(this.nodeName === 'OL'){
	    	secondList.attr('start', length + 1);
		}
		$(this).parents('.halfList').find('ul:first').addClass('first');
		$(this).parents('.halfList').find('ul:last').addClass('second');
	});
	
	$('.halfList').find('ul').wrapAll('<div class="halfListWrap" />');


/*	SLIDER
**************************************************/
	$('#headWrap #slider .slider').titleSliderVideo();
	
	var slideVids = 0;
	$('#slider .textboxAboveCenter').find('a').each(function() {
		check = $(this).attr('href');
		tmp1  = check.split('youtube');
		tmp2  = check.split('vimeo');
		if(tmp1.length > 1 || tmp2.length > 1) {
			$(this).addClass('fancyboxSliderVid');
			$('body').append('<div id="slideVid'+slideVids+'" class="slideVidWrap"><iframe src="' + $(this).attr('href') + '" width="940" height="520" /></div>'); 
			$(this).attr('href', '#slideVid'+slideVids);
			$(this).append('<div class="vidButton" />');
			slideVids++;
		}
	});
	

/*	Sprache ändern
**************************************************/
	$('#languageSelector').mouseenter(function() {
		$(this).find('li.active').animate({top: '25px'}, 600);
	});
	
	$('#languageSelector').mouseleave(function() {
		$(this).find('li.active').animate({top: '0px'}, 400);
	});


/*	Video Galerie
**************************************************/
	// $('#references').rpdVideos();
	
	$('#references').masonry({
	    // options
	    itemSelector : '.refItem',
	    columnWidth: 150
	});
	
	$('#aboutdc').masonry({
	    // options
	    itemSelector : '.refItem',
	    columnWidth: 100
	});
	
	// Standard Video Boxen (Startseite)
	vidIterator = 0;
	$('.videoWrap').find('.imageWithCaption').each(function() {
		$(this).find('a').attr('id', vidIterator);
		$(this).parent().append('<div class="vidBox" id="vidBox' + vidIterator + '"><iframe src="' + $(this).find('a').attr('href') + '" width="940" height="520" />');
		$(this).find('a').attr('href', '#vidBox'+vidIterator);
		$(this).find('a').addClass("fancyboxVid");
		vidIterator++;
	});
	
	// Masonry Videos (Galerie)
	$('.refItem.vimeo').each(function() {
		$(this).find('.vimeoOverlay').click(function() {
			parent = $(this).parent();
			tmpSrc = parent.find('iframe').attr('src');
			checkAutoplay = tmpSrc.split('vimeo');
			AP = '';
			if(checkAutoplay.length > 1) AP = '&autoplay=1';
			parent.find('.fancyVidWrap').html('<iframe src="'+tmpSrc+'&autoplay=1" class="activePlayer" width="940" height="520"></iframe>');
			parent.find('.fancyboxVid').click();
		});
	});
	
	
/*	Galerie Navi
**************************************************/
	var picsPerPage = 8;
	var iterate     = 0;
	var galPages    = 1;
	$('.refItem.gallery').find('.galimg').each(function() {
		cntCheck = iterate % picsPerPage;
		if(iterate == 0 || !cntCheck) {
			$('.refItem.gallery').append('<div class="galPage" id="galPage' + galPages + '" />');
			galPages++;
		}
		currentPage = $('.refItem.gallery').find('.galPage:last');
		currentPage.append($(this));
		iterate++;
	});
	
	$('.galPage').wrapAll('<div id="galWrap" />');
	$('.galPage').hide();
	$('.galPage:first').show().addClass('active');

	$('.refItem.gallery').append('<ul id="galNavi" />');
	for(var i = 1; i < galPages; i++) {
		$('#galNavi').append('<li><a href="#galPage' + i + '">' + i + '</a></li>');
	}
	
	$('#galNavi a').each(function() {
		$(this).click(function() {
			var link = $(this).attr('href').substr(1);
			
			$('.galPage.active').animate({left: '-600px'}, 300, function() {
				$('#' + link).css({
					'display' : 'block',
					'left'   : '600px'
				});
				$(this).removeClass('active');
				$('#' + link).animate({left: '10px'}, 500, function() {
					$(this).addClass('active');
				});
			});
			return false;
		});
	});
	

/*	Fancybox
**************************************************/
	
	var currentVideoId;
	$('#videoTeasers').find('.overlay').each(function() {
		$(this).click(function() {
			relatedId      = $(this).siblings('.fancyboxVid').attr('href').split('#');
			currentVideoId = relatedId[1];
			relatedLink    = $(this).siblings('.fancyboxVid').find('iframe').attr('src');
			
			$('#'+relatedId[1]).html('<iframe src="'+relatedLink+'&autoplay=1" class="activePlayer" width="940" height="520"></iframe>');
			$(this).siblings('.fancyboxVid').click();
		});
	});
	
	$('#photoTeasers').find('.overlay').each(function() {
		$(this).click(function() {
			relatedId      = $(this).siblings('.fancyboxVid').attr('href').split('#');
			currentVideoId = relatedId[1];
			relatedLink    = $(this).siblings('.fancyboxVid').find('iframe').attr('src');
			
			$('#'+relatedId[1]).html('<iframe src="'+relatedLink+'&autoplay=1" class="activePlayer" width="940" height="520"></iframe>');
			$(this).siblings('.fancyboxVid').click();
		});
	});
	
	// $('#photoTeasers').find('a').addClass('fancybox');

	$('.fancybox, #references .refItem.image a').fancybox({
		'overlayColor'	: '#000000',
		'overlayOpacity': '0.4'
	});	
	
	$('.fancyboxVid').fancybox({
		'overlayColor'	: '#000000',
		'overlayOpacity': '0.7',
		'width'         : 940,
		'height'        : 520,
		'autoDimensions': false,
		afterClose     : function() {
			$('#'+currentVideoId).html('&nbsp;');
		}
	});
	
	$('.fancyboxSliderVid').fancybox({
		'overlayColor'	: '#000000',
		'overlayOpacity': '0.7',
		'width'         : 940,
		'height'        : 520,
		'autoDimensions': false,
		afterClose      : function() {
			$('#'+currentVideoId).html('&nbsp;');
			$.fn.titleSliderVideo('restartSlider');
		},
		beforeShow      : function() {
			$.fn.titleSliderVideo('stopSlider');
		}
	});
	
	$('.fancyboxIframe').fancybox({
		'overlayColor'	: '#000000',
		'overlayOpacity': '0.7',
		'autoDimensions': true,
		'type'          : 'iframe'
	});	
	
	$('.kundenWrap .imageCaption').each(function() {
		tmp = $(this).html().split('|');
		if(tmp[1] && tmp[1] != undefined) {
			$(this).html(tmp[0] + '<br />' + tmp[1]);
		} else {
			$(this).html(tmp[0]);
		}
	});
	
	
	var startKunden = $('#startKunden');
	var kundenArray = $('#startKunden .image');
	$('#startKunden .image').each(function(i) {
		textLink = $(this).find('span').html().split('|');
		$(this).find('img').attr('alt', textLink[0]);
		if(textLink[1] && textLink[1] != undefined) {
			$(this).find('img').wrap('<a href="' + textLink[1] + '" target="_blank"></a>');
		}
		if(i % 11 == 0 && i == 11) {
			kundenArray.slice(i, i +  11).wrapAll('<div class="active row">');
		} else if(i % 11 == 0) {
			kundenArray.slice(i, i +  11).wrapAll('<div class="row">');
		}
	});
	
	setTimeout(function() {
		var kundenSlider = setInterval(function() {
			//console.log(startKunden.find('.active').next().length);
		    active = startKunden.find('.active');
		    next   = (startKunden.find('.active').next().length > 0) ? startKunden.find('.active').next() : startKunden.find('.row:first');
		    
		    active.animate({'top': 200, 'opacity': 0}, 300);
		    active.removeClass('active');
		    
		    next.addClass('active');
		    next.css({'top': '-100px'}).animate({'top': 0, 'opacity': 1}, 400);
		}, 4000);
	}, 500);
	
	
	var miniSlider = $('.miniSlider');
	var slideArray = $('.miniSlider .csc-textpic-imagewrap');
	$('.miniSlider .csc-textpic-imagewrap:last').addClass('active').css('opacity', '1');
	
	if(miniSlider.length > 0) {
	setTimeout(function() {
		var miniSliderTimer = setInterval(function() {
			//console.log(startKunden.find('.active').next().length);
		    active = miniSlider.find('.active');
		    next   = (miniSlider.find('.active').next().length > 0) ? miniSlider.find('.active').next() : miniSlider.find('.csc-textpic-imagewrap:first');
		    
		    active.animate({'opacity': 0}, 300);
		    active.removeClass('active');
		    
		    next.addClass('active');
		    next.animate({'opacity': 1}, 900);
		}, 3000);
	}, 500);
	}
	
/*	Höhe anpassen: content / right
**************************************************/

/*
	var maxHeight = Math.max($('#content').outerHeight(true),$('#right').outerHeight(true));
	$('#content').height(maxHeight);
	$('#right').height(maxHeight);
*/
	
/*	Submenu
**************************************************/
	
	var activeSub    = false;
	var openSub      = $('#mainNavi .active').find('.subNavi');
	var openSubDelay = true;
	var openHidden   = false;
	
	$('.subNavi').each(function() {
		baseWidth = $(this).parent().width();
		thisWidth = $(this).width();
		finWidth  = (thisWidth/2) - baseWidth;
		
		$(this).css('left', '-'+finWidth+'px');
	});
	
	$('#mainNavi li.lvl1').not('.active').bind('mouseenter', function() {
		openSubDelay = false;
		//console.log($(this).hasClass('active'));
		if(activeSub == $(this).find('.subNavi') || $(this).hasClass('active')) return false;
		if(openSub.length > 0) {
			openSub.animate({opacity: 0, top: 80}, 400);
			openHidden = true;
		}
		activeSub = $(this).find('.subNavi');
		activeSub.css('display', 'block');
		activeSub.animate({opacity: 1, top: 15}, 200, function() {
			// filter reset
		});
	});
	
	$('#mainNavi li.lvl1').not('.active').bind('mouseleave', function() {
		openSubDelay = true;
		if(!$(this).hasClass('active')) {
			activeSub = $(this).find('.subNavi');
			if(openSub.length > 0) {
			    hideSubNavi();
			}
			activeSub.animate({opacity: 0, top: 80}, 400, function() {
			    // filter reset
			});
		}
		activeSub = false;
	});
	
	function hideSubNavi() {
		setTimeout(function() {
			if(openSubDelay) {
				openSub.animate({opacity: 1, top: 15}, 400);
				openHidden = false;
			}
		}, 300); 
		
		return false;
	}
	

/* Masonry fit to center *************************/
	var fixedWidth = 0;
	if($('#references, #aboutdc').length > 0) {
		setTimeout(function() {
			nWidth = $('body').width() - 50;
			for(var i = 1; i < 10; i++) {
			    if((i * 310) > nWidth) {
			    	fixedWidth = ((i - 1) * 310) + 'px';
			    	break;
			    }
			}
			$('#references, #aboutdc').css('width', fixedWidth);
			$('#aboutdc').masonry('reload');
		}, 500);
		
		$(window).resize(function() {
			nWidth = $('body').width() - 50;
			for(var i = 1; i < 10; i++) {
				if((i * 310) > nWidth) {
					fixedWidth = ((i - 1) * 310) + 'px';
					break;
				}
			}
			
			$('#references, #aboutdc').css('width', fixedWidth);
		});
	}


/* Accordion *************************************/

	$('.accordion h3').each(function(){
		$(this).siblings().wrapAll('<div></div>');
	});
	$('.accordion:first').before('<div class="theAccordion"></div>');
	$('.accordion').appendTo('.theAccordion');
	$('.theAccordion h3').unwrap();
	$(".theAccordion").accordion({header: 'h3', autoHeight: false, active: 'h3:first', collapsible: true});
	

	
/*	Rechte Spalte anpassen - iframe
**************************************************/

	$('#wrap.startseite #sidebarRight .iframe iframe').height(104);
	$('#sidebarRight .iframe').each(function(){
		if( $(this).parent().next().length == 0 ) {
			$(this).css('margin-bottom','0');
		}
	});
	
	
/*	FormHandler
**************************************************/
	$('.QapTcha').QapTcha({
		txtLock: 'Formular gesperrt, ziehen Sie den Button zum entsperren',
		txtUnlock: 'Formular zum Versand freigegeben!'
	});
	$('#mailForm').find('input, textarea, select').focus(function() {
		$(this).attr('style', '');
	});
	
});


/*	if iPhone | iPad
**************************************************/

	function checkiPhone() {
	    var iPhone = ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)));
	    return iPhone;
	}
	
	function checkiPad() {
	    var iPad = navigator.userAgent.match(/iPad/i);
	    return iPad;
	}
	
	function checkiPadOS4() {
	    var iPadOS4 = navigator.userAgent.match(/CPU OS 4/i);
	    return iPadOS4;
	}
	
	function checkiPhoneOS4() {
	    var iPhone4 = navigator.userAgent.match(/CPU iPhone OS 4/i);
	    return iPhone4;
	}
	
	function checkiPhone3G() {
	    var iPhone3G = navigator.userAgent.match(/8C148/i);
	    return iPhone3G;
	}