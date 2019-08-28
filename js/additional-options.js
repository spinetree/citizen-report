'use strict';

document.getElementById('option-details').innerHTML = 'Examples: potholes, bridge collapses, cracked roads, snow and ice on the roads.';

function additionalOptions(){
  var i = document.getElementById('selection').value;

  if (i === 'road-conditions') {
    document.getElementById('option-details').innerHTML = 'Examples: potholes, bridge collapses, cracked roads, snow and ice on the roads.';
  }
  if (i === 'traffic') {
    document.getElementById('option-details').innerHTML = 'Examples: obstacles in the road, traffic signs obstructed/damaged, malfunctioning/damaged signal lights.';
  }
  if (i === 'power') {
    document.getElementById('option-details').innerHTML = 'Examples: broken street lights, power line down, power outage.';
  }
  if (i === 'water') {
    document.getElementById('option-details').innerHTML = 'Examples: busted water vain, broken fire hydrant, flooded/inflated roads,';
  }
  if (i === 'park') {
    document.getElementById('option-details').innerHTML = 'Examples: broken/damaged play set, malfunctioning restrooms.';
  }
  if (i === 'others') {
    document.getElementById('option-details').innerHTML = 'If you do not think your condition fits the above criteria, please specify down below.';
  }
}

var selectionEvent = document.getElementById('selection');
selectionEvent.addEventListener('change', additionalOptions);
