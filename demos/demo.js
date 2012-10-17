$(function(){

	// Set up Slider
	$('#slider').anythingSlider({
		mode: 'f',
		theme : 'default1',
//		navigationSize: 4,
		navigationFormatter : function(i){
			return [ 'Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6', 'Slide 7'][i-1];
		}
	})

	// Add bottom caption FX
	.anythingSliderFx({
		'.caption-top' : [ 'caption-Top', '50px' ]
	})

	// Add a close button (x) to the caption
	.find('div[class*=caption]')
	.css({ position: 'absolute' })
	.prepend('<span class="close">x</span>')
	.find('.close').click(function(){
		var cap = $(this).parent();
		cap.animate({ top : -50 }, 400, function(){ cap.hide(); } );
	});

	// Theme Selector
	var i, t, o = '', list1, list2,
		ls = !!window.localStorage,
		// all wrappers
		wraps = [ 'None', 'Carbon Fiber', 'Glass', 'Glowy', 'Leather', 'Noise', 'Paper', 'Dark-wood', 'Light-wood' ],
		// all themes
		themes = [
			// [ 'full name', 'id' ]
			[ 'default1', 'Default (no images/css3)' ],
			[ 'default2', 'Default (with images/css3)' ],
			[ 'mini-dark', 'Mini Dark' ],
			[ 'mini-light', 'Mini Light' ],
			[ 'office', 'Office' ],
			[ 'polished', 'Polished' ],
			[ 'ribbon', 'Ribbon' ],
			[ 'shiny', 'Shiny' ],
			[ 'simple', 'Simple' ],
			[ 'tabs-light', 'Tabs Light' ],
			[ 'tabs-dark', 'Tabs Dark' ]
		];

	// Set up wrapper background selector
	$.each(wraps, function(i){
		o += '<option value="' + wraps[i].toLowerCase().replace(/\s/,'') + '">' + wraps[i] + '</option>';
	});
	list1 = $.map(wraps, function(t){ return t.toLowerCase().replace(/\s/,''); }).join(' ');
	$('#wrap')
	.html(o)
	.change(function(){
		$('#wrapper')
		.removeClass(list1)
		.addClass($(this).val());
	});

	// Set up theme selector
	o = '';
	$.each(themes, function(i){
		o += '<option value="' + themes[i][0] + '">' + themes[i][1] + '</option>';
	});
	list2 = $.map(themes, function(t){ return 'anythingSlider-' + t[0]; }).join(' ');
	$('#theme')
	.html(o)
	.change(function(){
		var theme = $(this).val();
		$('#slider').closest('div.anythingSlider')
			.removeClass(list2)
			.addClass('anythingSlider-' + theme);
		$('#slider').anythingSlider(); // update slider - needed to fix navigation tabs
	});

	// Toggle slider state to view the differences in the css
	$('button').click(function(){
		var active = ($(this).text().match('Active')) ? 'addClass' : 'removeClass';
		$('.anythingSlider')[active]('activeSlider');
	});

	// Dynamic background color - save background color and it's index to local storage
	if (ls) {
		t = localStorage.getItem("asbkgd") || '';
		if (t) {
			t = t.split(';');
			$('body')[t[1] > 7 ? 'removeClass' : 'addClass']('dark').css({
				backgroundColor : t[0]
			});
		}
	}

	// Change background color
	o = '';
	for (i=0; i < 15; i++){
		t = i.toString(16);
		o += '<span class="block" style="background-color:#' + t + t + t + '"></span>';
	}
	$('#bkgd')
	.html(o)
	.find('span').bind('mouseenter', function(){
		var b = $(this).css('background-color'),
		i = $(this).index();
		$('body')[i > 7 ? 'removeClass' : 'addClass']('dark').css({
				backgroundColor : b
		});
		if (ls) {
			localStorage.setItem("asbkgd", [ b, i ].join(';'));
		}
	});

});