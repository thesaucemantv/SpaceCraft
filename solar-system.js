// Set up the SpaceKit visualization
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
    basePath: 'https://typpo.github.io/spacekit/src',
  });
  
  // Background stars
  viz.createStars();
  // Sun
  const SUN = viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);
  
  // Planets
  const planets = {
    Mercury: viz.createObject('Mercury', Object.assign(Spacekit.SpaceObjectPresets.MERCURY, {
      labelText: 'Mercury'}
    )),
    Venus: viz.createObject('Venus', Object.assign(Spacekit.SpaceObjectPresets.VENUS, {
      labelText: 'Venus'}
    )),
    Earth: viz.createObject('Earth', Object.assign(Spacekit.SpaceObjectPresets.EARTH, {
      labelText: 'Earth'}
    )),
    Mars: viz.createObject('Mars', Object.assign(Spacekit.SpaceObjectPresets.MARS, {labelText: 
      'Mars'}
    )),
    Jupiter: viz.createObject('Jupiter', Object.assign(Spacekit.SpaceObjectPresets.JUPITER, {
      labelText: 'Jupiter'} 
    )),
    Saturn: viz.createObject('Saturn', Object.assign(Spacekit.SpaceObjectPresets.SATURN, {
      labelText: 'Saturn'}
    )),
    Uranus: viz.createObject('Uranus', Object.assign(Spacekit.SpaceObjectPresets.URANUS, {
      labelText: 'Uranus'}
    )),
    Neptune: viz.createObject('Neptune', Object.assign(Spacekit.SpaceObjectPresets.NEPTUNE, {
      labelText: 'Neptune'}
    )),
  };
  
  // Tesla Roadster object
  const roadster = viz.createObject('spaceman', {
    labelText: 'Tesla Roadster',
    ephem: new Spacekit.Ephem({
      a: 1.324870564730606E+00,
      e: 2.557785995665682E-01,
      i: 1.077550722804860E+00,
      om: 3.170946964325638E+02,
      w: 1.774865822248395E+02,
      ma: 1.764302192487955E+02,
      epoch: 2458426.500000000,
    }, 'deg'),
  });
  
  // Event listeners for simulation controls
  document.getElementById('btn-start').onclick = function () {
    viz.start();
  };
  document.getElementById('btn-stop').onclick = function () {
    viz.stop();
  };
  document.getElementById('btn-set-time').onclick = function () {
    viz.setDate(new Date(prompt('Enter a date (YYYY-mm-dd)')));
  };
  document.getElementById('btn-set-jd-per-second').onclick = function () {
    viz.setJdPerSecond(parseInt(prompt('Enter jd per second'), 10));
  };
  document.getElementById('btn-faster').onclick = function () {
    viz.setJdDelta(viz.getJdDelta() * 1.5);
  };
  document.getElementById('btn-slower').onclick = function () {
    viz.setJdDelta(viz.getJdDelta() * 0.5);
  };
  
  // Display current date
  const dateElt = document.getElementById('current-date');
  viz.onTick = function () {
    const d = viz.getDate();
    dateElt.innerHTML = d.toLocaleDateString();
  };