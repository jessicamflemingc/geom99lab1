//The simple map basics are from the Google Maps Platform documentation and has been modified to present my designated location of the Hawaii Islands
//from https://developers.google.com/maps/documentation/javascript/examples/map-simple
//the basics for the simple marker is from https://developers.google.com/maps/documentation/javascript/examples/marker-simple, modified for volcanoes in Hawaii
function initMap() {
  const mapcentre = { lat: 20.602, lng: -157.511 };
  const haleakala = { lat: 20.709, lng: -156.253 };
  const maunaloa = { lat: 19.471, lng: -155.592 };
  const loihi = { lat: 18.914, lng: -155.271 };
  const hualalai = { lat: 19.686, lng: -155.865 };
  const kilauea = { lat: 19.406, lng: -155.283 };
  const maunakea = { lat: 19.820, lng: -155.468 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: mapcentre,
  });

new google.maps.Marker({
    position: haleakala,
    map,
    title: "Haleakalā Volcano",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
    }
  });  
new google.maps.Marker({
    position: maunaloa,
    map,
    title: "Mauna Loa Volcano",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
    }
  });
new google.maps.Marker({
    position: loihi,
    map,
    title: "Kamaʻehuakanaloa Seamount (formerly Lōʻihi",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
    }
  });
new google.maps.Marker({
    position: hualalai,
    map,
    title: "Hualālai Volcano",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
    }
  });
new google.maps.Marker({
    position: kilauea,
    map,
    title: "Kīlauea",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
    }
  });
new google.maps.Marker({
    position: maunakea,
    map,
    title: "Mauna Kea",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
    }
  });
var content1 = 
"<div><br>Mauna Kea Volcano</b><br/>blah blah lbah ewfo hfeopun n efuefo jh3 oiefwj cqp gw eipq oig hjwpf k wqfu  qepj</b>
var markers = [
  { 
  "title": 'Mauna Kea Volcano',
  "lat": '19.820'
  "lng": '-155.468',
  "description": content1
  }
 ];

window.onload - LoadMap;
  
  function LoadMap() {
    var mapOptions = {
      center: new google.maps.LatLng (20.602, -157.511),
      zoom: 5
      mapTypeId: 'terrain'
    };
  var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions;
  
  var InfoWindow.
  var infoWindow = new google.maps.InfoWindow();
    
  for (var i = 0; i < markers.length; i++) {
    var data = markers [i];

    var myLatLng - new google.maps.LatLng(data.lat, data.Lng);
    
    var marker = new google.maps.Markers({
      position: myLatLng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: data'title,
      icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
    }
  });
   
    (function (marker, data) {
      google.maps.event.addListener(marker, "click", function (e) {
        infoWindow.setContent('<div style="width: 250px"> + data.description + '</div>');
        infoWindow.open(map,marker);
      });
    })(marker, data);

  }
    
window.initMap = initMap;
