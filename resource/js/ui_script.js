$(function(){
	
// ================================ 공통 ========================================================
	// 상단으로 이동버튼
	$('body').append(btnTop);
	const _btnTop = $('.fixed-wrap .btn-top');
	function scrollTopHandle() {
		const windowTop = $(window).scrollTop();
		windowTop == 0 ? _btnTop.removeClass('show') : _btnTop.addClass('show');
	}

	_btnTop.on('click', function() {
		$('html, body').animate({scrollTop : 0}, 500);
	});

	scrollTopHandle()
	$(window).on('scroll', function() {
		scrollTopHandle()
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
		$tabCont.attr('tabindex','0');

		if ($(this).closest('.tab-scroll').length) {
			$('html, body').animate({scrollTop: $tabCont.offset().top - 164}, 500);
		} else {
			$tabCont.removeAttr('hidden').siblings('.tab-cont').attr({tabindex: '-1', hidden: 'hidden'});
		}
	})


	if ($('.tab-scroll').length) {
		const stickyTabHeight = $('.tab-scroll .tab-list').outerHeight();
		function scrollTabHandler () {
			const windowTop = $(window).scrollTop();
			const scrollTabBtn = $('.tab-scroll [role="tab"]');
			const tabAreaTop = $('.tab-scroll').offset().top;
			
			scrollTabBtn.each(function() {
				const _targetId = $(this).attr('aria-controls');
				const _target = $('#' + _targetId);
				const _targetTop = _target.offset().top - tabAreaTop - stickyTabHeight + 24;
			
				switch(true) {
					case windowTop == 0 : 
						$('.tab-scroll .tab-list').removeClass('scroll');
						break;
					case windowTop < _targetTop : 
						$('.tab-scroll .tab-list').addClass('scroll');
						break;
					case windowTop > _targetTop : 
						$('.tab-scroll .tab-list').addClass('scroll');
						$(this).attr('aria-selected','true').parent('li').addClass('on').siblings('li').removeClass('on').children().attr('aria-selected', 'false');
						break;
				}
			});
		}
		scrollTabHandler();

		$(window).on('scroll', function() {
			scrollTabHandler();
		});
		
	}
	
	// 모달창
	if ($('.open-modal').length) {
		// 접근성
		// const targetModal = $('#' + $(this).attr('aria-controls'));
		// const focusTarget = targetModal.find('button, input:not([type="hidden"]), select, iframe, textarea, [href], [tabindex]:not([tabindex="-1"])');
		// const focusFirst = focusTarget.first();
		// const focusLast = focusTarget.last();


		
		// if (focusTarget.length) {
		// 	focusFirst.on("keydown", function(e) {
		// 		if (e.shiftKey && e.key === 'Tab') {
		// 			e.preventDefault();
		// 			focusLast.focus();
		// 		}
		// 	});
		// 	focusLast.on("keydown", function(e) {
		// 		if (!e.shiftKey && e.key === 'Tab') {
		// 			e.preventDefault();
		// 			focusFirst.focus();
		// 		}
		// 	});
		// }

		// 레이어 열기
		$(document).on('click', '.open-modal', function() {
			$('#' + $(this).attr('aria-controls')).addClass('on')
			$('body').addClass('overflow');
		});
		

		// 레이어 닫기
		$(document).on('click', '.close-layer', function() {
			$(this).parents('.layer-modal').removeClass('on');
			$('body').removeClass('overflow');
		})


	}

	
	// 찜하기..
		// $('.detail-list .toggle-count').on('click', function() {
		// 	var count = 0;
		// 	if (!$(this).hasClass('check')) {
		// 		$(this).addClass('check').children('.count').text(count + 1).attr('title','추천됨');
		// 		count = $(this).children('.count').text();
		// 	} else {
		// 		$(this).removeClass('check').children('.count').text(count);
		// 	}
		// })



// ================================ 레이아웃 ========================================================
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


	// 공지사항 추가
	$('.notice-visual').append(notice);
	
	// footer 추가
	$('footer').empty().append(footer);



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
						$(this).hasClass('link') ? $(this).addClass('active').attr('title','현재 페이지').parents('li').addClass('on') : $(this).parents('li').addClass('on').children().addClass('active').find('.depth-3.active').attr('title','현재 페이지');
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

	// 전체메뉴
	if ($('.btn-allmenu').length) {
		const allmenu = $('header .allmenu');
		const allmenuBtn = allmenu.siblings('.btn-all-menu');

		// 전체메뉴 열기
		$(document).on('click', 'header .btn-allmenu', function() {
			$(this).siblings('.allmenu').addClass('active');
			$('body').addClass('overflow');
		});
		// 전체메뉴 닫기
		$(document).on('click', 'header .btn-allmenu-close', function() {
			$(this).closest('.allmenu').removeClass('active');
			$('body').removeClass('overflow');
		});



		// 전체메뉴 url 설정
		const allMenuDepth_01 = $('header .allmenu-list > ul > li > a');
		const allMenuDepth_02 = $('header .allmenu .contents');
		
		$.each(gnb_tree, function(index, e) {
			if (allMenuDepth_01.eq(index).text() == gnb_tree[index][0]) {
				// allmenu depth01 href 설정
				allMenuDepth_01.eq(index).attr('href', gnb_tree[index][1]);
				
				// depth02 href 설정
				$.each(gnb_tree[index][2], function(subIndex, depth02) {
					allMenuDepth_02.eq(index).find('a').eq(subIndex).attr('href', depth02);
				});
			}
		});
	}


	// 아코디언 - lnb
	if ($('.lnb.accordion').length) {
		$(window).on('resize', function() {
			if ($(window).width() < 921) {
				$('.lnb .acc-cont.active').css('display', 'none').parent('li').removeClass('on');
			} else {
				$('.lnb.accordion > ul > li').find('.active').parent('li').addClass('on').find('.acc-cont').slideDown(150).parent('li').siblings().removeClass('on').find('.acc-cont').slideUp(150);
			}


		});

		if ($(window).width() < 921) {
			$('.lnb .acc-cont').css('display', 'none').parent('li').removeClass('on');
		} 
	}



// ================================ 콘텐츠 ========================================================

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


	// 관광지 금주의 인기장소
	if ($('.best-tour').length) {
		const bestTour = $('.best-tour');
		const _target = $('.best-tour .swiper-wrapper');
		const tourList = bestTour.siblings('.contents').find('.detail-list > ul > li');
		const tourList_length = bestTour.siblings('.contents').find('.detail-list > ul > li').length;
		_target.html(tourList.eq(Math.floor(Math.random()*tourList_length)).addClass('swiper-slide'));
	}
	
	// 카페앤 디저트 오늘의 추천
	if ($('.detail-list.cafe').length) {
		const infoCafe = $('.detail-list.cafe > ul');
		const infoCafeList = infoCafe.children('li');

		infoCafe.empty().append(infoCafeList.eq(Math.floor(Math.random()*infoCafeList.length)));
		
	}


	// 와구주섬 목록/타이틀 연동
	if ($('.detail-list.product').length) {
		const productTab = $('.detail-list.product').closest('.tab-scroll').find('.btn-tab');

		// 탭 타이틀 텍스트 설정
		productTab.each(function() {
			const productTabTargetId = $(this).attr('aria-controls');
			const _target = $('#' + productTabTargetId);
			const _targetText = $(this).text();
			
			_target.find('.scroll-tab-tit').text(_targetText);
		});
			
		$.each(productList, function(index, productArray) {
			// 와구주섬 메인
			if ($('.tab-scroll.show').length) {
				const listTitle = $('.scroll-tab-tit').eq(index);
				const targetUl = listTitle.parent().siblings('.product').children('ul');
				targetUl.append(productArray[1]);
				
				const listSet = [targetUl.children().splice(1)];
				const randomList = [];

				$.each(listSet, function(index, li) {
					while(li.length > 4){
						const randomSet = li.splice(Math.floor(Math.random() * li.length))
						randomList.push(randomSet)
						targetUl.empty().append(randomSet);
					}
				});
			}

			// 상세패이지
			if ($('#page-title').text() == productList[index][0]) {
				$.each(productList[index][1], function(productArrayIndex, productArrayChild) {
					if ($('.scroll-tab-tit').eq(productArrayIndex).text() == productArrayChild[0]) {
						$('.scroll-tab-tit').eq(productArrayIndex).siblings('.product').children('ul').append(productArrayChild[1])
					} else {
						$('.product').children('ul').append(productArrayChild)
						console.log(productArrayChild[0])
					}

				});
			}

		});

		
		// 와구주섬 추천목록
		const recomList = $('.progress-wrap.product').find('.swiper-wrapper');
		
		recomList.append(productList.flat(Infinity))
		
		let targetList = recomList.children();
		targetList.sort(function() { return Math.random() - 0.5; });
		targetList.splice(Math.floor(Math.random() * targetList.length) ,30)
		recomList.empty();
		
		$.each(targetList, function(i, li) {
			recomList.append(li);
			recomList.find('li').slice(0,20).addClass('swiper-slide');
			recomList.find('li').slice(20,li.length).addClass('del');
			recomList.find('.del').remove();
		});



	}

	// 와구와구 목록 모달창
	if ($('.product .open-modal').length) {
		// 돋보기 아이폰 활성화
		$(document).on('mouseenter focus', '.product .detail-visual .visual', function () {
			$(this).addClass('hover')
			$(this).parents('.swiper-wrapper').css('z-index','11')
		})
		$(document).on('blur', '.product .detail-visual .visual.hover .open-modal', function () {
			$(this).parents('.visual').removeClass('hover')
			$(this).parents('.swiper-wrapper').css('z-index','1')
		})

		$(document).on('mouseleave', '.product .detail-visual .visual', function () {
			$(this).removeClass('hover')
			$(this).parents('.swiper-wrapper').css('z-index','1')
		})

		// 자세히보기 버튼 클릭 모달창 오픈
		$(document).on('click', '.product .open-modal', function() {
			const _targetBtn = $('.detail-list.product > ul').find('.open-modal');
			
			// 각 버튼 레이어 오픈 설정값 적용
			_targetBtn.each(function(index, ele) {
				$(ele).attr('aria-controls', 'layer_detail_' + index);
			});
			
			// 해당 레이어 id 설정
			const productModal = $('body').children('#layer_detail');
			productModal.attr('id',$(this).attr('aria-controls')).addClass('on');
			
			// 목록 이미지 모달로 복제
			const detailVisual = $(this).parents('.visual').children('img').clone();
			const cloneParent = productModal.find('.zoom-visual');
			cloneParent.html(detailVisual);
		});
		
		$(document).on('click', '[id^="layer_detail"] .close-layer', function() {
			$(this).parents('.layer-modal').attr('id','layer_detail').removeClass('on');
		})

	}


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
	
	






	// 총 건수 설정
	if ($('.list-control').length) {
		$('.list-control').each(function() {
			const list = $(this).siblings('.detail-list').children('ul').children('li');
			$(this).find('.num').text(list.length);
		});
	}








	// ================================ 정렬 ========================================================
		// 목록 (기본순 / 추천순 / 평점순)정렬 스크립트
		// 제어하려는 목록
		function appendList (myList, item) {
			$.each(item, function(i, li){
				myList.append(li);
			});
		}

		// 추천순 (평점 + 찜순)
		function setDetailListSortUp (myList, item) {
			item.sort(function(a,b){ 
				var keyA = Number($(a).find('.count').text()); // 작은숫자
				var keyB = Number($(b).find('.count').text()); // 큰숫자
				var keyC = Number($(a).find('.star').text().split(' ')[1]); // 작은숫자
				var keyD = Number($(b).find('.star').text().split(' ')[1]); // 큰숫자
				// console.log(keyB < keyA) // true
				// a가 아래 b 가 위
				if (keyB > keyA) return 1;
				if (keyB < keyA) return -1;
				if (keyD > keyC) return 1;
				if (keyD < keyC) return -1;
				return 0;
			});

			appendList(myList, item);
		}
		

		// 평점순
		function setDetailListSortStar (myList, item) {
			item.sort(function(a,b){ 
				var keyA = Number($(a).find('.star').text().split(' ')[1]); // 작은숫자
				var keyB = Number($(b).find('.star').text().split(' ')[1]); // 큰숫자
				// console.log(keyB < keyA) // true
				// a가 아래 b 가 위
				if (keyB > keyA) return 1;
				if (keyB < keyA) return -1;
				return 0;
			});

			appendList(myList, item);
		}
		
		// 기본정렬 저장 / 기본순 버튼 클릭시 노출
		const detailList = $('.detail-list');
		detailList.each(function() {
			const targetList = $(this).children('ul').children('li');
			$('.list-control .btn-layer.layer-default').on('click', function() {
				$.each(targetList, function(i, li){
					targetList.parent('ul').append(li);
				});
			});
		})


			
		// 목록 정렬 버튼
		$(document).on('click', '.list-control .btn-layer', function() {
			const setUl = $(this).parents('.list-control').siblings('.detail-list').children('ul');
			const detailListItem = setUl.children('li').get();
			// 버튼 효과
			$(this).addClass('active').attr('title','선택됨').siblings('.btn-layer').removeClass('active').removeAttr('title');
			
			// 추천순
			if ($(this).hasClass('layer-good')) setDetailListSortUp(setUl, detailListItem);
			// 평점순
			if ($(this).hasClass('layer-star')) setDetailListSortStar(setUl, detailListItem);
			
		});

		// 여행정보 메인화면 숙소정보 목록정렬
		if ($('.detail-list').hasClass('info-travel')) {
			const setUl = $('.detail-list.info-travel > ul');
			const setItem = $('.detail-list.info-travel > ul > li');
			setDetailListSortUp(setUl, setItem);
		}




// ================================ main ========================================================
		// 보노보노
		const targetBono = $('.main .bonobono');
		const targetBonoTxt = $('.main .bonobono .talk .txt');

		$(document).on('mouseenter', '.main .bonobono, .main .wrap-bono .info-link-travel a', function() {
			targetBono.addClass('on')
			targetBonoTxt.text(bonoTalk[Math.floor(Math.random() * bonoTalk.length)])
		})

		$(document).on('mouseleave', '.main .bonobono, .main .wrap-bono .info-link-travel a', function() {
			targetBono.removeClass('on')
		})






// ================================ swiper ========================================================
		// 메인 - 관광지
		const travelCollection = new Swiper('.travel-collection .swiper', {
			loop: true,
			speed : 600,
			simulateTouch : true,
			// slidesPerView: 3,
			spaceBetween:'24px',
			centeredSlides: true,
			autoplay: {
				delay: 3000,
				pauseOnMouseEnter : true,
			},
			breakpoints: {
					
				700: {
					slidesPerView: 2,
				},
			},
		});
		
		// 메인 - 카페
		const cafeCollection = new Swiper('.cafe-collection .swiper', {
			loop: true,
			speed : 600,
			simulateTouch : false,
			spaceBetween:'50px',
			centeredSlides: true,
			slidesPerView: 1,
			autoplay: {
				delay: 3000,
				pauseOnMouseEnter : true,
			},
			breakpoints: {
					
				950: {
					slidesPerView: 3,
				},
				// 700: {
				// 	slidesPerView: 2,
				// },
				500: {
					slidesPerView: 2,
				},
			},
		});




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
		const foodListSwiper = new Swiper('.food-main', {
			effect: 'fade',
			fadeEffect: { crossFade: true },
			loop: true,
			loopedSlides: 1,
			speed : 600,
			simulateTouch : true,
			autoplay: {
				delay: 3000,
				pauseOnMouseEnter : true,
			},
		});

		// 숙소정보 swiper
		const sleepListSwiper = new Swiper('.detail-list:not(.swiper, .no-swiper, .short) .detail-visual', {
			// loop: true,
			// loopedSlides: 1,
			speed : 600,
			watchOverflow: true,
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
		const travelSleepSwiper = new Swiper('.info-travel.detail-list.swiper', {
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
			slidesPerView: 1,
			spaceBetween:'20px',
			autoplay: {
				delay: 1000,
				pauseOnMouseEnter : true,
				disableOnInteraction: false,
			},
		});

		// 금주 인기장소 이미지 swiper
		const bestTourImgtSwiper = new Swiper('.best-tour .detail-visual', {
			// direction: 'vertical',
			loop: true,
			loopedSlides: 1,
			observer: true,
			observeParents: true,
			// effect: 'fade',
			speed : 600,
			simulateTouch : true,
			slidesPerView: 1,
			spaceBetween:'20px',
			autoplay: {
				delay: 1000,
				pauseOnMouseEnter : true,
			},
		});
		// 꼭먹어야할 메뉴 swiper
		const noticeMenuSwiper = new Swiper('.menu-swiper', {
			direction: 'vertical',
			loop: true,
			loopedSlides: 1,
			observer: true,
			observeParents: true,
			// effect: 'fade',
			speed : 600,
			simulateTouch : true,
			slidesPerView: 1,
			spaceBetween:'20px',
			autoplay: {
				delay: 1000,
				pauseOnMouseEnter : true,
			},
		});

		// 맛집추천 swiper
		const foodBestSwiper = new Swiper('.food.info-travel', {
			loop: true,
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

		// 와구주섬 추천목록 swiper
		const recommendSwiper = new Swiper('.progress-wrap > .product', {
			loop: true,
			speed : 600,
			slidesPerView: 'auto',
			// centeredSlides: false,
			// spaceBetween:'24px',
			// simulateTouch : true,
			// observer: true,
			// observeParents: true,
			pagination: {
				el: ".progress-wrap .product > .swiper-pagination",
				type: "progressbar",
			},
			// autoplay: {
			// 	enabled:true,
			// 	delay: 3000,
			// 	pauseOnMouseEnter : true,
			// },
		});

		// // 와구주섬  swiper
		const productSwiper = new Swiper('.product .detail-visual', {
			slidesPerView: 1,
			speed : 600,
			watchOverflow: true,
			pagination: {
				el: ".swiper-pagination",
			},
			autoplay: {
				enabled:true,
				delay: 3000,
				pauseOnMouseEnter : true,
			},
		});


});