/*alet("Bem vindo ao mapa")*/
var mapa = new ol.Map({
  target:'mapa',
  view: new ol.View({
    center: ol.proj.fromLonLat([-49.25723,-25.43177]),
    zoom: 14
  })
});

var CartoDBLight = new ol.layer.Tile({
  name: 'CartoDB Light',
  visible:'true',
  source:new ol.source.OSM({"url" : "http://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" })
});
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
var layerPosicaoAtual = new ol.layer.Image({
    title: "Posicao Atual",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Posicao_atual',
      'SRS':'EPSG:900913',
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

var layerIntercampi1 = new ol.layer.Image({
    title: "Intercampi I",
    displayInLayerSwitcher: true,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:INTERCAMPI_I',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})
var layerIntercampi2 = new ol.layer.Image({
    title: "Intercampi II",
    displayInLayerSwitcher: true,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:INTERCAMPI_II',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})
var layerIntercampi3 = new ol.layer.Image({
    title: "Intercampi III",
    displayInLayerSwitcher: true,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:INTERCAMPI_III',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})
var layerIntercampi4 = new ol.layer.Image({
    title: "Intercampi IV",
    displayInLayerSwitcher: true,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:INTERCAMPI_IV',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})
var layerIntercampiextra = new ol.layer.Image({
    title: "Intercampi Extra",
    displayInLayerSwitcher: true,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:INTERCAMPI_EXTRA',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})
var layerIntercampiferias = new ol.layer.Image({
    title: "Intercampi Férias",
    displayInLayerSwitcher: true,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:INTERCAMPI_FERIAS',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerPosicaoAtualII = new ol.layer.Image({
    title: "Intercampi Férias",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
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
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
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
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
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
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
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
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
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
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Posicao_atual_Linha',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerAgrarias = new ol.layer.Image({
    title: "Campus Agrárias",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Agrarias4326',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerJuveve = new ol.layer.Image({
    title: "Campus Juveve",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Juveve4326',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerPolitecnico = new ol.layer.Image({
    title: "Campus Politecnico",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Politecnico4326',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerReboucas = new ol.layer.Image({
    title: "Campus Reboucas",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Reboucas4326',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerPredioHistorico = new ol.layer.Image({
    title: "Campus PredioHistorico",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:PredioHistorico4326',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerReitoria = new ol.layer.Image({
    title: "Campus Reitoria",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Reitoria4326',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerBotanico = new ol.layer.Image({
    title: "Campus Botanico",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:Botanico4326',
    },
    ratio:1,
    serverType: 'geoserver'
  })
})

var layerDeArtes = new ol.layer.Image({
    title: "Campus DeArtes",
    displayInLayerSwitcher: false,
    source: new ol.source.ImageWMS({
    url: 'http://200.17.225.171:8081/geoserver/intercampi_app/wms',
    params: {
      'LAYERS':'intercampi_app:DeArtes4326',
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
mapa.addLayer(CartoDBLight);
mapa.addLayer(layerAgrarias);
mapa.addLayer(layerDeArtes);
mapa.addLayer(layerBotanico);
mapa.addLayer(layerReboucas);
mapa.addLayer(layerJuveve);
mapa.addLayer(layerPolitecnico);
mapa.addLayer(layerPredioHistorico);
mapa.addLayer(layerReitoria);
mapa.addLayer(layerIntercampiferias);
mapa.addLayer(layerIntercampiextra);
mapa.addLayer(layerIntercampi4);
mapa.addLayer(layerIntercampi3);
mapa.addLayer(layerIntercampi2);
mapa.addLayer(layerIntercampi1);
mapa.addLayer(layerPontosDeOnibus);
mapa.addLayer(layerRotaAtual);
mapa.addLayer(layerPosicao);
mapa.addLayer(layerPosicaoAtual);
mapa.addLayer(layerPosicaoAtualII);
mapa.addLayer(layerPosicaoAtualIII);
mapa.addLayer(layerPosicaoAtualIV);
mapa.addLayer(layerPosicaoAtualExtra);
mapa.addLayer(layerPosicaoAtualFerias);
mapa.addLayer(layerPosicaoAtual_Linha)

setInterval(function(){
  layerPosicao.getSource().updateParams({"time": Date.now()})
  layerRotaAtual.getSource().updateParams({"time": Date.now()})
  layerPosicaoAtual.getSource().updateParams({"time": Date.now()})
  layerPosicaoAtualII.getSource().updateParams({"time": Date.now()})
  layerPosicaoAtualIII.getSource().updateParams({"time": Date.now()})
  layerPosicaoAtualIV.getSource().updateParams({"time": Date.now()})
  layerPosicaoAtualExtra.getSource().updateParams({"time": Date.now()})
  layerPosicaoAtualFerias.getSource().updateParams({"time": Date.now()})
  layerPosicaoAtual_Linha.getSource().updateParams({"time": Date.now()})
  console.log('update')

},2000);

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
    var a = mapa.getLayers().getArray();
    var b = !a[0].getVisible();
    if (b) button.removeClass("show");
    else button.addClass("show");
    for (var i=0; i<a.length; i++) {
      a[i].setVisible(b);
    }
  });
switcher.setHeader($('<div>').append(button).get(0))

mapa.addControl(switcher);


var style = [new ol.style.Style({
       image: new ol.style.Icon( /** @type {olx.style.IconOptions} */ ({
         anchor: [0.5, 33], // 33 é o largura da imagem
         anchorXUnits: 'fraction',
         anchorYUnits: 'pixels',
         src: 'https://icomoon.io/iconsabf18a1/16/295.svg'
       }))
     }),
     new ol.style.Style({ /// sombra do onibus
       image: new ol.style.Shadow({
         radius: 15,
       }),
       stroke: new ol.style.Stroke({
         color: [0, 0, 0, 0.3],
         width: 2
       }),
       fill: new ol.style.Fill({
         color: [0, 0, 0, 0.3]
       }),
       zIndex: -1
     })
   ];

   var nome_da_rota = 'intercampi_app:Posicao_atual_Linha'; //'intercampi_app:linhas'; //nome do seu layer

   var source = new ol.source.Vector({
     format: new ol.format.GeoJSON(),
     url: function(extent) {
       return 'http://200.17.225.171:8081/geoserver/wfs?service=WFS&' +
         'version=1.1.0&request=GetFeature&typename=' + nome_da_rota + '&' +
         'outputFormat=application/json&srsname=EPSG:3857&' +
         ',EPSG:3857';
     },
     strategy: ol.loadingstrategy.bbox
   });

   var styleFunction = function(feature) {
     var geometry = feature.getGeometry();
     var styles = [
       // linestring
       new ol.style.Style({
         stroke: new ol.style.Stroke({
           color: '#000000',
           width: 2
         })
       })
     ];

     var coords = geometry.flatCoordinates;

     for (var j = 0; j < coords.length; j = j + 128) {

       // geometry.forEachSegment(function(start, end) {
       var end_x = coords[j + 2];
       var end_y = coords[j + 3];
       var start_x = coords[j];
       var start_y = coords[j + 1];

       var dx = end_x - start_x;
       var dy = end_y - start_y;
       var rotation = Math.atan2(dy, dx);
       // arrows
       styles.push(new ol.style.Style({
         geometry: new ol.geom.Point([end_x, end_y]),
         image: new ol.style.Icon({
           // src: 'https://openlayers.org/en/v4.6.5/examples/data/arrow.png',
           src:'https://pics.freeicons.io/uploads/icons/png/20642841761530177259-32.png',

           anchor: [0.75, 0.5],
           rotateWithView: true,
           rotation: -rotation
         })
       }));

     }

     // });

     return styles;
   };

   var vector = new ol.layer.Vector({
     source: source,
     style: styleFunction
   });

   mapa.addLayer(vector);


   var path;
   /// esse evento pega as polilinhas toda vez que a rota mudar no banco de dados
   source.on('change', function(e) {
     if (source.getState() === 'ready') {
       path = source.getFeatures()[0];
     }
   });
   var f, anim;

   /// função que faz a animação da rota
   function animateFeature() {
     if (f) source.removeFeature(f); /// remove o ultimo onibus da rota, se ele existir
     if (path) {

       f = new ol.Feature(new ol.geom.Point([0, 0])); /// cria um ponto com qualquer coordenada para representacao do onibus

       if ($("#rotation").prop('checked')) f.setStyle(style);
       else f.setStyle(style);
       anim = new ol.featureAnimation.Path({
         path: path, //define o caminho da animacao
         rotate: false, // define se o icone rotaciona conforme a rota
         easing: 'linear', // define como acontece a movimentacao
         speed: 0.5, // define a velocidade da animacao
         revers: false //define se a rota comeca do final
       });

       source.addFeature(f);


       anim.on('animating', (e) => {
         // pode desabilitar isso quando tiver varios onibus visualizados ao mesmo tempo
         mapa.getView().setCenter(e.geom.getCoordinates()) // modifica o centro do mapa conforme a posicao do onibus
         // map.getView().setRotation(e.rotation||0) /// modifica a rotacao da tela conforme a rota
       })

       vector.animateFeature(f, anim);
     }
   }

   // funcao que repete a animacao do onibus
   for (var i = 0; i < 3; i++) {
     // setTimeout (animateFeature, i*1500);
   }
