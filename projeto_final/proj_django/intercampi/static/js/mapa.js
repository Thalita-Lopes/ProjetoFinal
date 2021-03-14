/*alet("Bem vindo ao mapa")*/
var mapa = new ol.Map({
  target:'mapa',
  view: new ol.View({
    center: ol.proj.fromLonLat([-49.26188,-25.42601]),
    zoom: 16
  })
})

var layerCartoDB = new ol.layer.Tile({
  name: 'CartoDB Light',
  visible:'true',
  source:new ol.source.OSM({"url" : "http://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" })
});

var layerPosicao = new ol.layer.Image({
  source: new ol.source.ImageWMS({
    url: 'https://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi:posicao',
      'SRS':'EPSG:900913',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerRotaAtual = new ol.layer.Image({
  source: new ol.source.ImageWMS({
    url: 'https://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:rota_atual',
      'SRS':'EPSG:900913',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

//Camadas de POSICAO Atual
var layerPosicaoAtualII = new ol.layer.Image({
    title: "Intercampi Férias",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'https://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Posicao_atualII',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerPosicaoAtualIII = new ol.layer.Image({
    title: "Intercampi Férias",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'https://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Posicao_atualIII',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerPosicaoAtualIV = new ol.layer.Image({
    title: "Intercampi Férias",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'https://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Posicao_atualIV',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})
var layerPosicaoAtualExtra = new ol.layer.Image({
    title: "Intercampi Férias",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'https://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Posicao_atualExtra',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerPosicaoAtualFerias = new ol.layer.Image({
    title: "Intercampi Férias",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'https://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Posicao_atualFerias',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})
var layerPosicaoAtual_Linha = new ol.layer.Image({
    title: "Posicao Atual Intercampi",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'https://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Posicao_atual_Linha',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})
mapa.addLayer(layerCartoDB);
//mapa.addLayer(layerPosicao);
mapa.addLayer(layerRotaAtual);
mapa.addLayer(layerPosicaoAtual);
mapa.addLayer(layerPosicaoAtualII);
mapa.addLayer(layerPosicaoAtualIII);
mapa.addLayer(layerPosicaoAtualIV);
mapa.addLayer(layerPosicaoAtualExtra);
mapa.addLayer(layerPosicaoAtualFerias);
mapa.addLayer(layerPosicaoAtual_Linha)

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
        layerPosicao.getSource().updateParams({"time": Date.now()})
        layerRotaAtual.getSource().updateParams({"time": Date.now()})
        layerPosicaoAtualII.getSource().updateParams({"time": Date.now()})
        layerPosicaoAtualIII.getSource().updateParams({"time": Date.now()})
        layerPosicaoAtualIV.getSource().updateParams({"time": Date.now()})
        layerPosicaoAtualExtra.getSource().updateParams({"time": Date.now()})
        layerPosicaoAtualFerias.getSource().updateParams({"time": Date.now()})
        layerPosicaoAtual_Linha.getSource().updateParams({"time": Date.now()})
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

var intervalo = setInterval(function(){

      var position = geolocation.getPosition();

      console.log(position);

      inserePonto(position);
},4000);

mapa.on('click', intervalo);

function Pararfuncao(){
  clearInterval(intervalo);
  alert('Compartilhamento encerrado!')
  location.href = 'https://200.17.225.161/home'
  var json = {"id_vg":id_viagem, "nome_linha":nome_linha}
  $.ajax(
    {
      url:"pararinsercao",
      type:"POST",
      headers:{
        "X-CSRFToken":token
      },
      data:json,
      dataType:'json',
      sucess: function(result){

      },
      error: function(error){
        alert(error)
      }
    }
  )

}
