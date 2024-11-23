
//지도 그리기, center는 초기 지도의 중앙값/zoom은 초기 확대값
const map = L.map('map', {
	center: [34.6,134.8],
	zoom: 9
});
//tile 형태의 지도를 상단에 선언한 map에 append
const tiles = L.tileLayer('http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function getMarker(){
	$.ajax({
			method: 'GET',
			url: './resource/js/map.json',
			dataType: 'json'
	}).done(function (data) { 

			$.each(data.datas, function (index, item) {  //each(매개변수, 함수)

					L.marker([item.lat, item.lang]).addTo(map).bindPopup(
					'<h2>'+item.title+'</h2><br>'+item.user_nick
					);
			});
	});

	$.ajax({
			method: 'GET',
			url: './resource/js/map_danger.json',
			dataType: 'json'
	}).done(function (data) { 

			$.each(data.datas, function (index, item) {  //each(매개변수, 함수)

					L.circle([item.lat, item.lang], {
							color: 'red',
							fillColor: '#f03',
							fillOpacity: 0.5,
							radius: 500
					}).addTo(map).bindPopup(
					'<h2>'+item.title+'</h2>'
					);;
			});
	});

}
//function 실행    
getMarker();