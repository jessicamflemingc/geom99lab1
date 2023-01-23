//The simple map basics are from the Google Maps Platform documentation and has been modified to present my designated location of the Hawaii Islands
//from https://developers.google.com/maps/documentation/javascript/examples/map-simple

function initMap() {
  const myLatLng = { lat: 21.566, lng: -157.993 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng,
  });

//basics for creating simple markers is from the Google Maps Platform template for simple markers
//from https://developers.google.com/maps/documentation/javascript/examples/marker-simple

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
  
setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const beaches = [
  ["Haleakalā", 20.709, -156.253, 4],
  ["Mauna Loa", 19.471, -155.592, 5],
  ["Lōʻihi", 18.914, -155.271, 3],
  ["Hualālai", 19.686, -155.865, 2],
  ["Kīlauea", 19.406, -155.283, 1],
];

function setMarkers(map) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];

    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });
  }
}

window.initMap = initMap;
