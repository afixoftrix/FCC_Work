function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  function orbitalPeriod(altitude) {
    var pi = Math.PI;
    return Math.round(
      2 * pi * Math.sqrt(Math.pow(earthRadius + altitude, 3) / GM)
    );
  }

  var newarr = arr.map(function(item) {
    var name = item.name;
    var op = orbitalPeriod(item.avgAlt);

    var profile = {
      name: name,
      orbitalPeriod: op,
    };

    return profile;
  });

  return newarr;
}

console.log(
  orbitalPeriod([
    { name: 'iss', avgAlt: 413.6 },
    { name: 'hubble', avgAlt: 556.7 },
    { name: 'moon', avgAlt: 378632.553 },
  ])
);
