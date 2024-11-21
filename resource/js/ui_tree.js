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

const btnTop = [
	`
	<div class="fixed-wrap">
		<button type="button" title="상단으로 이동" class="btn-top">TOP</button>
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


// 와구주섬 리스트
const productList = [
	['와구와구', 
		[
			[
				'과자', [
					`
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://i.namu.wiki/i/-bB818aF0cO5oq7YskLxupT8q113VPNIK4DPYkE56ipF-X6ReLD7fR83KzAGV3JVIcAUVagySSp5GuGhyZxVXoIeUOEHdN1p9mF-tS4OtN5Hf3QL5MvZH_fSpXcceU_qgnAoJ3tBu-AWkBgD9F1hug.webp" alt="白い恋人">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">시로이코이비토 (白い恋人)</p>
							
							<p class="location">간사이 공항 면세점 판매</p>
							<p class="txt">* 쿠키샌드에 화이트 혹은 블랙 초콜릿바른 랑그드샤형 과자</p>
							<p class="price">720엔 ~ 4,800엔</p>
							<p class="coment">선물용으로 좋아보임</p>
						</div>
					</li>
					
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://img.croket.co.kr/item/thumbnail/b6eaf973b000b2073e1f0424717bd82a.webp" alt="슈가버터샌드트리 기본맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://sitem.ssgcdn.com/64/70/21/item/1000526217064_i1_750.jpg" alt="슈가버터샌드트리 사과맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://sitem.ssgcdn.com/72/69/70/item/1000272706972_i1_750.jpg" alt="슈가버터샌드트리 선물용">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">슈가버터샌드트리 3개입</p>
							
							<p class="location">세븐일레븐 / 오사카 한큐백화점(선물용 3가지맛)</p>
							<p class="txt">* 웨하스같은 쿠키에 두툼한 크림이 샌드된 과자</p>
							<p class="price">예상 200엔 ~ 300엔<br>선물용 3,000엔</p>
							<p class="coment">편의점은 3개입 별도포장</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://japantomo.com/data/editor/2009/f181c2ad232b0ea4b2cae3aaab680be3_1599721626_6583.png" alt="부르봉 쿠키 4종">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://japantomo.com/data/editor/2009/f181c2ad232b0ea4b2cae3aaab680be3_1599721684_2026.png" alt="부르봉 쿠키">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">부르봉 쿠키</p>
							
							<p class="location">마트 (대형마트가 제일 저렴)</p>
							<p class="txt">* 겹겹의 바삭한 크레이프 쿠키를 초콜릿으로 코딩한 쿠키</p>
							<p class="price">예상 200엔 ~ 250엔</p>
							<p class="coment">보라색이 제일 대중적 / 선물용으로 좋을듯</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://sitem.ssgcdn.com/23/77/45/item/1000563457723_i1_750.jpg" alt="샤샤 초콜릿 초코">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://sitem.ssgcdn.com/78/10/69/item/1000556691078_i1_750.jpg" alt="샤샤 초콜릿 녹차">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://image.croket.co.kr/storeItem/63242d6a471a8cfc68843903/itemImg/1663315307194/0/item_2EXfC.jpeg" alt="샤샤 초콜릿 딸기">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">샤샤 초콜릿</p>
							
							<p class="location">편의점, 마트</p>
							<p class="txt">* 여러겹으로 겹쳐서 만든 초콜릿</p>
							<p class="price">248엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://gw.alicdn.com/imgextra/i3/845908271/O1CN01B22wj42AyATovXsgM_!!0-item_pic.jpg_540x540q90.jpg" alt="치즈아몬드 센베이 3종">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5213673552/B.jpg?901000000" alt="치즈아몬드 센베이">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">산코제과 치즈아몬드 센베이</p>
							
							<p class="location">편의점</p>
							<p class="txt">* 크래커에 치즈아몬드를 올린 일본 쌀과자</p>
							<p class="price">280엔</p>
							<p class="coment">술안주로 먹어도 좋은 크래커</p>
						</div>
					</li>


					<li class="best">
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/MjAyMzEyMjBfMjc0/MDAxNzAzMDU1NjM4MzEw.pMCIfRv1nanSaGzRzh0-CFWD6XceP5wdog5zXMXAmI4g.ataOfzvFuGRnttJ0pIb8zJ6sixzmkPq5ziGS6jG9hTMg.JPEG.zmfpdyd1004/SE-d4a89248-054e-4371-b510-085754d5f3c8.jpg?type=w800" alt="모리가나 크림치즈 쿠키">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">모리가나 크림치즈 쿠키</p>
							
							<p class="location">돈키호테</p>
							<p class="txt">* 바삭하고 가벼운 식감의 구운 초콜릿 속에 입에서 녹을것 같은 진한 치즈쿠키</p>
							<p class="price">159엔</p>
							<p class="coment">치즈타르트로 유명한 "베이크"의 제품이다 / 구매하기 어려우니 보이면 꼭 쟁이세요</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/MjAxNzAxMTBfMTQ4/MDAxNDg0MDI0NjA5OTE1.xyHhcFhT3rBRnxvyN9_wJBsIRfaQzxzRx5Y7mil8QkMg.o_duCwXTWAMzoozHB6mQi8mZn3BUoKkcwaHXcT93AOsg.JPEG.blick3636/TR_170104_CARAMELISER_01.jpg?type=w420" alt="카라메리제 와플 쿠키">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/MjAxNzAxMTBfNzIg/MDAxNDg0MDI0NjEwOTky.oHeoYdHH-gsVU-J6E8HGf2lM5t-mjCWls-LiS3D2jPwg.PeOKAx9X9ZIuDasEPoIjpeui56ELr0ZAV3Qai_I2wBEg.JPEG.blick3636/TR_170104_CARAMELISER_05.jpg?type=w420" alt="카라메리제 와플 쿠키">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">카라메리제 와플 쿠키</p>
							
							<p class="location">면세점에서 판매 (도쿄제품이라 안팔수도)</p>
							<p class="txt">* 달고나맛 코팅이 되어있는 와플모양 쿠키</p>
							<p class="price">?엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://contents.lotteon.com/itemimage/20240121213117/LO/22/49/04/60/70/_2/24/90/46/07/1/LO2249046070_2249046071_1.png" alt="아이보리쉬 빵모양 쿠키">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">아이보리쉬 빵모양 쿠키</p>
							
							<p class="location">면세점</p>
							<p class="txt">* 빵모양의 쿠키 / 정보 많이 없음</p>
							<p class="price">?엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5883139494/B.png?388000000" alt="가루비 피자포테이토">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">가루비 피자포테이토</p>
							
							<p class="location">드럭스토어, 돈키호테, 편의점</p>
							<p class="txt">* 피자맛 포테이토칩</p>
							<p class="price">? 엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://d2gfz7wkiigkmv.cloudfront.net/pickin/2/1/2/8R595Cd4SDSdAQEboJkutw" alt="토하토 아미자가 소금맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://japantomo.com/data/editor/2408/d3ebf20fa711c25f6f45ebdbd2131ab3_1724293166_7165.jpg" alt="토하토 아미자가 2종">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">토하토 아미자가</p>
							
							<p class="location">?</p>
							<p class="txt">* 신기한 모양의 과자</p>
							<p class="price">? 엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://img.croket.co.kr/item/thumbnail/b3e3a347135d4a95fd6e1875c957b675.webp" alt="가루비 카타아게 포테토 블랙페퍼맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">가루비 카타아게 포테토 블랙페퍼맛</p>
							
							<p class="location">드럭스토어, 돈키호테, 편의점</p>
							<p class="txt">* 후추맛 포테이포칩</p>
							<p class="price">323엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://image.isy.co.kr/products/nv/2000000283/1_18.jpg" alt="롯데 파이노미">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://www.news1.kr/_next/image?url=https%3A%2F%2Fi3n.news1.kr%2Fsystem%2Fphotos%2F2024%2F10%2F25%2F6948922%2Fhigh.jpg&w=1920&q=75" alt="롯데 파이노미">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">롯데 파이노미</p>
							
							<p class="location">마트, 편의점 등</p>
							<p class="txt">* 홈런볼 같은 패스튜리 쿠키</p>
							<p class="price">168엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://m.tanaka-shop.net/web/product/extra/big/202311/e25c262c59dd433f86f0bcca206bcc7c.jpg" alt="블랙썬더 초콜릿바">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">블랙썬더 (여러가지맛)</p>
							
							<p class="location">마트, 돈키호테, 세븐일레븐</p>
							<p class="txt">* 코코아쿠키에 초콜릿으로 코딩된 비스킷(과자)</p>
							<p class="price">250 ~ 300엔</p>
							<p class="coment">미니미한게 선물용으로 좋을듯</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://image.croket.co.kr/storeItem/60e293fac289ed69f47c8c17/itemImg/1625461755813/0/item_KNWXW.jpeg" alt="알포트 6종">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://www.wishbucket.io/_next/image?url=https%3A%2F%2Fd2gfz7wkiigkmv.cloudfront.net%2Fpickin%2F2%2F1%2F2%2F3cY_ETLUTDGfqHl3GZw0_g&w=1080&q=75" alt="알포트 밤 초콜릿">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">알포트</p>
							
							<p class="location">드럭스토어, 돈키호테, 편의점</p>
							<p class="txt">* 빈츠같이 초콜릿으로 덮힌 비스킷</p>
							<p class="price">98엔</p>
							<p class="coment">밤맛이 먹어보고싶네요</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://coudae.s3.ap-northeast-2.amazonaws.com/A01044006/product/B0CXHRL9V3/970L1500_.jpg" alt="가나 초콜릿 휩(밀크바닐라)">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">프리미엄 가나 초콜릿휩</p>
							
							<p class="location">편의점</p>
							<p class="txt">* 프리미엄 초콜릿 안에 크리미한 초콜릿이 들어있는 가나 초콜릿</p>
							<p class="price">238엔</p>
							<p class="coment">비슷하게 생긴거 보면 구매하기 / 맛있다함~</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://japandrug.jp/cdn/shop/files/1_39f49a03-51e8-4015-8083-1bbd72cf7ce0.jpg?v=1700798611" alt="메이지 가르보 초콜릿 2종">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">메이지 가르보 초콜릿</p>
							
							<p class="location">드럭스토어, 돈키호테, 편의점</p>
							<p class="txt">* 초코쿠키 겉에 맛별 초콜릿이 감싸져있는 간식</p>
							<p class="price">180엔</p>
							<p class="coment">이거 맛잇쩡</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://japantomo.com/data/editor/1711/58ca32bbc810da835ee3b84f4e6912ad_1509944982_1259.png" alt="카라무초 핫칠리맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://barleymoll.com/data/item/1607311700/5002.jpg" alt="카라무초 스틱 핫칠리맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">카라무초</p>

							<p class="location">마트, 편의점</p>
							<p class="txt">* 스윙칩 상위호환버전? 감자칩</p>
							<p class="price">127엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://m.baribari.kr/web/product/big/20200427/d1d13ca2ef33c1ded05e7afca2e68a61.jpg" alt="쟈가리코 샐러드맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">쟈가리코 샐러드맛</p>

							<p class="location">편의점, 돈키호테 등</p>
							<p class="txt">* 짭짤한 감자스틱</p>
							<p class="price">128엔</p>
							<p class="coment">쟈가리코 과자 실패없지비!</p>
						</div>
					</li>
					`
				]
			],
			[
				'빵 · 케이크', [
					`
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://img.croket.co.kr/item/thumbnail/19e4adf22a809cbc504ae626e2320694.webp" alt="진한 가토 쇼콜라 4개입">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://img1.tmon.kr/cdn4/deals/2024/04/08/26284904906/front_e723c_oxo7g.jpg" alt="우지말차 가토 쇼콜라 4개입">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">진한 가토 쇼콜라 4개입</p>
							
							<p class="location">세븐일레븐</p>
							<p class="txt">* 달지않고 물리지않는 깔끔한 초코맛 디저트</p>
							<p class="price">예상 300엔 ~ 500엔</p>
							<p class="coment">녹차맛도 있나봄</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://cdn-ak.f.st-hatena.com/images/fotolife/d/duckcar/20230117/20230117203000.jpg" alt="모찌촉감롤 초코맛">
				
										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>
				
										</div>
				
									</div>
								</div>
				
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://blog.kakaocdn.net/dn/cqadbK/btr9mgHCjSY/9LmMyrdneUeirOrtCQOQV0/img.jpg" alt="모찌촉감롤 밀크크림맛">
				
										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>
				
										</div>
				
									</div>
								</div>
				
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://blog.kakaocdn.net/dn/Immkf/btr9nnMTXq3/K8uu3JcD44k2i1kXAeU29K/img.jpg" alt="모찌촉감롤 호두맛">
				
										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>
				
										</div>
				
									</div>
								</div>
				
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://blog.kakaocdn.net/dn/6WBEX/btr9nm8iTUA/WyCmKN9kneUPx1nZBKKooK/img.jpg" alt="모찌촉감롤 딸기맛">
				
										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>
				
										</div>
				
									</div>
								</div>
							</div>
				
							<div class="swiper-pagination"></div>
						</div>
			
						<div class="txt-wrap">
							<p class="name">모찌촉감 롤(모찌롤) もち食感ロール</p>
							
							<p class="location">로손편의점</p>
							<p class="txt">* 떡같은 식감에 여러가지 맛 크림을 넣은 롤케이크</p>
							<p class="price">397엔</p>
							<p class="coment">여러가지 맛이있다.</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSwlmUzt6h2sWwKrh06Z3kJbwSOySfUmSug&s" alt="모찌 뿌요">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://blog.kakaocdn.net/dn/bTvqB6/btsJonDlhss/G3SyO0apyQBKYP98tYHrA1/img.png" alt="모찌 뿌요 컷팅">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">모찌 뿌요 (もちぷよ)</p>
							
							<p class="location">로숀편의점</p>
							<p class="txt">* 떡같은 찰기가 느껴지는 빵안에 묽은 크림을 넣은 디저트</p>
							<p class="price">108엔</p>
							<p class="coment">차가울때 먹는게 제일 맛있다고한다.</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://iemone.jp/iemone-cms/wp-content/uploads/2021/06/202680-02.jpg" alt="못찌리 크레이프">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://pbs.twimg.com/media/FhAJ8J1aAAAEd9F.jpg:large" alt="못찌리 크레이프 단면">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">못찌리 크레이프 (もっちりクレープ)</p>
							
							<p class="location">로숀편의점</p>
							<p class="txt">* 크레이프 안에 우유생크림과 가나슈 초코크림이 들어간 디저트</p>
							<p class="price">160엔</p>
						</div>
					</li>

					
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/MjAyNDA3MTlfNjAg/MDAxNzIxMzc5NjU5MTc5.6QzlaFEtghbe076YL-VFXgGASQJePugBB4sOdV3YA2Eg.JnVH6i1KBM23d3JTDyYFLFrJVXqh8_RpL6E8BQx8CQYg.JPEG/%EC%9D%BC%EB%B3%B8_%ED%8E%B8%EC%9D%98%EC%A0%90-032.jpg?type=w800" alt="트윈 슈">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://favehey.com/wp-content/uploads/2023/08/%EC%9D%BC%EB%B3%B8%ED%8E%B8%EC%9D%98%EC%A0%90.jpg" alt="트윈 단면">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">트윈 크림 슈</p>
							
							<p class="location">로숀편의점</p>
							<p class="txt">* 생크림과 슈크림이 같이 들어있는 슈</p>
							<p class="price">197엔</p>
							<p class="coment">사자마자 먹어야 빵이 더 맛있다고 한다.</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://newsatcl-pctr.c.yimg.jp/dk/expert-image/moka/article/00410024/top_1677805777720.jpeg?exp=10800" alt="베이크드 커스터드 크림 타르트">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://stat.ameba.jp/user_images/20230302/12/junskynet/df/04/p/o0900090015249947005.png" alt="베이크드 커스터드 크림 타르트 단면">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">베이크드 커스터드 크림 타르트</p>
							
							<p class="location">로숀편의점</p>
							<p class="txt">* 바삭한 타르트지와 단단하지만 부드러운 커스터드 크림</p>
							<p class="price">225엔</p>
						</div>
					</li>
					`
				]
			],
			[
				'푸딩', [
					`
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://blog.kakaocdn.net/dn/bazOp4/btsGYSFXCZ0/6FkjMgrwT7gWqhm3dFtYUk/img.jpg" alt="루나 바닐라 요구르트">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/MjAyMzAzMDZfMjA2/MDAxNjc4MTAxNDg1Njky.zWzieLx25tQxp1OBrTeFFTf9qThCXiW0tpP3ddYZmPIg.w8lNvqAlhOu-HI5lFxf2hTbeQxmXlkBsW7qX37Po4gQg.JPEG.lja1327/IMG_7091.jpg?type=w800" alt="루나 바닐라 요구르트 상세샷">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">루나 바닐라 요구르트 푸딩</p>

							<p class="location">편의점에 잘 없고 마트에 조금 있음</p>
							<p class="txt">* 새콤한 향 + 은은한 바닐라향의 요거트맛</p>
							<p class="price">102엔</p>
							<p class="coment">조금 단단한 요구르트(푸딩까진 아닌듯)</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/MjAyMDA5MzBfMTY4/MDAxNjAxNDU2Mzc5MzMw.eNK3VDVLYGimcYVp1k6RO1urA3F2hJ17C0oYOXfxxfcg.e4DmoXIID1QwMh5zRvrdiZ8fMy_sECllEsJM_EmKSdUg.JPEG.kireina34/output_3315521724.jpg?type=w800" alt="후와슈와 수플레 푸링">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">후와슈와 수플레 푸링</p>

							<p class="location">패밀리마트</p>
							<p class="txt">* 수플레케이크와 크림이 올라간 푸딩</p>
							<p class="price">298엔</p>
							<p class="coment">츄벨ㄹㄹㄹ릅</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://cdn.011st.com/11dims/resize/2000x2000/quality/75/11src/product/6550394357/B.jpg?173000000" alt="야키푸딩">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">야키푸딩</p>

							<p class="location">편의점, 마트</p>
							<p class="txt">* 표면을 살짝 구운 야끼 캐러멜 푸딩</p>
							<p class="price">139 엔</p>
							<p class="coment">아래 캐러멜 시럽과 섞어 먹으면 맛남</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/MjAyMzAxMjhfNDUg/MDAxNjc0ODgxNTk2ODcy.Etf-2ZRKZUoMzHBjdlw-QVolqFEmpzpSc5lHUB98pzQg.-t4AkZ5xQ2A6iR-_SYN_HF9NrWPBBgdfZj4CNX3ZZc0g.JPEG.wonhyangiii/IMG_3853.JPG?type=w800" alt="코히제리">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://blog.kakaocdn.net/dn/Mvmcn/btr5ORqZA6i/OhB3IlvbxdyuykpNzpRGrK/img.jpg" alt="코히제리">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">코히제리</p>

							<p class="location">편의점, 마트 등</p>
							<p class="txt">* 달지않은 커피젤리 위에 구성품인 연유/아이스크림/생크림을 곁들이면 극락! 섞지말고 그대로 드세용</p>
							<p class="price">110엔</p>
							<p class="coment">커피젤리만 먹으면 단맛이없으니 꼭 첨가해주세요잉</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/0db2/7ac7ce0d04546b869e0e673f073cfdd02872bc98a529b957554df34918dd.jpg" alt="쟈지밀크 푸딩">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">쟈지밀크 푸딩</p>

							<p class="location">편의점, 마트 등</p>
							<p class="txt">* 사르르 녹는 우유맛 푸딩</p>
							<p class="price">170엔</p>
							<p class="coment">과연 한국제품과의 차이는 ?</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://cdn.shopify.com/s/files/1/0601/7200/9692/files/6_e238b39a-f6bd-46a7-8661-d1cac7530abb_480x480.jpg?v=1651471583" alt="카마다시 토로케루 푸딩">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2019/20190515/1b9ceb9a89c6ab0aef290bc148b22b8c.jpg" alt="카마다시 토로케루 푸딩">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">카마다시 토로케루 푸딩</p>

							<p class="location">패밀리 마트</p>
							<p class="txt">* 계란과 생크림을 아낌없이 사용해서 만든 진하고 크리미한 푸딩</p>
							<p class="price">189엔</p>
							<p class="coment">유투버의 추천</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2023/07/30/VbQJ/tFlvaTSs04.jpeg?quality=70.0&width=1080" alt="나메라카 푸딩">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">나메라카 푸딩</p>

							<p class="location">세븐일레븐</p>
							<p class="txt">* 달콤하고 부드러운 우유와 커드터드 맛 푸딩</p>
							<p class="price">155엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMjJfMTAg%2FMDAxNjQyODA5MDg0NjIy.oU-P10QrVEfjiMe2qOjNM_0l9KRYz4eWNIkPG3UH12cg.oIlspMzeDkWORHjeH2XqXemxG-w5-2Q03MDmJiYD8Ukg.JPEG.fpsks1004%2Foutput_1911917891.jpg&type=sc960_832" alt="코다와리 키와미 푸딩">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160422_7%2Fchuri0321_1461289963957yD81C_JPEG%2FSAM_0001.JPG&type=sc960_832" alt="코다와리 키와미 푸딩 말차">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">코다와리 키와미 푸딩</p>

							<p class="location">마트, 편의점</p>
							<p class="txt">* 부드럽지만 탄탄한 푸딩 밑엔 시럽이 있어요!</p>
							<p class="price">93엔</p>
							<p class="coment">초코, 바닐라, 녹차 등 여러가지 맛이 있다</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://dategom.com/wp-content/uploads/2023/10/OHAYO-%EC%8B%A0%EC%84%A0%EB%9E%80-%EB%85%B8%EB%A6%87%ED%95%98%EA%B2%8C-%EA%B5%AC%EC%9A%B4-%ED%91%B8%EB%94%A9.jpg" alt="오하요 신선란 푸딩">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">오하요 신선란 푸딩</p>

							<p class="location">편의점, 마트</p>
							<p class="txt">* 신선한 게란맛이 듬뿍 나는 커스터드 푸딩 / 차게해서 드세요</p>
							<p class="price">140엔</p>
						</div>
					</li>
					`
				]
			],
			[
				'아이스크림', [
					`
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://newsatcl-pctr.c.yimg.jp/dk/expert-image/shingekinogourmet/article/00418055/internal_1678692072654.jpeg?fill=1&fc=fff&exp=10800" alt="소우아이스크림 메론소다후루토맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/20140521_280/mimityan1_1400670839746V1GBK_JPEG/251154_615.jpg?type=w420" alt="소우아이스크림 망고파인맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">爽 (소우) 아이스크림</p>
							
							<p class="location">패밀리마트</p>
							<p class="txt">* 여러가지맛을 판매중인 "와" 같은 아이스크림</p>
							<p class="price">126엔</p>
							<p class="coment">단종된맛이 꽤 많습니다</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://pbs.twimg.com/media/FA3FVdjVkAECXTI.jpg" alt="아이스 노미 포도 망고 복숭아">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPqmOkMfMg3J9uRQlY-rj7YE4ISFFrRCDxgSWRJsdb_FCNZk-X6QkkNJxlAsQ4uoBQgQ&usqp=CAU" alt="아이스노미 키위 복숭아">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbCssJu6wipRUL7yH8jCNa5UyjgBut8Rcpw&s" alt="아이스노미 녹차">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">아이스 노미 아이스크림</p>
							
							<p class="location">편의점</p>
							<p class="txt">* 여러가지 과일맛 아이스노미 아이스크림</p>
							<p class="price">173엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://pbs.twimg.com/media/D6G1iyuUEAAXrMy.jpg" alt="이타초코 아이스크림 민초">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/MjAyMzEwMTRfMzEg/MDAxNjk3MjExNTYxMDI5.4wHwF7x_qgt-utY6GD5JffQYHf9I9ta8VtBmhcXDLd4g.kXPyvRZR6yBtYYYaoZ2GBqqfRYC7j30dQ4cCxhrbsbog.JPEG.whiteswps/IMG_2764.jpg?type=w800" alt="이타초코 아이스크림 초코">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MjZfMTIg%2FMDAxNzI0NjIxNzU0ODk4.PSX6Yl9jwNiZMRqtRYrQfR8o9AnMixN4_0s4dHgZ96sg.2cbIzPzrATKHMh1QEeydSP3_-YyRUJLcdmc92zoaX60g.JPEG%2FIMG_9005.JPG&type=sc960_832" alt="이타초코 아이스크림 푸딩">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">이타초코 아이스</p>
							
							<p class="location">편의점</p>
							<p class="txt">* 바삭한 초콜릿 안에 아이스크림이 가득</p>
							<p class="price">161엔</p>
							<p class="coment">계절별로 나오는 한정판 맛이 존재한다고 한다</p>
						</div>
					</li>

					
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/MjAyMzA0MTdfMjg2/MDAxNjgxNzMxMTg5MDE5.E2s97-OwnDZqrE7s5gdyYvYR5oQSVuhNx8DTX1DqDa8g.7COLCoEsA04rAttc31Rg42PTrCXPUEcI_nD82QO0H_Ug.JPEG.kireina34/SE-26630894-BE5F-485D-8ABD-974FCEC19D3C.jpg?type=w800" alt="오하요 브렐레 아이스크림 초코">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://d2uja84sd90jmv.cloudfront.net/posts/AludcXOuXa7gaAL-tNTx0A/ms.jpg" alt="오하요 브렐레 아이스크림 바닐라">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://blog.kakaocdn.net/dn/YoIAk/btsIlm1HAhq/asWQFEeb3y2n7weHqngRZK/img.jpg" alt="오하요 브렐레 아이스크림 바닐라 실물">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">오하요 브렐레 아이스크림</p>
							
							<p class="location">로숀, 세븐일레븐</p>
							<p class="txt">* 바삭한 설탕코팅 아래로 홋카이돗산 우유를 사용한 아이스크림</p>
							<p class="price">338엔</p>
							<p class="coment">구매시 스푼 별도로 제공(안주면 달라해야함)</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mkmon.com/cdn/shop/articles/1692944358319.jpg?v=1692944359" alt="하겐다즈 하나모찌 인절미">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/MjAxODAzMTRfMjYz/MDAxNTIwOTgxNzQ0MzUy.W-7mEwygJy40RkT3e7mxUbHAAS_poaWPJeXa9yLqTHcg.8LKmlrq6L0eaReewA4CpYy1QClP6yJNN-dvJmxm4OLMg.JPEG.gami1023/20180307_113557.jpg?type=w800" alt="하겐다즈 하나모찌 벚꽃">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">하겐다즈 하나모찌</p>
							
							<p class="location">편의점 또는 마트나 백화점</p>
							<p class="txt">* 하겐다즈 아이스크림에 토핑과 떡을 올린 디저트</p>
							<p class="price">288엔</p>
							<p class="coment">판매점이 적어서 눈에 보이면 살것</p>
						</div>
					</li>

					

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZGtgR0eWlt8_Hjeo0BKUpjilUjShFmBW9A&s" alt="피노 꿀고구마맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/MjAyNDAyMTdfMjkx/MDAxNzA4MTQyNTEwMDEy.6M5ueGf-uLNhRMYAdkzAOzoeArkaOaR3rzt1FUXQYuYg.MMKAIIp0Gt5giVXF_lMjkYaRe8XR3wpG8dsOWqgJk7Ug.JPEG.jane1994kr/output_521272661.jpg?type=w800" alt="피노 꿀고구마맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">피노 아이스크림 꿀고구마맛</p>
							
							<p class="location">편의점</p>
							<p class="txt">* 고구마페이스트를 사용한 고구마아이스크림에 캐러멜 풍미의 토핑을 섞은 고구마맛의 초콜릿으로 코딩한 아이스크림</p>
							<p class="price">200엔</p>
							<p class="coment">한정판이라 판매종료했을 수 있음</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABOQdE05vLmYEe1ZEynx2GoInufKQTzVxJw&s" alt="히토쿠치 카누레 아이스">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://pbs.twimg.com/media/GHgFpvIbsAALW-R.jpg" alt="히토쿠치 카누레 아이스 단면">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">히토쿠치 카누레 아이스</p>
							
							<p class="location">세븐일레븐</p>
							<p class="txt">* 까눌레모양 한입 아이스크림</p>
							<p class="price">? 엔</p>
						</div>
					</li>

					<li class="best">
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jtuZmETg1aP4zAlQKCIB7vbDoqFjonMfNQ&s" alt="생초콜릿 아이스크림">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://mblogthumb-phinf.pstatic.net/MjAyMzEwMTVfMTI0/MDAxNjk3MzQ0MDgxMDE2.XQSuD0WWxJuvy0oyhsLnVsICPzhiq3wSVzlGyar5Of4g.A-VZ0iTopr7MAlvBco31Q8b_SyONxuGMdNVHcLsunxYg.JPEG.hhjhhj9964/20231006%EF%BC%BF003708.jpg?type=w800" alt="생초콜릿 아이스크림">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">탯뿌리 생초코 아이스</p>
							
							<p class="location">세븐일레븐</p>
							<p class="txt">* 생초코의 부드러운 부분이 아이스크림이 되어 극락</p>
							<p class="price">300엔</p>
							<p class="coment">개맛있겠다 이건 꼭 먹어야함</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://www.morinaga.co.jp/jumbo/kr/assets/img/item/item_01_01.png" alt="초코모나카 아이스">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://d28dpoj42hxr8c.cloudfront.net/files/user/201608062107_6.jpg?v=1470485237" alt="초코모나카 아이스 단면">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">초코모나카 아이스</p>
							
							<p class="location">편의점</p>
							<p class="txt">* 초콜릿을 감싼 아이스크림을 감싼 모나카</p>
							<p class="price">173엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://d28dpoj42hxr8c.cloudfront.net/files/user/201608062107_1.jpg?v=1470485237" alt="야와모찌 아이스 3종">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">야와모찌 아이스</p>
							
							<p class="location">드럭스토어, 돈키호테, 편의점</p>
							<p class="txt">* 맛별로 다른 시럽과 5개의 모찌가 올라가있는 아이스크림</p>
							<p class="price">100 ~ 130엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://storage.googleapis.com/ikidane/upload/smi_b193b0eae1/smi_b193b0eae1.jpg" alt="아이스와플콘 말차">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">아이스와플콘 말차</p>
							
							<p class="location">세븐일레븐</p>
							<p class="txt">* 한정판 와플콘 녹차 아이스크림</p>
							<p class="price">248엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://www.foodnews.news/data/photos/20220833/art_16607967384457_e7c8e5.jpg" alt="갈아만드는 과일 스무디">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2022/09/04/20220904000095_0.jpg" alt="갈아만드는 과일 스무디">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name"><a href="" target="_blank" title="새창에서 열기">갈아만드는 과일 스무디</a></p>

							<p class="location">세븐일레븐</p>
							<p class="txt">* 냉동과일을 직접 갈아먹을수 있는 스무디</p>
							<p class="price">278엔</p>
							<p class="coment">스무디 작동법은 상세페이지 참고</p>
						</div>
					</li>
					`
				]
			],
			[
				'젤리 · 캔디', [
					`
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://s3-ap-northeast-1.amazonaws.com/img.yic.co.kr/goodsDesc/goodsDesc_2022021016384316444787238201.jpg" alt="칼피스 모찌">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">칼피스 모찌</p>
							
							<p class="location">편의점이나 드럭스토어 또는 돈키호테</p>
							<p class="txt">* 칼피스크림이 들어있는 요구르트맛 젤리</p>
							<p class="coment">살짝얼려먹으면 더 맛있다함</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://d2gfz7wkiigkmv.cloudfront.net/pickin/2/1/2/K5VAwdM9QC-Rxn9DM1RMeg" alt="부르봉 페투치네 5종">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5689813820/B.jpg?370000000" alt="부르봉 페투치네 포도맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">부르봉 페투치네 젤리</p>
							
							<p class="location">편의점. 돈키호테 등</p>
							<p class="txt">* 페투치네 면처럼 생긴 젤리</p>
							<p class="price">100엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://www.wishbucket.io/_next/image?url=https%3A%2F%2Fd2gfz7wkiigkmv.cloudfront.net%2Fpickin%2F2%2F1%2F2%2FBnA0zmCvQiGdr8lCIIqZCQ&w=640&q=75" alt="퓨어랄 구미 5종">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://blog.kakaocdn.net/dn/QLITz/btsqm6UdRMc/DOjXMVpNHrJKMYUKLKlkwK/img.jpg" alt="퓨어랄 구미 복숭아, 머스켓">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://shuttlepeople.com/data/item/1500000669/thumb-7ZOo7Ja0656E6rWs66465S46riw45g2_600x600.png" alt="퓨어랄 구미 단면">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">퓨어랄 구미 젤리</p>
							
							<p class="location">드럭스토어, 편의점</p>
							<p class="txt">* 폭신한 식감의 안에 쫄깃한 과일젤리가 들어있는 젤리</p>
							<p class="price">120엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/198b/b608b853dddaed9767d31edf944e7407f68a748d38950dfa71837e9b60fa.jpg" alt="UHA 푸초 스틱젤리">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://sitem.ssgcdn.com/67/70/95/item/1000048957067_i1_750.jpg" alt="UHA 푸초 스틱젤리">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">UHA 푸초 스틱젤리</p>
							
							<p class="location">드럭스토어, 돈키호테, 편의점</p>
							<p class="txt">* 마이쮸같은 젤리안에 또 젤리를 넣은 젤리</p>
							<p class="price">130엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://img.croket.co.kr/item/contents/49a543de85853719618dc90520ec95a7.jpeg" alt="까먹는 생젤리 무쿠나마구미 3종">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://img.croket.co.kr/item/thumbnail/024acf6e940fc5000c24984bdb937535.webp" alt="까먹는 생젤리 무쿠나마구미 머스캣맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">까먹는 생젤리 무쿠나마구미</p>
							
							<p class="location">돈키호테</p>
							<p class="txt">* 탱글한 과일맛 젤리</p>
							<p class="price">298엔</p>
							<p class="coment">초큼 달다고 한다</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOi66jACMxPA3_Zi_aCvzP0XvD7P71yB8PLA&s" alt="아사히 미츠야 사이다 소다 캔디 4가지맛">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://stat.ameba.jp/user_images/20230302/12/junskynet/df/04/p/o0900090015249947005.png" alt="아사히 미츠야 사이다 소다 캔디">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">아사히 미츠야 사이다 소다 캔디</p>
							
							<p class="location">?</p>
							<p class="txt">* 사이다 캔디로 탄산쏘는 느낌을 맛볼수 있다</p>
							<p class="price">? 엔</p>
							<p class="coment">다른맛도 판매함</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://nppip.com/data/item/1656379134/66qo66as64KY6rCA7KCc6rO8.jpg" alt="모리나가 카라멜 4종">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">모리나가 카라멜</p>
							
							<p class="location">드럭스토어, 돈키호테, 편의점</p>
							<p class="txt">* 신기한 맛 카라멜 (팥색은 팥맛 카라멜)</p>
							<p class="price">300엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://nppip.com/data/item/1721350296/7KCc66qp7J2E7J6F66Cl7ZW07KO87IS47JqU_00120240719T093922.135.jpg" alt="드라이 미캉">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">드라이 미캉</p>
							
							<p class="location">패밀리마트</p>
							<p class="txt">* 쫄깃한 말린 귤의 식감</p>
							<p class="price">? 엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://img.croket.co.kr/item/thumbnail/60c9f32ad33e582fc439182e0db8bc5a.webp" alt="모리나가 프리미엄 하이츄 5종">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://image.croket.co.kr/storeItem/63f43bbcb14e99002ec2147f/itemImg/1676950461191/0/item_koeMP.jpeg" alt="모리나가 프리미엄 하이츄 귤">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">모리나가 프리미엄 하이츄</p>
							
							<p class="location">드럭스토어, 돈키호테, 편의점</p>
							<p class="txt">* 마이쮸보다 쫀득하고 부드러운 식감의 젤리</p>
							<p class="price">예상 130 ~ 150엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://img.khan.co.kr/lady/2023/09/11/news-p.v1.20230911.81e1330eca8b4a0180a08eff8b4b7c9b_P1.png" alt="곤약젤리">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">곤약젤리</p>
							<p class="txt">* 곤약맛 안나는 맛난곤약! 젤리</p>
							<p class="price">? 엔</p>
							<p class="coment">컵타입의 곤약젤리는 국내반입이 안된다는 사실!</p>
						</div>
					</li>
					`
				]
			],
			[
				'컵라면', [
					`
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://jp.nppip.com/wp-content/uploads/2024/07/QjIL7_134678_1.jpg" alt="산요 삿포로이치방 참깨돈부리된장라멘">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">산요 삿포로이치방 참깨돈부리된장라멘</p>
							
							<p class="txt">* 참깨가 들어간 된장라멘</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://img3.tmon.kr/cdn4/deals/2024/07/23/27325924746/front_acce4_1tmyu.jpg" alt="산요 삿포로 이치방 조개국물 돈부리 소금 라멘">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">산요 삿포로 이치방 조개국물 돈부리 소금 라멘</p>
							
							<p class="txt">* 조개국물 해장 싹~</p>
							<p class="coment">비슷하게 생긴 일반 소금라멘이 있으니 주의바람</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://jp.nppip.com/wp-content/uploads/2024/07/Ps0B3_134681_1-600x600.jpg" alt="에이스쿡 매운카레 야키소바">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">에이스쿡 매운카레 야키소바</p>
							
							<p class="txt">* 맵찔이도 가능</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://sep-item.ssgcdn.com/67/55/87/item/1000565875567_i1_350.jpg" alt="에이스쿡 매운카레 라멘">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">에이스쿡 매운카레 라멘</p>
							
							<p class="txt">* 위에껀 야끼소바 이건 라멘~</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://jp.nppip.com/wp-content/uploads/2024/07/mG9bD_134674_1.jpg" alt="산요 삿포로이치방 완전매운 탄탄멘">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">산요 삿포로이치방 완전매운 탄탄멘</p>
							<p class="txt">* 산초맛 확 느껴지는 탄탄멘</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://jp.nppip.com/wp-content/uploads/2024/07/TNBGs_134675_1.jpg" alt="산요 삿포로이치방 유자 시오라멘">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">산요 삿포로이치방 유자 시오라멘</p>
							<p class="txt">* 유자향이 나서 상큼+깔끔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://jp.nppip.com/wp-content/uploads/2024/07/BC1Ah_134676_1.jpg" alt="산요 삿포로 이치방 순두비찌개라멘">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">산요 삿포로 이치방 순두비찌개라멘</p>
							<p class="txt">* 순찌라멘</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://jp.nppip.com/wp-content/uploads/2024/07/iFmh3_134677_1.jpg" alt="산요 삿포로이치방 돈부리 간장라멘">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">산요 삿포로이치방 돈부리 간장라멘</p>
							<p class="txt">* 볶은파가 완전 많이 들어간 라멘</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://jp.nppip.com/wp-content/uploads/2024/07/4nC5E_134668_1.jpg" alt="묘조 스테미나 중화소바">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">묘조 스테미나 중화소바</p>
							<p class="txt">* 마늘+간장맛 스프에 빨간 국물</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://jp.nppip.com/wp-content/uploads/2024/07/Qp7cp_134670_1.jpg" alt="묘조 잇페이짱 스테미나 돼지고기 시오타레">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">묘조 잇페이짱 스테미나 돼지고기 시오타레</p>
							<p class="txt">* 마늘+마요 건더기 많은 볶음면</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://jp.nppip.com/wp-content/uploads/2024/07/2nCzz_134673_1.jpg" alt="산요 삿포로 이치방 햇생강맛 시오 야키소바">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">산요 삿포로 이치방 햇생강맛 시오 야키소바</p>
							<p class="txt">* 상큼한(?) 생강맛 야키소바</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/0898/7ee2cd60e2cab0e370a0caa8437b8b84ae74ee07c05959e1c12962060797.png" alt="동양수산 키츠네 야끼우동">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">동양수산 키츠네 야끼우동</p>
							<p class="txt">* 간장베이스에 시치미토핑이 있는 볶음우동</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://www.maruchan.co.jp/news_topics/documents/2201_noukouniboshiudon.gif" alt="동양수산 멸치 다시 우동">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">동양수산 멸치 다시 우동</p>
							<p class="txt">* 농후한 국물 우동</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://jp.nppip.com/wp-content/uploads/2024/07/uk9RR_134666_1-600x600.jpg" alt="동양수산 마루짱세이멘 농후멸치 양파라면">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">동양수산 마루짱세이멘 농후멸치 양파라면</p>
							<p class="txt">* 돈코츠 베이스에 양파 듬뿍</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://jp.nppip.com/wp-content/uploads/2024/07/YpXh2_134667_1.jpg" alt="묘조 챠루메라 국물없는 짬뽕">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">묘조 챠루메라 국물없는 짬뽕</p>
							<p class="txt">* 돈코츠 베이스에 해물맛까지</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://www.saradamall.com/data/item/1723605895/92.png" alt="닛신 ufo 감자치즈 야끼소바">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">닛신 ufo 감자치즈 야끼소바</p>
							<p class="txt">* 매쉬포테이토랑 찰떡궁합</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://img.croket.co.kr/item/thumbnail/ba28c4299734aad254c28492c483f1c4.webp" alt="닛신 마제 야끼소바">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">닛신 마제 야끼소바</p>
							<p class="txt">* 라유 마요네즈가 들어있어서 진한맛! 자극적!</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://img.croket.co.kr/item/thumbnail/f03168f0a7c5a3abad0af914ba7f3413.webp" alt="닛신 돈베이 매운 키츠네 우동">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">닛신 돈베이 매운 키츠네 우동</p>
							<p class="txt">* 유부토핑이 있는 한국인이 좋아하는 빨간 국물</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://sports.chosun.com/news/html/2024/06/25/2024062501001891200257381.jpg" alt="닛신라왕 복어소금라멘">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">닛신라왕 복어소금라멘</p>
							<p class="txt">* 유자향 싹 퍼지는 깔끔한 국물 / 오직 일본에서만 구매 가능</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/51a4/ddeed8c614d4cadb3108184696d5ad03b58d981e0ad3cb0f200f7330c1ce.jpg" alt="닛신 몽고탄멘 나카모토">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">닛신 몽고탄멘 나카모토</p>

							<p class="location">세븐일레븐</p>
							<p class="txt">* 신라면에서 살짝 매운맛의 마라중화맛</p>
							<p class="price">280엔</p>
							<p class="coment">난쟁이나라의 장신공주 <strong class="twinkle">PICK !</strong> / 한정판이라 판매 안할수도</p>
						</div>
					</li>

					<li class="best">
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/97ce/d226466155cc0295c151bcd7c040bb07aacbc8c9ae0255d9c88981fb8c8d.jpg" alt="마루짱 시로이 치카라모찌 우동">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://www.niconicomall.com/data/file/review/thumb-20210503104626_3959_500x667.jpg" alt="마루짱 시로이 치카라모찌 우동 실제샷">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">마루짱 시로이 치카라모찌 우동</p>

							<p class="location">마트, 돈키호테, 편의점</p>
							<p class="txt">* 쫄깃한 떡이 들어간 우동</p>
							<p class="price">190엔</p>
							<p class="coment">맛있겟당</p>
						</div>
					</li>
					`
				]
			],
			[
				'그 외', [
					`
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Pommes_d_amour.jpg/1200px-Pommes_d_amour.jpg" alt="링고아메 캔디애플">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">링고아메</p>
							
							<p class="location">Candy apple (캔디애플 - 가맹점)</p>
							<p class="txt">* "캔디애플"이라는 링고아메를 판매하는 디저트집이 있다.</p>
							<p class="price">225엔</p>
							<p class="coment">동선상 지나가는 경우 구매하면 좋을듯</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://dategom.com/wp-content/uploads/2023/10/%EC%84%B8%EB%B8%90%EC%9D%BC%EB%A0%88%EB%B8%90-%EC%88%99%EC%84%B1-%EB%A7%A4%EC%9A%B4-%EB%AA%85%EB%9E%80%EC%A0%93.jpg" alt="숙성 매운 명란젓">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">숙성 매운 명란젓</p>

							<p class="location">세븐일레븐</p>
							<p class="txt">* 숙성시킨 매운 명란젓을 넣은 주먹밥</p>
							<p class="price">175엔</p>
							<p class="coment">댝생님의 최애</p>
						</div>
					</li>
					`
				]
			],
		]
	],
	
	['주섬주섬', 
		[
			`
			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://contents.lotteon.com/itemimage/20240215155548/LO/22/26/11/84/11/_2/22/61/18/41/2/LO2226118411_2226118412_2.jpg/dims/resizef/720X720" alt="아이리스 푸드 이나리모찌">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>

						<div class="swiper-slide">
							<div class="visual">
								<img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/035f/c4edbe92967e03d4c0fbb800f85a8d2b12b9287a98fd6eec61e82f9b7d86.jpg" alt="아이리스 푸드 이나리모찌 상세">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">아이리스 푸드 이나리모찌 4개입 (유부 찰떡)</p>
					
					<p class="location">돈키호테</p>
					<p class="txt">* 유부와 떡 별도 포장 / 렌지에 데우거나 조리해서 먹어야합니다.</p>
					<p class="price">400엔</p>
					<p class="coment">맛있게 먹는법 검색해서 먹으면 좋을듯</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://img.croket.co.kr/item/thumbnail/3721f2e7d6e03ea3d14463920c97c8fa.webp" alt="칼디 스프레드 전종류">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>

						<div class="swiper-slide">
							<div class="visual">
								<img src="https://img.croket.co.kr/item/thumbnail/890dbdc59af5b670f6cb0484e40cafd8.webp" alt="칼디 스프레드 메론">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">칼디 스프레드</p>
					
					<p class="location">칼디(KALDI) 체인점</p>
					<p class="txt">* 식빵에 바르고 구우면 메론빵</p>
					<p class="price">332엔</p>
					<p class="coment">오직 칼디에서만 구매 가능 / 스프레드 외 다른 간식부터 식재료까지 판매하니 방문희망</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://nppip.com/data/item/1710905018/7KCc66qp7J2E7J6F66Cl7ZW07KO87IS47JqU_013.png" alt="베르데 토스트 스프레드 12종">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>

						<div class="swiper-slide">
							<div class="visual">
								<img src="https://img.danawa.com/prod_img/500000/807/763/img/6763807_1.jpg?_v=20181203115749" alt="베르데 토스트 스프레드 마늘바게트">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">베르데 토스트 스프레드</p>
					
					<p class="location">돈키호테, 마트 (가격차이있음)</p>
					<p class="txt">* 두꺼운빵에 (얇으면 기름지다고함) 발라 에어프라이어나 오븐에 구워먹으면 마늘빵이 됩니다!</p>
					<p class="price">238엔</p>
					<p class="coment">여러종류 중 마늘스프레드 추천</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://cdn.011st.com/11dims/resize/1000x1000/quality/75/11src/product/5500964076/B.jpg?442000000" alt="노리타마 후리가케">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">노리타마 후리가케</p>

					<p class="location">백엔샵, 마트, 돈키호테 등</p>
					<p class="txt">* 우동이나 밥 위에 뿌려주는 후레이크</p>
					<p class="price">100엔</p>
					<p class="coment">유부초밥 밥에 섞어도 맛나보인다</p>
				</div>
			</li>
			
			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://drunkn-monkey.com/data/files/2023/05/04/7fcab800fa96ab33d9803ac8829d236e.jpg" alt="산토리 삿포로 레몬사와 원액">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>

						<div class="swiper-slide">
							<div class="visual">
								<img src="https://mblogthumb-phinf.pstatic.net/MjAyMjEyMTNfMTQ3/MDAxNjcwOTE4MDM2ODcx.UHss3xkxq1uX2yH6A7V0DBplU5MdmA_1rW5upFBiSAAg.92DaPx9J_FnE2bYUOK-BJ32nNBx4ec0rfXlhBUg-Tbgg.JPEG.ellyplus/20221128%EF%BC%BF194925.jpg?type=w800" alt="산토리 삿포로 레몬사와 원액 노랑">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>

						<div class="swiper-slide">
							<div class="visual">
								<img src="https://drunkn-monkey.com/data/mall/67/6/6677320230511182312.thumb.jpg" alt="산토리 삿포로 레몬사와 원액 파랑">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">산토리 삿포로 레몬사와 원액</p>

					<p class="location">돈키호테</p>
					<p class="txt">* 원액에 당분이 함류되어있어 토닉워터보단 탄산수를 타마시면 사와가 됩니다! / 노란색(기본), 파란색(진한맛)</p>
					<p class="price">? 엔</p>
					<p class="coment">국내 수화물 반입 가능여부 확인필요</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://s.alicdn.com/@sc04/kf/Hc25868591ae84ddca7e990f36613ef91N.png_300x300.jpg" alt="ac재킷">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">ac재킷</p>
					<p class="txt">* 선풍기 자켓</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://nppip.com/data/item/1616745023/490240257942801_NP.png" alt="푸딩믹스">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">푸딩믹스</p>

					<p class="location">일본 다이소(백엔샵)</p>
					<p class="price">100엔</p>
					<p class="coment">난쟁이나라의 장신공주 <span class="twinkle">PICK !</span></p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://cdn.shopify.com/s/files/1/0527/4068/5983/files/4902880051379.jpg?v=1715299575" alt="모모야 라유 약간매운맛 - 고추기름">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">모모야 약간 매운맛 라유 - 고추기름</p>

					<p class="location">드럭스토어, 돈키호테 등</p>
					<p class="txt">* 마늘+고추 조합 / 흰쌀밥과 비벼먹으면 극락</p>
					<p class="price">300엔</p>
					<p class="coment">라유 필요한사람~ 저요~</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://japandrug.jp/cdn/shop/files/1_4ee288b8-c505-4a5b-a99b-d61d712bf904.jpg?v=1706594075" alt="에바라 황금고기 소스 3종">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">에바라 황금고기 소스 3종</p>

					<p class="location">돈키호테, 드럭스토어</p>
					<p class="txt">* 과일을 베이스로 만들어 상큼+고소한 맛 / 고기에 찍어먹거나 볶음요리용으로 사용 가능</p>
					<p class="price">? 엔</p>
					<p class="coment">짝꿍핑 <span class="twinkle">PICK !</span></p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://sitem.ssgcdn.com/35/96/45/item/1000052459635_i1_750.jpg" alt="에바라 스키야키 타레">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">에바라 스키야키 타레 마일드</p>

					<p class="location">로피아(마트)</p>
					<p class="txt">* 짭잘달달한 한국에 없는 맛인 일본식 스키야키가 먹고싶을때 사용</p>
					<p class="price">259엔</p>
					<p class="coment">짝꿍핑 <span class="twinkle">PICK !</span></p>
				</div>
			</li>
			`
		]
	],
	
	['콸콸', 
		[
			`
			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://japandrug.jp/cdn/shop/files/67_1b405ce6-eae8-4f74-bfed-b13f65ff2f6e_600x600_crop_center.jpg?v=1709881774" alt="칼피스 워터">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">칼피스 워터/소다/리치</p>
					<p class="txt">* 일본의 유산균 음료수 / 완전 살균한 무균음료 / 밍밍한 밀키스맛</p>
					<p class="price">162엔</p>
					<p class="coment">원액도 판매하니 음료와 구분 주의</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://dimg.donga.com/wps/NEWS/IMAGE/2024/01/28/123261551.2.jpg" alt="메론소다 환타">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">메론소다 환타</p>

					<p class="location">세븐일레븐</p>
					<p class="txt">* 소다에 메론향과 메론색상을 첨가한 음료 / 매우 달다</p>
					<p class="price">140엔</p>
					<p class="coment">희귀템으로 보이면 구매하기</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4N3T/image/awG1S8N1FsTm0RaFqwV0DGhmOn0.jpg" alt="메이지 우유 3종">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">메이지 우유</p>

					<p class="location">대중목욕탕 / 대중 온천 등 자판기</p>
					<p class="txt">* 우유</p>
					<p class="price">? 엔</p>
					<p class="coment">목욕후 우유 한병 때리기</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA2MDRfMTI2/MDAxNTU5NjE2MzY0NjE3.Ut_oPpz3IGh-zqe8BMs9R2VvVZhlrFn61QLp5A6hOU8g.cFTx6HUrw9-8a14ds4S04KCt9n7NViLhocnD2GjR-GQg.JPEG.sem0804/SE-72b552ce-0ca4-4395-abc0-0d74ddf96c45.jpg?type=w800" alt="홍차화전 로얄밀크티">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>

						<div class="swiper-slide">
							<div class="visual">
								<img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/00e3/1d0a63d3223105ccae402e13813b37da1d8b9a5dc728cc924da7f79ef31f.jpg" alt="홍차화전 실론찻잎 홋카이도 밀크티">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">홍차화전 로얄밀크티</p>

					<p class="location">편의점</p>
					<p class="txt">* 일본의 유명한 밀크티</p>
					<p class="price">? 엔</p>
					<p class="coment">표지가 다를수 있음 "홍차화전"만 확인</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5775796117/B.jpg?813000000" alt="아야타카 말차라떼">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">아야타카 말차라떼</p>

					<p class="location">패밀리마트, 편의점</p>
					<p class="txt">* 코카콜라에서 만든 일본산 말차 100% 라떼</p>
					<p class="price">179엔</p>
					<p class="coment">맛있겠다 사야겠따</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://mblogthumb-phinf.pstatic.net/20120204_146/vegan_life_1328332996550ywc61_PNG/20090420480.png?type=w420" alt="소켄비차">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">소켄비차</p>

					<p class="location">편의점</p>
					<p class="txt">* 코카콜라에서 만든 노카페인 보리차</p>
					<p class="price">138엔</p>
					<p class="coment">갈증날때 수분충전</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://nppip.com/data/item/1622193096/4902102138888_01_NP.jpg" alt="홍차화전 복숭아티">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">홍차화전 크래프트 복숭아티</p>
					<p class="txt">* 복숭아 과즙을 듬뿍 넣은 복숭아 아이스티</p>
					<p class="price">예상 200 ~ 280엔</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://barleymoll.com/data/editor/2011/1c3f93f2cb4084fd430defc7addf79b0_1604896311_1012.gif" alt="오후의 홍차">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">오후의 홍차</p>
					<p class="txt">* 기린음료에서 출시한 일본의 최초의 페트병 홍차</p>
					<p class="price">? 엔</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://img.croket.co.kr/item/thumbnail/fbabde79fbe17220f9a22ea8c3210266.webp" alt="유자레몬 사이다">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">유자레몬 사이다</p>

					<p class="location">세븐일레븐</p>
					<p class="txt">* 유자과즙에 레몬 과즙을 혼합한 사이다</p>
					<p class="price">106엔</p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/21/realfood/20210521180242802bzfm.jpg" alt="자판기 콘스프">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">자판기 콘스프</p>

					<p class="location">길거리 자판기</p>
					<p class="txt">* 달달 고소하며 후루룩 먹기 편함</p>
					<p class="price">130 ~ 140엔</p>
					<p class="coment">플라이투더숟가락 <strong class="twinkle">PICK !</strong></p>
				</div>
			</li>

			<li>
				<div class="detail-visual">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="visual">
								<img src="https://mblogthumb-phinf.pstatic.net/MjAyNDAxMzFfMzQg/MDAxNzA2Njk5MTk3MTc4.72FCVSl9TyZ4UilGCRQXlva3Qx17uqnCTDpL0l6QcdEg.xX7oCe-aj5Hl89KXaPKjQEPiKz1GjC8eotvUhGk7C2Ag.JPEG.ukgung/1706699184680.jpg?type=w800" alt="자판기 게 전골 스프">

								<div class="big-img">
									<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

								</div>

							</div>
						</div>
					</div>

					<div class="swiper-pagination"></div>
				</div>

				<div class="txt-wrap">
					<p class="name">자판기 게 전골 스프</p>

					<p class="location">자판기(희귀템)</p>
					<p class="txt">* 마늘맛이 조금 가미된 백숙맛이 더 잘나는 게 스프</p>
					<p class="price">? 엔</p>
				</div>
			</li>
			`
		]
	],
	
	['덕지덕지', 
		[
			[
				'먹는 약', [
					`
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://bluebox007.wisacdn.com/goods/339/33989/4987300058855-1.view.jpg" alt="이브 퀵 두통약 DX">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">이브 퀵 두통약 DX</p>

							<p class="location">드럭스토어</p>
							<p class="price">? 엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://malljapan.net/data/mall/2/1/140720230414185955.thumb.png" alt="마시는 소화제 솔맥 / 은색">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://malljapan.net/data/mall/2/1/140520230414185425.thumb.png" alt="마시는 소화제 솔맥 / 초록색">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">마시는 소화제 솔맥</p>

							<p class="location">편의점, 드럭스토어</p>
							<p class="txt">* 초록색이 더 빠른 효과 !</p>
							<p class="price">400엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://www.mallpassstore.com/data/mall/3/2/2706.thumb.jpg" alt="용각산 다이렉트 3종">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">용각산 다이렉트 3종</p>

							<p class="location">드럭스토어</p>
							<p class="txt">* 목의 불쾌함을 완화시켜주는 효과로 인기 있는 용각산 / 가루스틱 타입과 사탕타입이 있다</p>
							<p class="price">600엔</p>
							<p class="coment">용각산 캔디와는 다른 것 같음</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://tshop.r10s.jp/kenkousyoppumy/cabinet/goq001/738_1.jpg?fitin=720%3A720" alt="피로회복제 活蔘28(카츠진28)">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">피로회복제 活蔘28(카츠진28)</p>

							<p class="location">드럭스토어</p>
							<p class="price">? 엔</p>
							<p class="coment">낱개로 파는지 모르겠다 검색정보 적음</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://www.lotteginza.jp/storage/lotteauKR/www/prefix/product/2024/15/O/product.2556.171279912019691.png" alt="비타트 오구치 레몬 가글">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">비타트 오구치 레몬 가글</p>

							<p class="location">돈키호테, 드럭스토어</p>
							<p class="txt">* 입안의 오염, 잔여물 제거, 단백질을 굳혀서 씻어내는 가글</p>
							<p class="price">300엔</p>
							<p class="coment">레몬향이 좋은가봄</p>
						</div>
					</li>
					`
				]
			],
			[
				'바르는 약', [
					`
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://japandrug.jp/cdn/shop/products/s2a_600x600_crop_center.jpg?v=1617093388" alt="가려움약 물파스 액체무히s">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">가려움약 물파스 액체무히s</p>

							<p class="location">드럭스토어</p>
							<p class="txt">* 가려움 물파스</p>
							<p class="price">? 엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://malljapan.net/data/mall/2/1/168720230626150640.thumb.jpg" alt="관절 통증 로키소닌s로션a">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">관절 통증 로키소닌s로션a</p>

							<p class="location">드럭스토어</p>
							<p class="price">? 엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://iroirotokyo.net/wp-content/uploads/2020/02/162710320180628123758.thumb_.jpeg" alt="페어아크네 크림(여드름 치료제)">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">페어아크네 크림(여드름 치료제)</p>

							<p class="location">돈키호테, 드럭스토어</p>
							<p class="txt">* 여드름 치료제로 치료 부위에만 소량 도포(전체 도포아님)</p>
							<p class="price">800엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://cdn11.bigcommerce.com/s-69ec9/images/stencil/2048x2048/products/2740/6301/Nivea_Men_Hand_Cream_150ml-2__41793.1644201975.jpg?c=2" alt="보습크림 NIVEA MEN CREME(made in Germany)">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">보습크림 NIVEA MEN CREME(made in Germany)</p>

							<p class="location">돈키호테, 드럭스토어</p>
							<p class="price">? 엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/75a4/93a14745adf3624f5cf560e020a302c69e9841a9e747a3a838baad4d3437.jpg" alt="바닐라 코짓 쿨 밥밥 모어 젤 러빗">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/8690/2a80e2c134b3278b905ce0dd0ba4f87c3cd38406e422f800dff68c569f09.jpg" alt="바닐라 코짓 쿨 밥밥 모어 젤 러빗">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">바닐라 코짓 쿨 밥밥 모어 젤 러빗</p>

							<p class="location">돈키호테, 드럭스토어</p>
							<p class="txt">* 순간냉각 스프레이</p>
							<p class="price">? 엔</p>
						</div>
					</li>
					`
				]
			],
			[
				'붙이는 약', [
					`
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://m.media-amazon.com/images/I/81GQxobB7bL.jpg" alt="구내염 패치 트러플 다이렉트">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://image.dokodemo.world/catalog-skus/239493/909e945b1a96702a962e77c7c2394a3a.png?d=0x0" alt="구내염 패치 다이쇼 A">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">구내염 패치</p>

							<p class="location">드럭스토어</p>
							<p class="txt">* 두개 무슨 차이인지 모르겠음</p>
							<p class="price">850 ~ 900엔</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://malljapan.net/data/mall/2/1/130520230407163739.thumb.jpg" alt="가려움패치 이케다 무히패치">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="visual">
										<img src="https://pb.nidrug.co.jp/goods/file/image/expand/1135559/" alt="가려움패치 케아루라 카유미패치">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">가려움 패치</p>

							<p class="location">드럭스토어</p>
							<p class="txt">* 벌레물린데 붙이면 좋다</p>
							<p class="price">? 엔</p>
							<p class="coment">호빵맨 패치가 더 잘나가나봄</p>
						</div>
					</li>


					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://japankorea.co.kr/new/data/item/1453781272/thumb-zagzag_4987188100554_600x600.jpg" alt="샤론파스">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">샤론파스</p>

							<p class="location">드럭스토어</p>
							<p class="price">? 엔</p>
							<p class="coment">짝꿍핑의 애용 파스</p>
						</div>
					</li>

					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://cafe24.poxo.com/ec01/hitmexx/ply1/nAawdDaSLpPjZimX21MXaXmcheN0oS0nUtO05DJDlPI1SXBHPc6lyj5XPGe/_/web/product/extra/big/202207/201c0765152c147a4b8b7675c7d4bc89.jpg" alt="코바야시제약 냉타올">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">코바야시제약 냉타올(히야시 타오르)</p>

							<p class="location">드럭스토어</p>
							<p class="price">? 엔</p>
						</div>
					</li>
					`
				]
			],
			[
				'기타', [
					`
					<li>
						<div class="detail-visual">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="visual">
										<img src="https://iroirotokyo.net/wp-content/uploads/2021/01/%EC%82%AC%EC%BF%A0%EB%9D%BC-%EC%81%98%EB%9D%A0%EC%BC%80%EC%96%B4-%EC%BC%80%EC%8A%A4%EC%AF%94%ED%82%A4-10ml.jpg" alt="사쿠라 쁘띠케어 세정 보존액 10ml">

										<div class="big-img">
											<button type="button" class="open-modal btn-zoom" aria-controls="layer_detail"><span class="sr-only">자세히보기</span></button>

										</div>

									</div>
								</div>
							</div>

							<div class="swiper-pagination"></div>
						</div>

						<div class="txt-wrap">
							<p class="name">사쿠라 쁘띠케어 세정 보존액 10ml</p>

							<p class="location">드럭스토어</p>
							<p class="txt">* 렌즈세척액</p>
							<p class="price">105엔</p>
						</div>
					</li>
					`
				]
			],
		]
	],
]