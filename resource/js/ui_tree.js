const gnb = [
	`
		<div class="inner-wrap">
			<h1 class="logo"><a href="./main.html"><span class="sr-only">2025 간사이 여행</span></a></h1>
	
			<nav class="gnb">
				<ul>
				</ul>
			</nav>
	
			<button type="button" class="btn-allmenu"><span class="sr-only">전체메뉴 열기</span></button>
			<div class="allmenu">
				<div class="allmenu-list">
					<p class="tit">전체메뉴</p>
					<ul>
						<li>
							<a href="">여행 정보</a>
							<ul class="contents">
								<li><a href="">항공편 정보</a></li>
								<li><a href="">숙소 정보</a></li>
								<li><a href="">교통 정보</a></li>
								<li><a href="">여행 꿀팁</a></li>
							</ul>
						</li>
		
						<li>
							<a href="">여행지</a>
							<ul class="contents">
								<li><a href="">오사카</a></li>
								<li><a href="">나라</a></li>
								<li><a href="">교토</a></li>
								<li><a href="">이와지마</a></li>
								<li><a href="">고베</a></li>
								<li><a href="">한혐 식당 정보</a></li>
							</ul>
						</li>
		
						<li>
							<a href="">식당</a>
							<ul class="contents">
								<li><a href="">여행지별 식당</a></li>
								<li><a href="">카테고리별 식당</a></li>
							</ul>
						</li>
		
						<li>
							<a href="">카페 &amp; 디저트</a>
							<ul class="contents">
								<li><a href="">여행지별 카페</a></li>
							</ul>
						</li>
		
						<li>
							<a href="">이것 어떠세요옹</a>
							<ul class="contents">
								<li><a href="">약 &amp; 생활용품</a></li>
								<li><a href="">간식류</a></li>
								<li><a href="">아이스크림</a></li>
								<li><a href="">푸딩</a></li>
								<li><a href="">컵라면</a></li>
								<li><a href="">음료수</a></li>
								<li><a href="">술</a></li>
								<li><a href="">소스</a></li>
							</ul>
						</li>
					</ul>
	
					<button type="button" class="btn-allmenu-close"><span class="sr-only">전체메뉴 닫기</span></button>
				</div>
			</div>
		</div>
	`
]


const gnb_tree = [
	[
		'여행 정보', 
		'./여행정보.html', [
			'./여행정보_여행동선.html', 
			'./여행정보_항공편정보_예매정보.html', 
			'./여행정보_항공편정보_안내사항.html', 
			'./여행정보_숙소정보_추천목록.html', 
			'./여행정보_숙소정보_예매정보.html', 
			'./여행정보_예매정보_교통패스예매.html', 
			'./여행정보_예매정보_관광지티켓예매.html', 
			'./여행정보_여행꿀팁.html'
		]
	],

	[
		'관광지', 
		'./관광지.html', [
			'./관광지_관광지정보_지역별관광지.html', 
			'./관광지_관광지정보_카테고리별관광지.html', 
			'./관광지_여행동선_확정된관광지.html', 
			'./관광지_여행동선_동선정보.html'
		]
	],

	[
		'한끼 정보', 
		'./한끼정보.html', [
			'./한끼정보_맛집정보_추천맛집.html', 
			'./한끼정보_맛집정보_지역별맛집.html', 
			'./한끼정보_맛집정보_카테고리별맛집.html', 
			'./한끼정보_예약내역.html',
			'./한끼정보_한혐식당정보.html'
		]
	],

	[
		'카페 & 디저트', 
		'./카페디저트.html', [
			'./카페디저트_여행지별카페.html', 
		]
	],

	[
		'와구주섬', 
		'./와구주섬.html', [
			'./와구주섬_와구와구.html', 
			'./와구주섬_주섬주섬.html', 
			'./와구주섬_콸콸.html', 
			'./와구주섬_덕지덕지.html'
		]
	],

]


