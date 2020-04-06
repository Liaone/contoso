/*HamburgerNav*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
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
