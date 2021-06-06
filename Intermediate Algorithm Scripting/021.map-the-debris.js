function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map((obj) => {
    const orbitPeriod = Math.round(
      2 * Math.PI * Math.sqrt((earthRadius + obj.avgAlt) ** 3 / GM)
    );
    return { name: obj.name, orbitalPeriod: orbitPeriod };
  });
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
