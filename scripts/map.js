function initMap() {
  var uluru = {lat: 50.7959049, lng: 21.157441};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
};

function bigMap() {
  var uluru = {lat: 50.7959049, lng: 21.157441};
  var map = new google.maps.Map(document.getElementById('big-map'), {
    zoom: 9,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
};