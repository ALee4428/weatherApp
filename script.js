$(document).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
    });
  }else {
    conlsole.log("Geolocation no supported");
  }
}
function getWeather(lat, lon){
  
}