const lnb = [
	`
	<div class="lnb accordion">
		<ul>
			<li>
				<a href="" class="link"><span>여행 동선</span></a>
			</li>
			<li>
				<button type="button" class="btn-toggle"><span>항공편 정보</span></button>
				
				<ul class="acc-cont">
					<li><a href="" class="depth-3">예매 정보</a></li>
					<li><a href="" class="depth-3">안내사항</a></li>
				</ul>
			</li>

			<li>
				<button type="button" class="btn-toggle"><span>숙소 정보</span></button>
				
				<ul class="acc-cont">
					<li><a href="" class="depth-3">추천 목록</a></li>
					<li><a href="" class="depth-3">예매 정보</a></li>
				</ul>
			</li>

			<li>
				<button type="button" class="btn-toggle"><span>예매 정보</span></button>
				
				<ul class="acc-cont">
					<li><a href="" class="depth-3">교통패스 예매정보</a></li>
					<li><a href="" class="depth-3">관광지 티켓 예매정보</a></li>
				</ul>
			</li>

			<li>
				<a href="" class="link"><span>여행 꿀팁</span></a>
			</li>
		</ul>
	</div>
`,
`
	<div class="lnb accordion">
		<ul>
			<li>
				<button type="button" class="btn-toggle"><span>관광지 정보</span></button>
				
				<ul class="acc-cont">
					<li><a href="" class="depth-3">지역별 관광지</a></li>
					<li><a href="" class="depth-3">카테고리별 관광지</a></li>
				</ul>
			</li>

			<li>
				<button type="button" class="btn-toggle"><span>여행 동선</span></button>
				
				<ul class="acc-cont">
					<li><a href="" class="depth-3">확정된 관광지</a></li>
					<li><a href="" class="depth-3">동선 정보</a></li>
				</ul>
			</li>
		</ul>
	</div>

	
	<!-- notice visual -->
	<div class="notice-menu search">
		<p class="tit">알아봐야할 관광지</p>

		<div class="menu-swiper">
			<ul class="swiper-wrapper">
				<li class="swiper-slide">
					<p class="number">1</p>
					<p class="txt">기모노 체험</p>
				</li>

				<li class="swiper-slide">
					<p class="number">2</p>
					<p class="txt">집사카페</p>
				</li>

				<li class="swiper-slide">
					<p class="number">3</p>
					<p class="txt">넷카페</p>
				</li>

				<li class="swiper-slide">
					<p class="number">4</p>
					<p class="txt">밥0원 피시방</p>
				</li>
			</ul>
		</div>
	</div>
	<!-- // notice visual -->
`
,
`
	<div class="lnb accordion">
		<ul>
			<li>
				<button type="button" class="btn-toggle"><span>맛집 정보</span></button>
				
				<ul class="acc-cont">
					<li><a href="" class="depth-3">추천 맛집</a></li>
					<li><a href="" class="depth-3">지역별 맛집</a></li>
					<li><a href="" class="depth-3">카테고리별 맛집</a></li>
				</ul>
			</li>

			<li>
				<a href="" class="link"><span>예약 내역</span></a>
			</li>

			<li>
				<a href="" class="link"><span>한혐식당 정보</span></a>
			</li>
		</ul>
	</div>

	
	<!-- notice visual -->
	<div class="notice-menu">
		<p class="tit">꼭 먹어야할 메뉴</p>

		<div class="menu-swiper">
			<ul class="swiper-wrapper">
				<li class="swiper-slide">
					<p class="number">1</p>
					<p class="txt">대게회</p>
				</li>

				<li class="swiper-slide">
					<p class="number">2</p>
					<p class="txt">우설</p>
				</li>

				<li class="swiper-slide">
					<p class="number">3</p>
					<p class="txt">몬자야끼</p>
				</li>

				<li class="swiper-slide">
					<p class="number">4</p>
					<p class="txt">당고</p>
				</li>

				<li class="swiper-slide">
					<p class="number">5</p>
					<p class="txt">고베규</p>
				</li>

				<li class="swiper-slide">
					<p class="number">6</p>
					<p class="txt">라멘</p>
				</li>

				<li class="swiper-slide">
					<p class="number">7</p>
					<p class="txt">타코야끼</p>
				</li>
			</ul>
		</div>
	</div>
	<!-- // notice visual -->
`,

`
<div class="lnb accordion">
	<ul>
		<li>
			<a href="" class="link"><span>여행지별 카페</span></a>
		</li>
	</ul>
</div>


<!-- notice visual -->
<div class="notice-menu">
	<p class="tit">먹어봐야할 디저트</p>

	<div class="menu-swiper">
		<ul class="swiper-wrapper">
			<li class="swiper-slide">
				<p class="number">1</p>
				<p class="txt">초코바나나</p>
			</li>

			<li class="swiper-slide">
				<p class="number">2</p>
				<p class="txt">당고</p>
			</li>

			<li class="swiper-slide">
				<p class="number">3</p>
				<p class="txt">푸딩</p>
			</li>

			<li class="swiper-slide">
				<p class="number">4</p>
				<p class="txt">크로칸슈</p>
			</li>
		</ul>
	</div>
</div>
<!-- // notice visual -->
`,
`
<div class="lnb accordion">
<ul>
	<li>
		<a href="" class="link"><span>와구와구</span></a>
	</li>

	<li>
		<a href="" class="link"><span>주섬주섬</span></a>
	</li>

	<li>
		<a href="" class="link"><span>콸콸</span></a>
	</li>

	<li>
		<a href="" class="link"><span>덕지덕지</span></a>
	</li>
</ul>
</div>
`

]


