function initMap() {
  const myLatLng = { lat: 21.565, lng: -157.992 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
