//= require 'utils'
//= require 'countriesUnSort'

$(function() {
  $('.geo-countries').each(function() {
    window.geoSelect.setCountryList(this);
  });

  $('.geo-countries, .geo-states, .geo-regions, .geo-cities').each(function() {
    this.addEventListener("change", function(event) {
      window.geoSelect.listChildren(event.target);
    });
  });
});