


$(function(){
	var ip = "";
	var hostname = "";
	var city = "";
	var region = "";
	var country = "";
	var loc = "";
	var org = "";

	$.getJSON("http://ipinfo.io", function(data) {
			ip = data.ip // 접속자 ip
			hostname = data.hostname // 접속자 hostname
			city = data.city // 접속자 도시
			region = data.region // 접속자 지역
			country = data.country // 접속자 국가
			loc = data.loc // 접속 위도, 경도
			org = data.org // ISP (인터넷 서비스 제공사업자)


			// console.log(ip)

	// toggle count
	const my_ip = ip;
	$('.detail-list .toggle-count').on('click', function() {
		
		// localStorage.clear();
		var count = 0;
		// let countReset = 0;
		// console.log(localStorage.getItem(my_ip))
		// console.log(ip)
		// console.log($(this).parents('li').find('.name').text())
		if (!$(this).hasClass('check') && localStorage.getItem(my_ip) == null) {
			console.log(my_ip)
			$(this).addClass('check').text(count + 1).attr('title','추천됨');
			count = $(this).children('.count').text();
			localStorage.setItem(my_ip,$(this).parents('li').find('.name').text());
		} else {
			// console.log(count)
			$(this).removeClass('check').children('.count').text(count);
			localStorage.removeItem(my_ip);
		}



		
	})

	
	// var index=0;
	// var aKeyName = localStorage.getItem(my_ip);
	for (var i = 0; i < localStorage.length; i++) {
		console.log(localStorage.getItem(localStorage.key(i)));
		var aKeyName = localStorage.key(i);
		console.log(aKeyName)
			if (ip == aKeyName) {
				alert('dlTdma')

				$('.toggle-count').each(function(index) {
					if ($(this).parents('li').find('.name').eq(index).text() == localStorage.getItem(my_ip)) {
						$(this).addClass('check').attr('title','추천됨').children('.count').text(localStorage.length)
					}

				})
				// $(this).addClass('check').text(count + 1).attr({
				// 	title: '추천됨'
				// });
			}
	}
	// for (var i = 0; i<aKeyName.length; i++) {
	// 	console.log(aKeyName.length)
	// 	console.log(ip)
		
	// }

	
	// localStorage.clear();

			// if(country == "KR"){
			// 		console.log(data);
			// 		$("#kr").show();
			// }else if(country == "US"){
			// 		console.log(data);
			// 		$("#us").show();
			// }else if(country == "CN"){
			// 		console.log(data);
			// 		$("#cn").show();
			// }else if(country == "JP"){
			// 		console.log(data);
			// 		$("#jp").show();
			// }
	});

// // HTML의 <script> 요소를 생성한다
// const se = document.createElement('script');
// // <script> 요소의 src 속성을 설정한다
// se.src = 'https://ipinfo.io?callback=callback';
// // <body> 요소의 하위 끝에 붙인다
// // 그리고 콜백 함수를 호출한다
// document.body.appendChild(se);
// // 앞서 생성한 <script> 요소를 제거한다
// document.body.removeChild(se);

// // 콜백 함수가 호출된다
// function callback(data) {
// 	console.log(data.ip)
// }
// callback()

	// console.log(data.ip)

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


	

});