const notice = [
	`
	<div class="swiper-wrapper">
		<div class="swiper-slide">
			<div class="notice">
				<p class="tit">공지사항 제목</p>
				<p class="txt">공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용</p>
			</div>
		</div>

		<div class="swiper-slide">
			<div class="notice">
				<p class="tit">공지사항 제목</p>
				<p class="txt">공지사항 내용</p>
			</div>
		</div>

		<div class="swiper-slide">
			<div class="notice">
				<p class="tit">공지사항 제목</p>
				<p class="txt">공지사항 내용</p>
			</div>
		</div>

		<div class="swiper-slide">
			<div class="notice">
				<p class="tit">공지사항 제목</p>
				<p class="txt">공지사항 내용</p>
			</div>
		</div>

	</div>
	`
]

// 2뎁스 내부 상단 예약내역 연동
const reserved_info = ['fly', 'sleep','pass', 'ticket']
const reserved_link = [
	'./여행정보_항공편정보_예매정보.html', 
	'./여행정보_숙소정보_예매정보.html', 
	'./여행정보_예매정보_교통패스예매.html', 
	'./여행정보_예매정보_관광지티켓예매.html'
]


const footer = [
	`
	<p>본 사이트는 상업적 목적으로 제작된 사이트가 아니며 내용 및 이미지 등의 저작권이 별도로 존재함을 알려드립니다.</p>
	<p class="copy">&copy; 2024 KIM SY. All Rights Reserved.</p>
	`
]


// 와구주섬 상세 모달 내용
const dataDetail = [
	[
		'시로이코이비토 (白い恋人)', 
		`
		<div class="wrap" tabindex="0">
			<p class="layer-tit">시로이코이비토 (白い恋人)</p>

			<div class="cont">
				<div class="zoom-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://i.namu.wiki/i/-bB818aF0cO5oq7YskLxupT8q113VPNIK4DPYkE56ipF-X6ReLD7fR83KzAGV3JVIcAUVagySSp5GuGhyZxVXoIeUOEHdN1p9mF-tS4OtN5Hf3QL5MvZH_fSpXcceU_qgnAoJ3tBu-AWkBgD9F1hug.webp" alt="白い恋人">
							</div>
						</div>
					</div>

					<div class="btn-arrow swiper-button-disabled swiper-button-prev"><span class="sr-only">이전으로</span></div>
					<div class="btn-arrow swiper-button-next"><span class="sr-only">다음으로</span></div>
				</div>

				<div class="txt-wrap">
					<p class="location">간사이 공항 면세점 판매</p>
					<p class="desc">훗카이도 각지의 대도시나 공항 기념품점 등에서만 판매하는 훗카이도 특산물 (공항 면세점에서 판매한다)</p>
					<p class="txt">* 사각형의 쿠키로 만든 샌드에 2~3mm 두께의 화이트 혹은 블랙 초콜릿을 바른 랑그드샤형 과자</p>
											
					<div class="accordion price">
						<ul>
							<li class="on">
								<button type="button" class="btn-toggle"><span>가격표 확인하기</span></button>
								<ul class="acc-cont ticket-info active">
									<li>
										<p class="tit">9개 (화이트 초콜릿)</p>
										<p class="txt">720엔</p>
									</li>
									<li>
										<p class="tit">12개 (화이트 초콜릿)</p>
										<p class="txt">960엔</p>
									</li>
									<li>
										<p class="tit">18개 (화이트 초콜릿)</p>
										<p class="txt">1,440엔</p>
									</li>
									<li>
										<p class="tit">24개 (화이트 초콜릿)</p>
										<p class="txt">1,920엔</p>
									</li>
									<li>
										<p class="tit">24개 (화이트 & 블랙 초콜릿)</p>
										<p class="txt">1,920엔</p>
									</li>
									<li>
										<p class="tit">36개 (화이트 & 블랙 초콜릿)</p>
										<p class="txt">3,200엔</p>
									</li>
									<li>
										<p class="tit">54개 (화이트 & 블랙 초콜릿)</p>
										<p class="txt">4,800엔
										</p>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<button type="button" class="btn-close-modal close-layer"><span class="sr-only">레이어 닫기</span></button>
		</div>
		`
	],
]