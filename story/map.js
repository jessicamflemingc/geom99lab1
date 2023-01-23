//The simple map basics are from the Google Maps Platform documentation and has been modified to present my designated location of the Hawaii Islands
//from https://developers.google.com/maps/documentation/javascript/examples/map-simple

function initMap() {
  const mapcentre = { lat: 20.602, lng: -157.511 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: mapcentre,
  });

 
  
setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const beaches = [
  ["Haleakalā", 20.709, -156.253],
  ["Mauna Loa", 19.471, -155.592],
  ["Lōʻihi", 18.914, -155.271],
  ["Hualālai", 19.686, -155.865],
  ["Kīlauea", 19.406, -155.283],
];


}

window.initMap = initMap;
