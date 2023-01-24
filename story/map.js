//basics of how to code an info window is from https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple#maps_infowindow_simple-javascript
//modified to be the location of Mauna Loa Volcano with new content

function initMap() {
  const centerofMap = { lat: 20.468, lng: -157.756 };
  const maunaloa = { lat: 19.471, lng: -155.592 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: centerofMap,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Mauna Loa Volcano</h1>' +
    '<div id="bodyContent">' +
    "<p>Mauna Loa is the largest volcano on Earth and has erupted 33 times since 1843." +
    "The last eruption in 1943 was observed to have lasted over 20 days which" +
    "reached over 7km away"</p>" +
    '<p>Attribution: Active Volcanoes of Hawaii, <a href="https://www.usgs.gov/observatories/hvo/active-volcanoes-hawaii">' +
    "https://www.usgs.gov/observatories/hvo/active-volcanoes-hawaii</a> " +
    "(last visited January 23, 2023).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Maunaloa",
  });
  const marker = new google.maps.Marker({
    position: maunaloa,
    map,
    title: "Maunaloa",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;
