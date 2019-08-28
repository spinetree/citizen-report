'use strict';

/**
 * Turn on event listeners
 */

enableEventListeners();

function enableEventListeners() {
  var setPriorityForm = document.getElementById('set-priority');

  setPriorityForm.addEventListener('submit', setPriorityEventListener);
}

/**
 * Event listeners
 */

function setPriorityEventListener(e) {
  e.preventDefault();

  setPriorityEventHander(e);
}

/**
 * Event Handlers
 */

function setPriorityEventHander(e) {}
