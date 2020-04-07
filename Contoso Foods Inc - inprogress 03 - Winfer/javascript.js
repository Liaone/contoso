function showHide() {
  var reserv = document.getElementById("reservation-drop");
  if (reserv.style.display === "none") {
    reserv.style.display = "block";
  } else {
    reserv.style.display = "none";
  }
}



/*Maps*/
function initMap() {
    var uluru = { lat: 59.31135, lng: 18.07483 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: uluru
    });
    var marker = new google.maps.Marker({ position: uluru, map: map });
  }