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
//const beaches = [
//  ["Haleakalā", 20.709, -156.253, 4],
//  ["Mauna Loa", 19.471, -155.592, 5],
//  ["Lōʻihi", 18.914, -155.271, 3],
//  ["Hualālai", 19.686, -155.865, 2],
//  ["Kīlauea", 19.406, -155.283, 1],
];

const pinCustom = new google.maps.marker.PinView({
    background: "#FBBC04",
    borderColor: "#137333",
    glyphColor: "white",
  });
  const pinCustom = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 20.709, lng: -156.253 },
    content: pinCustom.element,
  });
 const pinCustom = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 19.471, lng: -155.592 },
    content: pinCustom.element,
 });
 const pinCustom = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 18.914, lng: -155.271 },
    content: pinCustom.element,
 });
 const pinCustom = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 19.686, lng: -155.865 },
    content: pinCustom.element,
 });
 const pinCustom = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 19.406, lng: -155.283 },
    content: pinCustom.element,
 });
}

window.initMap = initMap;
