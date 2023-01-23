let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.741, lng: -155.844 },
    zoom: 6,
  });
}

window.initMap = initMap;
