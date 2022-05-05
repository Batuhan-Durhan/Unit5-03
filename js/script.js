// Copyright (c) 2022 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: April 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-Unit5-01-HTML-Slider-Example/sw.js",
    {
      scope: "/ICS2O-Unit5-01-HTML-Slider-Example/",
    }
  )
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  const rratedmovie = parseInt(document.getElementById("slider").value)
  const pgratedmovie = parseInt(document.getElementById("slider").value)
  const gratedmovie = parseInt(document.getElementById("slider").value)

  if (slider.value >= 17) {
    document.getElementById("age").innerHTML = "Age is " + rratedmovie + " R rated movie"
  }

  else if (slider.value >= 13) {
    document.getElementById("age").innerHTML = "Age is " + pgratedmovie + " PG rated movie"
  }

  if (slider.value < 13) {
    document.getElementById("age").innerHTML = "Age is " + gratedmovie + " G rated movie"
  }
}
