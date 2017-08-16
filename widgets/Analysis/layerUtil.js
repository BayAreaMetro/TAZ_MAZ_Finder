// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/array dojo/promise/all dojo/Deferred esri/layers/FeatureLayer esri/layers/GeoRSSLayer esri/layers/WFSLayer jimu/LayerInfos/LayerInfos".split(" "),function(l,f,m,n,h,p,q,r){var k={getLayerObjects:function(){var a=new n,d=[];r.getInstanceSync().traversal(function(c){d.push(c)});var e=f.map(d,function(c){var g;return c.getItemInfo().then(function(b){b&&b.originItemInfo&&(g=b.originItemInfo)}).then(function(){return c.getLayerType()}).then(function(b){"GeoRSSLayer"===
b&&(c.isLeaf()||f.forEach(c.getSubLayers(),function(b){b.layerObject.name||(b.layerObject.name=b.title)}));return c.getLayerObject()}).then(function(b){if(b)return b.itemInfo=g,b})});m(e).then(function(c){var g=[];f.forEach(c,function(b,c){if(b instanceof h&&"esri.layers.StreamLayer"!==b.declaredClass||b instanceof p)b.id=b.id||d[c].id,g.push(b);else if(b instanceof q){var a=k.createFeatureCollectionJsonFromWFS(b),a=new h(a,{mode:h.MODE_SNAPSHOT,outFields:["*"]});a.id=b.id||d[c].id;a.title=b._layerName;
a.name=b._layerName;a.capabilities?-1===a.capabilities.indexOf("Extract")&&(a.capabilities+=",Extract"):a.capabilities="Extract";g.push(a)}});a.resolve(g)},function(){a.resolve([])});return a},getMainGeometryType:function(a){var d=0,e=0,c=0;f.forEach(a.graphics,function(a){"point"===a.geometry.type?d++:"polyline"===a.geometry.type?e++:"polygon"===a.geometry.type&&c++});return d>e&&d>c?"esriGeometryPoint":e>d&&e>c?"esriGeometryPolyline":"esriGeometryPolygon"},createFeatureCollectionJsonFromWFS:function(a){var d=
k.getMainGeometryType(a),e={layerDefinition:null,featureSet:{features:[],geometryType:d}};e.layerDefinition={geometryType:d,objectIdField:"__OBJECTID",type:"Feature Layer",typeIdField:"",drawingInfo:{renderer:{type:"simple",symbol:("esriGeometryPoint"===d?a._pointSymbol:"esriGeometryPolyline"===d?a._lineSymbol:a._polygonSymbol).toJson()},fixedSymbols:!0},fields:[{name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID"}],types:[],capabilities:"Query"};f.forEach(a.fields,function(a){-1<f.indexOf(["esriFieldTypeInteger",
"esriFieldTypeDouble","esriFieldTypeDate","esriFieldTypeString"],a.type)&&e.layerDefinition.fields.push(l.clone(a))});var c=[];f.forEach(a.graphics,function(a,b){var d=l.clone(a.attributes);d.__OBJECTID=b;c.push({geometry:a.geometry.toJson(),attributes:d})});e.featureSet.features=c;return e}};return k});