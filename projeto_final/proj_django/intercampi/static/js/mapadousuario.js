/*alet("Bem vindo ao mapa")*/
var mapa = new ol.Map({
  target:'mapa',
  view: new ol.View({
    center: ol.proj.fromLonLat([-49.25723,-25.43177]),
    zoom: 15
  })
})

var layerOsm = new ol.layer.Tile({
  name: 'osm',
  visible:'true',
  source:new ol.source.OSM()
});

var layerPosicao = new ol.layer.Image({
    title: "Posicao",
    displayInLayerSwitcher: true,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:posicao',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerPontosDeOnibus = new ol.layer.Image({
  title: "Ponto de onibus",
  displayInLayerSwitcher: true,
  source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:pontosdeonibustcc',
      'SRS':'EPSG:900913',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerRotaAtual = new ol.layer.Image({
  title: "Rota Atual",
  displayInLayerSwitcher: true,
  source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:rota_atual',
      'SRS':'EPSG:900913',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})
var layerLinhas = new ol.layer.Image({
  title: "Linhas",
  displayInLayerSwitcher: true,
  source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:linhas',
      'SRS':'EPSG:900913',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})
var switcher = new ol.control.LayerSwitcher({
    target:$(".layerSwitcher").get(0),
    // displayInLayerSwitcher: function (l) { return false; },
    show_progress:true,
    extent: true,
    trash: true,
    oninfo: function (l) { alert(l.get("title")); }
  });

mapa.addLayer(layerOsm);
mapa.addLayer(layerPosicao);
mapa.addLayer(layerPontosDeOnibus);
mapa.addLayer(layerRotaAtual);
mapa.addLayer(layerLinhas);

var ctrl = new ol.control.LayerSwitcher();
 mapa.addControl(ctrl);
 ctrl.on('toggle', function(e) {
   console.log('Collapse layerswitcher', e.collapsed);
 });

// Add a new button to the list
var switcher = new ol.control.LayerSwitcher({
   target:$(".layerSwitcher").get(0),
   // displayInLayerSwitcher: function (l) { return false; },
   show_progress:true,
   extent: true,
   trash: true,
   oninfo: function (l) { alert(l.get("title")); }
 });

switcher.on('drawlist', function(e) {
  var layer = e.layer;
  $('<div>').text('?')// addClass('layerInfo')
    .click(function(){
      alert(layer.get('title'));
    })
    .appendTo($('> .ol-layerswitcher-buttons', e.li));
});
// Add a button to show/hide the layers
var button = $('<div class="toggleVisibility" title="show/hide">')
  .text("Show/hide all")
  .click(function() {
    var a = map.getLayers().getArray();
    var b = !a[0].getVisible();
    if (b) button.removeClass("show");
    else button.addClass("show");
    for (var i=0; i<a.length; i++) {
      a[i].setVisible(b);
    }
  });
switcher.setHeader($('<div>').append(button).get(0))


mapa.addControl(switcher);
// Insert mapbox layer in layer switcher
/*function displayInLayerSwitcher(b) {
  mapbox.set('displayInLayerSwitcher', b);
}
*/
