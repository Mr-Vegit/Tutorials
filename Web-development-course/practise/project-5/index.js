function updateMap() {
  console.log("We are updating the data again");
  fetch("/data.json")
  .then((response) => response.json())
    .then((rsp) => {
      console.log(rsp.data);
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;
        cases = element.infected;
        function col(){
          if (cases > 255) {
           return `rgb(255, 0, 0);`
          } else {
            return `rgb(${cases}, 0, 0)`
          }
        } 

        // mark it on the map
        new mapboxgl.Marker({
          draggable: false,
          color: col()
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}
let interval = 2000;
setInterval(updateMap(), interval);

