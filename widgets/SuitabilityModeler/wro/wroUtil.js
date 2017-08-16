// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/Deferred","esri/layers/RasterFunction"],function(n,g,k,h){return{serverSideRasterFunctionName:"WeightedOverlay_7_1_9_colormap",applyItemDataRenderingRule:function(a,d,b){var c;try{this.isServerSideWRORule(b)?(c=new h,c.functionName=b.renderingRule.rasterFunction||b.renderingRule.functionName,c.arguments=b.renderingRule.rasterFunctionArguments||b.renderingRule.arguments,c.variableName=b.renderingRule.variableName,a.setRenderingRule(c,!1)):b&&b.renderingRule&&
d.supportsClientSideWRO&&(c=new h(b.renderingRule),a.setRenderingRule(c,!1))}catch(e){console.error(e)}},hasServerSideWROFunction:function(a){var d=this.serverSideRasterFunctionName;return a&&(this.isServerSideWRORule(a)||a.rasterFunctionInfos&&g.some(a.rasterFunctionInfos,function(a){if(a&&a.name===d)return!0}))?!0:!1},isServerSideWRORule:function(a){var d=this.serverSideRasterFunctionName;return a&&a.renderingRule&&a.renderingRule.rasterFunction&&a.renderingRule.rasterFunction===d||a&&a.renderingRule&&
a.renderingRule.functionName&&a.renderingRule.functionName===d?!0:!1},makeItemData:function(a,d){var b=a.designModelView.weightedOverlayService.modelToImageServiceLayer(d,{modelTitle:"New Model"}),c={};n.mixin(c,b);delete c.id;delete c.url;delete c.opacity;delete c.title;return c},newWROInfo:function(){return{isGETen3:!1,isWROLayer:!1,isWROModel:!1,hasServerSideWROFunction:!1,supportsClientSideWRO:!1}},validateWROLayer:function(a,d,b,c,e){var f=new k,h="Title Url Description InputRanges OutputValues NoDataRanges RangeLabels NoDataRangeLabels".split(" "),
l=!1;b.isGETen3=10.3<=d.version;b.hasServerSideWROFunction=this.hasServerSideWROFunction(d);if(b.isGETen3){d.allowRasterFunction||c.push(a.wro.validation.notAllowRasterFunction);d.defaultResamplingMethod&&"Nearest"===d.defaultResamplingMethod||c.push(a.wro.validation.notNearestResampling);var m=[];d.fields&&(m=d.fields);g.forEach(h,function(b){g.some(m,function(a){return b===a.name})||c.push(a.wro.validation.missingFieldPattern.replace("{field}",b))});0<c.length&&!e&&(l=!1);l?d.getKeyProperties().then(function(d){"undefined"!==
typeof d&&null!==d&&d.IsWeightedOverlay?b.supportsClientSideWRO=!0:c.push(a.wro.validation.notIsWeightedOverlayProp);f.resolve()},function(a){f.reject(a)}):(0===c.length&&(b.supportsClientSideWRO=!0),f.resolve())}else b.hasServerSideWROFunction||c.push(a.wro.validation.notAWroService),f.resolve();return f},waitForLayer:function(a,d){var b=new k,c=[];if(a.loaded)return b.resolve(a),b;if(a.loadError)return b.reject(a.loadError),b;var e=function(){g.forEach(c,function(a){a.remove()})};c.push(a.on("load",
function(a){e();b.resolve(a.layer)}));c.push(a.on("error",function(a){e();a=a.error;try{a.message&&-1!==a.message.indexOf("Unable to complete")?(console.warn("layerAccessError",a),b.reject(Error(d.wro.validation.inaccessible))):b.reject(a)}catch(p){b.reject(a)}}));return b}}});