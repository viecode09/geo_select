//= require 'utils'

$(function() {
  $('.geo-countries').each(function() {
    window.geoSelect.setCountryList(this);
  });

  $('.geo-states, geo-regions, geo-cities').each(function() {
    this.addEventListener("change", function(event) {
      window.geoSelect.listChildren(event.target);
    });
  });
});