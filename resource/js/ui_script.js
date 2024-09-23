

$(function(){
	// 공지사항 swiper
	const alertListSwiper = new Swiper('.notice-visual', {
		direction: 'vertical',
		loop: true,
		speed : 600,
		simulateTouch : false,
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter : true,
		},
	});
	// 꼭 가야할 맛집 swiper
	const foodListSwiper = new Swiper('.food-visual', {
		loop: true,
		speed : 600,
		simulateTouch : true,
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter : true,
		},
	});
	// 숙소정보 swiper
	const sleepListSwiper = new Swiper('.detail-visual', {
		// loop: true,
		// loopedSlides: 1,
		speed : 600,
		// observer: true,
		// observeParents: true,
		slidesPerView: 'auto',
		centeredSlides: false,
		spaceBetween:'24px',
		// simulateTouch : true,
		// autoplay: {
		// 	delay: 3000,
		// 	pauseOnMouseEnter : true,
		// },
		navigation : {
			nextEl : '.swiper-button-next', // 다음 버튼 클래스명
			prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
		},

	});
	// 여행정보 - 숙소정보  swiper
	const travelSleepSwiper = new Swiper('.info-travel.detail-list', {
		speed : 600,
		effect: 'fade',
		fadeEffect: { crossFade: true },
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter : true,
		},
	});
	
	
	// 여행꿀팁 swiper
	const tipListSwiper = new Swiper('.box-window .info-travel', {
		direction: 'vertical',
		// loop: true,
		// loopedSlides: 1,
		speed : 600,
		simulateTouch : true,
		slidesPerView: 'auto',
		spaceBetween:'24px',
		autoplay: {
			delay: 1000,
			pauseOnMouseEnter : true,
			disableOnInteraction: false,
		},
		mousewheel: {
			sensitivity: .4,
		},
	});

	// 관광지 swiper
	const tourListSwiper = new Swiper('.box-human .left-travel', {
		direction: 'vertical',
		// loop: true,
		loopedSlides: 1,
		speed : 600,
		simulateTouch : true,
		slidesPerView: 2.2,
		spaceBetween:'20px',
		autoplay: {
			delay: 1000,
			pauseOnMouseEnter : true,
			disableOnInteraction: false,
		},
		mousewheel: {
			sensitivity: .4,
		},
	});


	
	// 아코디언
	$(document).on('click', '.accordion:not(.open) .btn-toggle', function(e) {
		e.preventDefault();

		const $parentLi = $(this).closest('li');
		const $accCont = $parentLi.find('.acc-cont');
		// const isMenuClosed = $('.container').hasClass('close');

		// if (isMenuClosed) {
		// 	$('.container').removeClass('close');
		// }

		$parentLi.toggleClass('on');
		$accCont.slideToggle(150);

		$parentLi.siblings('li').removeClass('on').find('.acc-cont').slideUp(150);
	});
	
	// 아코디언 - lnb
	$(window).on('resize', function() {
		if ($(window).width() < 921 && $('.lnb.accordion').length) {
			$('.lnb .acc-cont').css('display', 'none').parent('li').removeClass('on');
		} else {
			$('.lnb.accordion > ul > li').find('.active').parent('li').addClass('on').find('.acc-cont').slideDown(150).parent('li').siblings().removeClass('on').find('.acc-cont').slideUp(150);
		}
	});
	if ($(window).width() < 921 && $('.lnb.accordion').length) {
		$('.lnb .acc-cont').css('display', 'none').parent('li').removeClass('on');
	} else {
		// $('.lnb.accordion > li').find('.active').parent('li').addClass('on').find('.acc-cont').slideDown(150);
	}

	// 아코디언 동시오픈 가능
	$(document).on('click', '.accordion.open .btn-toggle', function(e) {
		e.preventDefault();
		const $parentLi_all = $(this).closest('li');
		$parentLi_all.hasClass('on') ? $parentLi_all.removeClass('on').find('.acc-cont').slideUp(150) : $parentLi_all.addClass('on').find('.acc-cont').slideDown(150);
	});




	// tab
	$(document).on('click', '[role="tab"]', function(e) {
		const $tabIndex = $(this).attr('aria-controls')
		const $tabCont = $('#' + $tabIndex)
		$(this).attr('aria-selected','true').parent('li').addClass('on').siblings('li').removeClass('on').children().attr('aria-selected', 'false');
		$tabCont.attr('tabindex','0').removeAttr('hidden').siblings('.tab-cont').attr({tabindex: '-1', hidden: 'hidden'});
	})


	// toggle count
	$(document).on('click', '.detail-list .toggle-count', function() {
		let count = 0;
		// let countReset = 0;
		if (!$(this).hasClass('check')) {
			$(this).addClass('check').text(count + 1).attr('title','추천됨')
			return console.log(count = $(this).text());
		} else {
			$(this).removeClass('check').text(count)
		}
		console.log(count)
	})






});