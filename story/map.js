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
  const uluru = { lat: 19.820, lng: -155.468 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: mapcentre,
  });
const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km "</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
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

}

window.initMap = initMap;
