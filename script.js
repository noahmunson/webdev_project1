function initMap() {
  const location = {
    lat: 41.83566,
    lng: -87.62584,
  }

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
    mapTypeControl: true,
    zoomControl: true,
  })

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Chicago",
  })

  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Chicago</h3><p>Welcome to Chicago!</p>",
  })

  marker.addListener("click", function () {
    infoWindow.open(map, marker)
  })

  map.setOptions({
    streetViewControl: true,
    fullscreenControl: true,
    mapTypeControl: true,
  })
}

document.addEventListener("DOMContentLoaded", function () {
  const questionButton = document.getElementById("question")

  if (questionButton) {
    questionButton.addEventListener("click", function () {
      alert(
        "If you have questions, contact me at:\nnmunson@hawk.illinoistech.edu",
      )
    })
  }
})
