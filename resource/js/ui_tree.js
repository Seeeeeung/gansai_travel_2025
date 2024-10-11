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
			'./한끼정보_예약정보.html',
			'./한끼정보_한혐식당정보.html'
		]
	],

	[
		'카페 &amp; 디저트', 
		'./관광지.html', [
			'./관광지_관광지정보_지역별관광지.html', 
			'./관광지_관광지정보_카테고리별관광지.html', 
			'./관광지_여행동선_확정된관광지.html', 
			'./관광지_여행동선_동선정보.html'
		]
	],

	[
		'이것 어떠세요옹', 
		'./관광지.html', [
			'./관광지_관광지정보_지역별관광지.html', 
			'./관광지_관광지정보_카테고리별관광지.html', 
			'./관광지_여행동선_확정된관광지.html', 
			'./관광지_여행동선_동선정보.html'
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
			<!-- 
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
			-->
		</ul>
	</div>
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
`
,

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