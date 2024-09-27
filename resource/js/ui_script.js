$(function(){

	// page url 체크 후 lnb action 제어
	const pageUrl = (decodeURIComponent(window.location.href));
	const pageTitle = pageUrl.split('/').reverse()[0];	
	
	// 페이지 타이틀 메인
	const pageHeadTitle = $('html head title');
	pageHeadTitle.text('2025 간사이 여행');
	
	// gnb 연동
	$('header').append(gnb);
	const gnb_list = $('header .inner-wrap > .gnb > ul');
	$.each(gnb_tree, function() {
		gnb_list.append(`<li><a href="${$(this)[1]}">${$(this)[0]}</a></li>`);
		
	})


	// lnb 추가
	if ($('.lnb-wrap').length) {
		const lnb_wrap = $('.lnb-wrap');
		const lnb_tit = lnb_wrap.children('.page-title');
		
		// lnb link href 설정
		function setLnbMenu (lnb_idx) {
			const lnb_menu = lnb_wrap.children('.lnb').find('a');

			$.each(gnb_tree[lnb_idx][2], function() {
				lnb_menu.each(function(index, e) {
					$(this).attr('href' , gnb_tree[lnb_idx][2][index]);

					// lnb 활성화
					if (`./${pageTitle}` == $(this).attr('href')){
						$(this).parent('li').addClass('on');
						$(this).hasClass('link') ? $(this).addClass('active').attr('title','현재 페이지').parents('li').addClass('on') : $(this).parents('li').addClass('on').children().addClass('active').attr('title','현재 페이지');
					}

					// 콘텐츠 타이틀 연동
					const contTit = $('#page-title');
					if ($(this).hasClass('active')) contTit.text($(this).text());

				});
			});
		}


		// lnb 추가 / 제어
		$.each(gnb_tree, function(index, e) {
			if (lnb_tit.text() == gnb_tree[index][0]) {
				// header gnb 현재페이지 표시
				if (gnb_tree[index][1] == $('header .gnb a').eq(index).attr('href')) $('header .gnb a').eq(index).attr('title','현재페이지').parent('li').addClass('on');

				// page-title href 설정
				lnb_tit.find('a').attr('href', gnb_tree[index][1]);

				// lnb 추가
				lnb_wrap.append(lnb[index]);
				// lnb link href 설정
				setLnbMenu(index);
			}
		});
		
		// 헤드 페이지 타이틀 설정
		const depth_1 = lnb_tit.text();
		const depth_2 = $('.lnb > ul > li > .active').eq(0).text();
		const depth_3_chk = $('.lnb .acc-cont .on');
		const depth_3 = depth_3_chk.text();
		if ($(lnb_wrap).find('.on').length) {
			// 2depth
			pageHeadTitle.text(`${depth_2} | ${lnb_tit.text()} | 2025 간사이 여행`);
			// 3depth
			if (depth_3_chk.length) pageHeadTitle.text(`${depth_3} | ${depth_2} | ${lnb_tit.text()} | 2025 간사이 여행`);
		} else {
			// 1depth
			pageHeadTitle.text(`${depth_1} | 2025 간사이 여행`);
		}

	}

	// 여행 예매정보 링크이동
	if ($('.infomation-wrap').length) {
		const pageInfo = $('.infomation-wrap .reserved .btn-link');
		$.each(reserved_info, function(index, e) {
			pageInfo.each(function() {
				const _this = $(this);
				if (_this.hasClass(reserved_info[index])) _this.attr('href' , reserved_link[index])
			})
		});
	}

	// 총 건수 설정
	if ($('.list-control').length) {
		$('.list-control').each(function() {
			const list = $(this).siblings('.detail-list').children('ul').children('li');
			$(this).find('.num').text(list.length);
		});
	}

	
	// 목록 (기본순 / 추천순)정렬 스크립트
	// 제어하려는 목록
	function appendList (myList, item) {
		$.each(item, function(i, li){
			myList.append(li);
		});
	}

	// 추천순
	function setDetailListSortUp (myList) {
		var detailListItem = myList.children('li').get();
		detailListItem.sort(function(a,b){ 
			var keyA = Number($(a).find('.count').text()); // 작은숫자
			var keyB = Number($(b).find('.count').text()); // 큰숫자
			// console.log(keyB < keyA) // true
			// a가 아래 b 가 위
			if (keyB > keyA) return 1;
			if (keyB < keyA) return -1;
			return 0;
		});

		appendList(myList, detailListItem);
	}
	
	// 기본순
	function setDetailListSortDown (myList) {
		var detailListItem = myList.children('li').get();
		detailListItem.sort(function(a,b){ 
			var keyA = Number($(a).find('.count').text());
			var keyB = Number($(b).find('.count').text());
			if (keyB > keyA) return -1;
			if (keyB < keyA) return 1;
			return 0;
		});

		appendList(myList, detailListItem);
	}

	
		
	// 목록 정렬 버튼
	$(document).on('click', '.list-control .btn-layer', function() {
		const setUl = $(this).parents('.list-control').siblings('.detail-list').children('ul');
		// 버튼 효과
		$(this).addClass('active').attr('title','선택됨').siblings('.btn-layer').removeClass('active').removeAttr('title');
		
		// 추천순 : 기본순
		$(this).hasClass('layer-best') ? setDetailListSortUp(setUl) : setDetailListSortDown(setUl);
		
	});

	// 여행정보 메인화면 숙소정보 목록정렬
	if ($('.detail-list').hasClass('info-travel')) {
		const setUl = $('.detail-list.info-travel > ul');
		setDetailListSortUp(setUl);
	}


	// 관광지 금주의 인기장소
	if ($('.best-tour').length) {
		const bestTour = $('.best-tour');
		const _target = $('.best-tour .swiper-wrapper');
		const tourList = bestTour.siblings('.contents').find('.detail-list > ul > li');
		const tourList_length = bestTour.siblings('.contents').find('.detail-list > ul > li').length;
		_target.append(tourList.eq(Math.floor(Math.random()*tourList_length)).addClass('swiper-slide'));
	}
	
	

	
	// $('.detail-list .toggle-count').on('click', function() {
	// 	var count = 0;
	// 	if (!$(this).hasClass('check')) {
	// 		$(this).addClass('check').children('.count').text(count + 1).attr('title','추천됨');
	// 		count = $(this).children('.count').text();
	// 	} else {
	// 		$(this).removeClass('check').children('.count').text(count);
	// 	}
	// })

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
	const foodListSwiper = new Swiper('.main .food-visual', {
		loop: true,
		speed : 600,
		simulateTouch : true,
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter : true,
		},
	});
	// 숙소정보 swiper
	const sleepListSwiper = new Swiper('.detail-list:not(.info-travel) .detail-visual', {
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

	// 관광지 메인 비주얼 swiper
	const tourVisualSwiper = new Swiper('.tourist-wrap', {
		loop: true,
		effect: 'fade',
		loopedSlides: 1,
		speed : 500,
		simulateTouch : true,
		// spaceBetween:'20px',
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter : true,
			disableOnInteraction: false,
		},
	});
	// 금주 인기장소 swiper
	const bestTourListSwiper = new Swiper('.best-tour', {
		// direction: 'vertical',
		// loop: true,
		// loopedSlides: 1,
		effect: 'fade',
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
	// 금주 인기장소 이미지 swiper
	const bestTourImgtSwiper = new Swiper('.best-tour .detail-visual', {
		// direction: 'vertical',
		loop: true,
		loopedSlides: 1,
		// effect: 'fade',
		speed : 600,
		simulateTouch : true,
		slidesPerView: 1,
		spaceBetween:'20px',
		autoplay: {
			delay: 1000,
			pauseOnMouseEnter : true,
			disableOnInteraction: false,
		},
	});

	// 맛집추천 swiper
	const foodBestSwiper = new Swiper('.food.info-travel', {
		// loop: true,
		speed : 600,
		slidesPerView: 1,
		centeredSlides: false,
		spaceBetween:'24px',
		simulateTouch : true,
		observer: true,
		observeParents: true,
		autoplay: {
			enabled:true,
			delay: 3000,
			pauseOnMouseEnter : true,
		},
		navigation : {
			nextEl : '.swiper-button-next', // 다음 버튼 클래스명
			prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
		},
		breakpoints: {
        
			700: {
				slidesPerView: 2,
			},
			920: {
				slidesPerView: 1,
			},
			1000: {
				slidesPerView: 2,
			},
		},
	});


	// $(window).on('resize', function() {
	// 	if ($(window.width()) > 699) foodBestSwiper.autoplay.stop()
	// })







	// 관광지 한눈에보기 animation
	if ($('.tourist-wrap').length) {
		let slider_index = 0;
		function accentSlideSet(){
			const _target = $('.tourist-wrap .swiper-slide-active .list-img li');
			_target.removeClass('on');
			_target.eq(slider_index).addClass('on');
			slider_index++;

			if(slider_index >= _target.length) slider_index= 0;
		}
		
		setInterval(accentSlideSet, 500);
	}
	
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
	if ($('.lnb.accordion').length) {
		
		$(window).on('resize', function() {
			if ($(window).width() < 921) {
				$('.lnb .acc-cont').css('display', 'none').parent('li').removeClass('on');
			} else {
				$('.lnb.accordion > ul > li').find('.active').parent('li').addClass('on').find('.acc-cont').slideDown(150).parent('li').siblings().removeClass('on').find('.acc-cont').slideUp(150);
			}
		});
		if ($(window).width() < 921) {
			$('.lnb .acc-cont').css('display', 'none').parent('li').removeClass('on');
		} 
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