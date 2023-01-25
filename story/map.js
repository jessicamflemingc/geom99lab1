let map;

function initMap() {
  const mapcentre = { lat: 20.602, lng: -157.511 };
  const haleakala = { lat: 20.709, lng: -156.253 };
  const maunaloa = { lat: 19.471, lng: -155.592 };
  const loihi = { lat: 18.914, lng: -155.271 };
  const hualalai = { lat: 19.686, lng: -155.865 };
  const kilauea = { lat: 19.406, lng: -155.283 };
  const maunakea = { lat: 19.820, lng: -155.468 };
  const kohala = { lat: 20.085, lng: -155.717 };
  const waialeale = { lat: 22.069, lng: -159.496 };
  const kahoolawe = { lat: 20.556, lng: -156.605 };
  const lanaihale = { lat: 20.813, lng: -156.866 };
  const maunakahalawai = { lat: 20.893, lng: -156.589 };
  const waianae = { lat: 21.509, lng: -158.150 };
  const koolau = { lat: 21.449, lng: -157.900 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: mapcentre,
    mapTypeId: 'terrain',
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
new google.maps.Marker({
    position: koolau,
    map,
    title: "Ko'olau Range",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
    }
  });
new google.maps.Marker({
    position: waialeale,
    map,
    title: "Mount Waiʻaleʻale",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
    }
  });
new google.maps.Marker({
    position: kohala,
    map,
    title: "Kohala Volcano",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    }
  });
new google.maps.Marker({
    position: kahoolawe,
    map,
    title: "Kahoolawe Volcano",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    }
  });
new google.maps.Marker({
    position: lanaihale,
    map,
    title: "Lanaihale Volcano",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    }
  });
new google.maps.Marker({
    position: maunakahalawai,
    map,
    title: "Mauna Kahalawai Volcano",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    }
  });
new google.maps.Marker({
    position: waianae,
    map,
    title: "Waianae Range",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    }
  });
}
window.initMap = initMap;
