window.geoSelect = {
  wipeData: function (geonameObj) {
    return [geonameObj["name"], geonameObj["geonameId"]];
  },
  addOptions: function (element, data) {
    element.options.length = 0;
    var firstOptionHTML = (data.length > 0) ? (element.getAttribute('geo-default-option-HTML') || 'Select') : 'No Data Available';
    element.options[element.options.length] = new Option(firstOptionHTML, element.getAttribute('geo-default-option-value') || '');
    for(var i = 0; i < data.length; i++){
      element.options[element.options.length] = new Option(data[i][0], data[i][0])
      element.options[element.options.length].setAttribute('geo-code', data[i][1]);
    }
  },
  readCountries: function (element, fileName) {
    $.getJSON("<%= asset_path '" + fileName + ".json' %>", function(data) {
      this.addOptions(element, data);
    });
  },
  setCountryList: function (element) {
    var fileName = (element.getAttribute('geo-sort') != undefined && element.getAttribute('geo-sort').toUpperCase == 'CONTINENT') ? 'countries' : 'countriesUnSort';
    this.readCountries(element, fileName);
  },
  listChildren: function (argument) {
    var geo_code = element.options[element.selectedIndex].getAttribute('geo-code');
    $.getJSON("http://www.geonames.org/childrenJSON?geonameId=" + geo_code, function(data){
      this.addOptions(element, data["geonames"].map(wipeData).sort());
    });
  }
};
