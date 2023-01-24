let map;

function initMap() {
  const mapcentre = { lat: 20.602, lng: -157.511 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: mapcentre,
  });
}
window.initMap = initMap;
