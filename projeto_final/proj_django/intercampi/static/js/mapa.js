/*alet("Bem vindo ao mapa")*/
var mapa = new ol.Map({
  target:'mapa',
  view: new ol.View({
    center: ol.proj.fromLonLat([-49.26188,-25.42601]),
    zoom: 16
  })
})

var layerOsm = new ol.layer.Tile({
  name: 'osm',
  visible:'true',
  source:new ol.source.OSM()
});

var layerPosicao = new ol.layer.Image({
  source: new ol.source.ImageWMS({
    url: 'http://localhost:8082/geoserver/intercampi/wms',
    params: {
      'LAYERS':'intercampi:posicao',
    },
    ratio:1,
    serverType: 'geoserver'
  })

})
var layerLinhas = new ol.layer.Image({
  source: new ol.source.ImageWMS({
    url: 'http://localhost:8082/geoserver/intercampi/wms',
    params: {
      'LAYERS':'intercampi:linhas',
    },
    ratio:1,
    serverType: 'geoserver'
  })

})

mapa.addLayer(layerOsm);
mapa.addLayer(layerPosicao);
mapa.addLayer(layerLinhas);

function inserePonto(posicao){
  var json = {"id_vg":id_viagem, "ponto":[posicao[0],posicao[1]], "nome_linha":nome_linha}
  $.ajax(
    {
      url:"insereposicao",
      type:"POST",
      headers:{
        "X-CSRFToken":token
      },
      data:json,
      dataType:'json',
      sucess: function(result){
        layerPosicao.getSource(),updateParams({"time": Date.now()})
        layerLinhas.getSource(),updateParams({"time": Date.now()})
      },
      error: function(error){
        alert(error)
      }
    }
  )
}

var geolocation = new ol.Geolocation({
  /*projection: view.getProjection(),*/
  tracking: true
});


mapa.on('click', setInterval(function(){
  /*Set Interval*/
      /*var coordenadas = e.coordinate;
      console.log(e.coordinate)
      console.log(coordenadas);*/
      var position = geolocation.getPosition();

      console.log(position);
      /*var coordenadasSirgas = ol.proj.transform(coordenadas, 'ESPG:3857','ESPG:4326')*/
      inserePonto(position)
},5000));
