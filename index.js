var map = L.map('map').setView([36.87, -100.77], 4);
var layer = L.esri.basemapLayer('Imagery').addTo(map);
var layerLabels;
L.esri.basemapLayer('ImageryLabels').addTo(map);

function setBasemap(basemap) {
  if (layer) {
    map.removeLayer(layer);
  }

  layer = L.esri.basemapLayer(basemap);

  map.addLayer(layer);

  if (layerLabels) {
    map.removeLayer(layerLabels);
  }

  if (basemap === 'ShadedRelief'
   || basemap === 'Oceans'
   || basemap === 'Gray'
   || basemap === 'DarkGray'
   || basemap === 'Terrain'
 ) {
    layerLabels = L.esri.basemapLayer(basemap + 'Labels');
    map.addLayer(layerLabels);
  } else if (basemap.includes('Imagery')) {
    layerLabels = L.esri.basemapLayer('ImageryLabels');
    map.addLayer(layerLabels);
  }
}

function changeBasemap(basemaps){
  var basemap = basemaps.value;
  setBasemap(basemap);
}

var myIcon = L.icon({
    iconUrl: './brycelogo.svg',
    iconSize: [100, 100]
});

L.marker([40.5, -100], {title:'hello', icon: myIcon}).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .on('click', function(e) {
        console.log('penguin', e.latlng)
    } );
    // .openPopup();

    L.marker([40.5, -110], {title:'hello'}).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .on('click', function(e) {
        console.log('marker', e.latlng)
    } );
    // .openPopup();
