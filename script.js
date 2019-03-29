var getLocation = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
  } else {
    window.alert("Could not get location");
  }
};

function locationSuccess(position) {
  var locationlatitude = position.coords.latitude.toFixed(4);
  var locationlongitude = position.coords.longitude.toFixed(4);
  showWeather(locationlatitude, locationlongitude);
}

function locationError(err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      alert("Permission Denied");
      break;

    case err.TIME_OUT:
      alert("Time Out");
      break;

    case err.POSITION_UNAVAILABLE:
      alert("Position unavailable");

    default:
      alert("Unkown error");
  }
}

function showWeather(locationlatitude, locationlongitude) {
  var url =
    `https://api.darksky.net/forecast/f672ff13193bfcc40427a678ebfdbc71/${locationlatitude},${locationlongitude}` +
    `?format=jsonp&callback=displayWeather`;
  console.log(url);

  // fetch(url)
  //   .then(data => {
  //     console.log(data.json());
  //     return data.json();
  //   })
  //   .then(res => console.log(res));
}
