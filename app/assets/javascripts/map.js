// $(document).ready(function() {
//   var map = L.map('map').setView([29.86, 121.56], 13);
//   var position = [];
//   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(map);
//
//   L.marker([29.86, 121.56]).addTo(map)
//       .bindPopup("请选择当前位置")
//       .openPopup();
//   function onLocationFound(e) {
//     var marker = L.marker(e.latlng, {draggable: true})
//                   .addTo(map)
//                   .bindPopup("请选择当前位置").openPopup()
//                   .on('dragend', function (event) {
//                     var marker = event.target;
//                     var latlng = marker.getLatLng();
//                     position.push(latlng);
//                   });
//                 }
//   map.on('locationfound', onLocationFound);
//   function onMapClick(e) {
//         popup
//             .setLatLng(e.latlng)
//             .setContent("你点击的位置在 " + e.latlng.toString())
//             .openOn(map);
//   }
//   map.on('click', onMapClick);
// });
// var mymap = L.map('mapid');
// mymap.locate({setView: true, maxZoom: 16});
// var position = [];
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
//     maxZoom: 18,
//     id: 'mapbox.streets'
// }).addTo(mymap);
//
// function onLocationFound(e) {
//     L.marker(e.latlng,{draggable: true})
//             .addTo(mymap)
//             .bindPopup("请选择仓库位置!").openPopup()
//             .on('dragend', function (event) {
//                 var marker = event.target;
//                 var latlng = marker.getLatLng();
//                 position.push(latlng);
//             });
//
// }
//
// function onLocationError() {
//     L.marker([29.86, 121.56],{draggable: true})
//             .addTo(mymap)
//             .bindPopup("<b>请选择仓库位置!</b>").openPopup()
//             .on('dragend', function (event) {
//                 var marker = event.target;
//                 var latlng = marker.getLatLng();
//                 position.push(latlng);
//             });
// }
//
// mymap.on('locationerror', onLocationError);
// mymap.on('locationfound', onLocationFound);
// var popup = L.popup();
//
// function onMapClick(e) {
//     popup
//             .setLatLng(e.latlng)
//             .setContent("你点击的位置在 " + e.latlng.toString())
//             .openOn(mymap);
// }
//
// mymap.on('click', onMapClick);
// $('#referred').click(function () {
//     var name = $('#name').val();
//     var address = $('#addr').val();
//     if(name==''||address==''||position[position.length-1]==undefined){
//         $('#referred').prop('disabled',false);
//         $.toast({
//             position: 'top-right',
//             text:'请补全仓库信息！',
//             icon:'error'
//         })
//     }
//     else {
//         var lat =  position[position.length-1].lat;
//         var lng =  position[position.length-1].lng;
//         $('#lat').val(lat);
//         $('#lon').val(lng);
//         $('#right').text(position)
//     }
//
// });
