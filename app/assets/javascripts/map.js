$(document).ready(function() {
  var map = L.map('map').setView([29.86, 121.56], 8);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([29.86, 121.56]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
  }
  map.on('click', onMapClick);
});
