let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.542, lng: 155.665 },
    zoom: 8,
  });
}

window.initMap = initMap;
