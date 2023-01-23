//The simple map basics are from the Google Maps Platform documentation and has been modified to present my designated location of the Hawaii Islands
//from https://developers.google.com/maps/documentation/javascript/examples/map-simple

function initMap() {
  const mapcentre = { lat: 20.602, lng: -157.511 };
  const haleakala = { lat: 20.709, lng: -156.253 };
  const maunaloa = { lat: 19.471, lng: -155.592 };
  const loihi = { lat: 18.914, lng: -155.271 };
  const hualalai = { lat: 19.686, lng: -155.865 };
  const kilauea = { lat: 19.406, lng: -155.283 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: mapcentre,
  });

  new google.maps.Marker({
    position: haleakala,
    map,
  });
  new google.maps.Marker({
    position: maunaloa,
    map,
  });
  new google.maps.Marker({
    position: loihi,
    map,
  });
  new google.maps.Marker({
    position: hualalai,
    map,
  });
  new google.maps.Marker({
    position: kilauea,
    map,
  });
}

window.initMap = initMap;
