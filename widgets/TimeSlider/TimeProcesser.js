// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/config dojo/Evented dijit/_WidgetBase dojo/when dojo/promise/all dojo/Deferred esri/request moment/moment dojo/date/locale dojo/i18n esri/lang esri/TimeExtent".split(" "),function(u,e,v,w,x,y,n,p,z,A,q,g,r,B,t){var l=u([y,x],{nls:null,config:null,map:null,layerInfosObj:null,setLayerInfosObj:function(a){this.layerInfosObj=a},_getUpdatedFullTime:function(){var a=0,c,b,d=[],a=0;for(c=this.map.layerIds.length;a<c;a++)b=this.map.layerIds[a],
b=this.map.getLayer(b),d.push(this._getUpdatedTime(b));a=0;for(c=this.map.graphicsLayerIds.length;a<c;a++)b=this.map.graphicsLayerIds[a],b=this.map.getLayer(b),d.push(this._getUpdatedTime(b));return p(d).then(e.hitch(this,function(a){return this._getFullTimeExtent(a)}))},_getFullTimeExtent:function(a){var c=null;v.forEach(a,e.hitch(this,function(a){a&&(c?(c.startTime>a.startTime&&(c.startTime=new Date(a.startTime.getTime())),c.endTime<a.endTime&&(c.endTime=new Date(a.endTime.getTime()))):c=new t(new Date(a.startTime.getTime()),
new Date(a.endTime.getTime())))}));return c},_getUpdatedTime:function(a){if(a&&a.url&&this.hasLiveData(a)){var c=null;return A({url:a.url,callbackParamName:"callback",content:{f:"json",returnUpdates:!0}}).then(e.hitch(this,function(a){a.timeExtent&&2===a.timeExtent.length&&(c=new t,c.startTime=new Date(a.timeExtent[0]),c.endTime=new Date(a.timeExtent[1]))})).always(e.hitch(this,function(){return n(c||e.getObject("timeInfo.timeExtent",!1,a)||null)}))}return n(e.getObject("timeInfo.timeExtent",!1,a)||
null)},getUpdatedFullTime:function(){var a=0,c,b,d=[],a=0;for(c=this.map.layerIds.length;a<c;a++)b=this.map.layerIds[a],b=this.map.getLayer(b),d.push(this._getUpdatedTime(b));a=0;for(c=this.map.graphicsLayerIds.length;a<c;a++)b=this.map.graphicsLayerIds[a],b=this.map.getLayer(b),d.push(this._getUpdatedTime(b));return p(d).then(e.hitch(this,function(a){return this._getFullTimeExtent(a)}))},needUpdateFullTime:function(){var a=0,c,b,a=0;for(c=this.map.layerIds.length;a<c;a++)if(b=this.map.layerIds[a],
b=this.map.getLayer(b),this.hasLiveData(b))return!0;a=0;for(c=this.map.graphicsLayerIds.length;a<c;a++)if(b=this.map.graphicsLayerIds[a],b=this.map.getLayer(b),this.hasLiveData(b))return!0;return!1},hasLiveData:function(a){return a&&a.useMapTime&&a.timeInfo&&a.timeInfo.hasLiveData},setTimeSlider:function(a){this.timeSlider=a},_getTimeFormatLabel:function(a){var c=this.nls.timeExtent,b=null,d=null,f="",e="";if(!a&&this.timeSlider)2===this.timeSlider.thumbCount?(b=this.timeSlider.timeStops[0],d=this.timeSlider.timeStops[1]):
b=this.timeSlider.timeStops[0];else if(a||this.timeSlider)b=a.startTime,0<a.endTime.getTime()-a.startTime.getTime()&&(d=a.endTime);else return"";if("auto"===this.config.timeFormat||"Custom"===this.config.timeFormat&&""===this.config.customDateFormat){var m=null,k=a=null,h=!1,f=l.localeDic[w.locale]||l.localeDic.en;d&&b.getFullYear()===d.getFullYear()?(b.getMonth()===d.getMonth()?b.getDate()===d.getDate()?a=b.getHours()===d.getHours()?b.getMinutes()===d.getMinutes()?b.getSeconds()===d.getSeconds()?
f.millisecondTimePattern:f.secondTimePattern:f.minuteTimePattern:f.minuteTimePattern:(2>d.getDate()-b.getDate()&&(a=f.minuteTimePattern),h=!0):h=!0,k="long"):d&&10<d.getFullYear()-b.getFullYear()?(m=f.yearPattern,h=!0):(h=!0,k="long");f=g.format(b,{datePattern:m,formatLength:k,selector:"date"});a&&(b=g.format(b,{timePattern:a,selector:"time"}),f=r.getLocalization("dojo.cldr","gregorian")["dateTimeFormat-medium"].replace(/\{1\}/g,f).replace(/\{0\}/g,b));d&&(h&&(e=g.format(d,{datePattern:m,formatLength:k,
selector:"date"})),a&&(b=g.format(d,{timePattern:a,selector:"time"}),e=h&&a?r.getLocalization("dojo.cldr","gregorian")["dateTimeFormat-medium"].replace(/\{1\}/g,e).replace(/\{0\}/g,b):b))}else a="Custom"===this.config.timeFormat?this.config.customDateFormat:this.config.timeFormat,f=q(b.getTime()).format(a),d&&(e=q(d.getTime()).format(a));return c=d?B.substitute({FROMTIME:f,ENDTIME:e},c):f+""},findDefaultInterval:function(a){var c;a=(a.endTime.getTime()-a.startTime.getTime())/10;31104E8<a?(a=Math.round(a/
31104E8),c="esriTimeUnitsCenturies"):31104E7<a?(a=Math.round(a/31104E7),c="esriTimeUnitsDecades"):31104E6<a?(a=Math.round(a/31104E6),c="esriTimeUnitsYears"):2592E6<a?(a=Math.round(a/2592E6),c="esriTimeUnitsMonths"):6048E5<a?(a=Math.round(a/6048E5),c="esriTimeUnitsWeeks"):864E5<a?(a=Math.round(a/864E5),c="esriTimeUnitsDays"):36E5<a?(a=Math.round(a/36E5),c="esriTimeUnitsHours"):6E4<a?(a=Math.round(a/6E4),c="esriTimeUnitsMinutes"):1E3<a?(a=Math.round(a/1E3),c="esriTimeUnitsSeconds"):(a=Math.round(a),
c="esriTimeUnitsMilliseconds");return{interval:a,units:c}},getPropsFromMultiLayerInfos:function(a,c){var b={};null===c?(b=a,b.thumbCount=2,b.thumbMovingRate=2E3):(b=c,a.timeExtent[0]<b.timeExtent[0]&&(b.timeExtent[0]=a.timeExtent[0]),a.timeExtent[1]>b.timeExtent[1]&&(b.timeExtent[1]=a.timeExtent[1]));return b},getTsPros:function(){var a=new z,c=this.map&&this.map.itemInfo,b=e.getObject("itemData.widgets.timeSlider.properties",!1,c),d={};if(b)d=e.clone(b),a.resolve(d);else if(c=e.getObject("itemData.operationalLayers",
!1,c)){for(var b=null,d=0,f=c.length;d<f;d++){var g=e.getObject("resourceInfo.timeInfo",!1,c[d]);g&&g.timeExtent&&(b=this.getPropsFromMultiLayerInfos(g,b))}null!==b?(b.startTime=b.timeExtent[0],b.endTime=b.timeExtent[1],b._needToFindDefaultInterval=!0,a.resolve(b)):a.resolve(null)}else a.resolve(null);return a}});l.localeDic={ar:{datePattern:"dd MMMM, yyyy",yearPattern:"yyyy",hourTimePattern:"h a",minuteTimePattern:"h:mm a",secondTimePattern:"h:mm:ss a",millisecondTimePattern:"h:mm:ss:SSS a"},cs:{datePattern:"MMMM d, yyyy",
yearPattern:"yyyy",hourTimePattern:"H",minuteTimePattern:"h:mm",secondTimePattern:"H:mm:ss",millisecondTimePattern:"H:mm:ss:SSS"},da:{datePattern:"d. MMMM yyyy",yearPattern:"yyyy",hourTimePattern:"H",minuteTimePattern:"H:mm",secondTimePattern:"H:mm:ss",millisecondTimePattern:"H:mm:ss:SSS"},de:{datePattern:"d. MMMM yyyy",yearPattern:"yyyy",hourTimePattern:"H",minuteTimePattern:"H:mm",secondTimePattern:"H:mm:ss",millisecondTimePattern:"H:mm:ss:SSS"},el:{datePattern:"d MMMM yyyy",yearPattern:"yyyy",
hourTimePattern:"h",minuteTimePattern:"hh:mm",secondTimePattern:"hh:mm:ss",millisecondTimePattern:"hh:mm:ss:SSS"},es:{datePattern:"d' de 'MMMM' de 'yyyy",yearPattern:"yyyy",hourTimePattern:"H",minuteTimePattern:"H:mm",secondTimePattern:"H:mm:ss",millisecondTimePattern:"H:mm:ss:SSS"},et:{datePattern:"d. MMMM yyyy",yearPattern:"yyyy",hourTimePattern:"H",minuteTimePattern:"H:mm",secondTimePattern:"H:mm:ss",millisecondTimePattern:"H:mm:ss:SSS"},fi:{datePattern:"d. MMMM yyyy",yearPattern:"yyyy",hourTimePattern:"t",
minuteTimePattern:"t:mm a",secondTimePattern:"t:mm:ss",millisecondTimePattern:"h:mm:ss:SSS"},fr:{datePattern:"d MMMM yyyy",yearPattern:"yyyy",hourTimePattern:"HH",minuteTimePattern:"HH:mm",secondTimePattern:"HH:mm:ss",millisecondTimePattern:"HH:mm:ss:SSS"},he:{datePattern:"d, MMMM ,yyyy",yearPattern:"yyyy",hourTimePattern:"h a",minuteTimePattern:"h:mm a",secondTimePattern:"h:mm:ss a",millisecondTimePattern:"h:mm:ss:SSS a"},it:{datePattern:"d MMMM yyyy",yearPattern:"yyyy",hourTimePattern:"H",minuteTimePattern:"H.mm",
secondTimePattern:"H.mm.ss",millisecondTimePattern:"H.mm.ss.SSS"},ja:{datePattern:"yyyy'\u5e74'M'\u6708'd'\u65e5'",yearPattern:"yyyy'\u5e74'",hourTimePattern:"h a",minuteTimePattern:"h:mm a",secondTimePattern:"h:mm:ss a",millisecondTimePattern:"h:mm:ss:SSS a"},ko:{datePattern:"yyyy\ub144 M\uc6d4 d\uc77c",yearPattern:"yyyy\ub144",hourTimePattern:"a h\uc2dc",minuteTimePattern:"a h:mm",secondTimePattern:"a h:mm:ss",millisecondTimePattern:"a h:mm:ss:SSS"},lt:{datePattern:"yyyy MMMM dd",yearPattern:"yyyy",
hourTimePattern:"H a",minuteTimePattern:"HH:mm",secondTimePattern:"HH:mm:ss",millisecondTimePattern:"HH:mm:ss:SSS"},lv:{datePattern:"dd.MM.yyyy",yearPattern:"yyyy",hourTimePattern:"H a",minuteTimePattern:"HH:mm",secondTimePattern:"HH:mm:ss",millisecondTimePattern:"HH:mm:ss:SSS"},nb:{datePattern:"d. MMMM yyyy",yearPattern:"yyyy",hourTimePattern:"H",minuteTimePattern:"H.mm",secondTimePattern:"H.mm.ss",millisecondTimePattern:"H.mm.ss.SSS"},nl:{datePattern:"d. MMMM yyyy",yearPattern:"yyyy",hourTimePattern:"H",
minuteTimePattern:"H:mm",secondTimePattern:"H:mm:ss",millisecondTimePattern:"H:mm:ss:SSS"},pl:{datePattern:"dd-mm-yyyy",yearPattern:"yyyy",hourTimePattern:"hh",minuteTimePattern:"hh:mm",secondTimePattern:"hh:mm:ss",millisecondTimePattern:"hh:mm:ss:SSS"},"pt-br":{datePattern:"d' de 'MMMM' de 'yyyy",yearPattern:"yyyy",hourTimePattern:"H",minuteTimePattern:"h:mm a",secondTimePattern:"H:mm:ss",millisecondTimePattern:"H:mm:ss:SSS"},"pt-pt":{datePattern:"d' de 'MMMM' de 'yyyy",yearPattern:"yyyy",hourTimePattern:"H",
minuteTimePattern:"H:mm",secondTimePattern:"H:mm:ss",millisecondTimePattern:"H:mm:ss:SSS"},ro:{datePattern:"d. MMMM yyyy",yearPattern:"yyyy",hourTimePattern:"H",minuteTimePattern:"H:mm",secondTimePattern:"H:mm:ss",millisecondTimePattern:"H:mm:ss:SSS"},ru:{datePattern:"MMMM d, yyyy",yearPattern:"yyyy",hourTimePattern:"H",minuteTimePattern:"h:mm",secondTimePattern:"h:mm:ss",millisecondTimePattern:"h:mm:ss:SSS"},sv:{datePattern:"MMMM d, yyyy",yearPattern:"yyyy",hourTimePattern:"h a",minuteTimePattern:"h:mm a",
secondTimePattern:"h:mm:ss a",millisecondTimePattern:"h:mm:ss:SSS a"},th:{datePattern:"d MMMM,yyyy",yearPattern:"yyyy",hourTimePattern:"H a",minuteTimePattern:"h:mm a",secondTimePattern:"h:mm:ss a",millisecondTimePattern:"h:mm:ss:SSS a"},tr:{datePattern:"d MMMM yyyy",yearPattern:"yyyy",hourTimePattern:"h a",minuteTimePattern:"h:mm a",secondTimePattern:"h:mm:ss a",millisecondTimePattern:"h:mm:ss:SSS a"},vi:{datePattern:"d MMMM, yyyy",yearPattern:"yyyy",hourTimePattern:"h a",minuteTimePattern:"h:mm a",
secondTimePattern:"h:mm:ss a",millisecondTimePattern:"h:mm:ss:SSS a"},"zh-cn":{datePattern:"yyyy'\u5e74'M'\u6708'd'\u65e5'",yearPattern:"yyyy'\u5e74'",hourTimePattern:"H",minuteTimePattern:"H:mm",secondTimePattern:"H:mm:ss",millisecondTimePattern:"H:mm:ss:SSS"},"zh-hk":{datePattern:"\u5e74\u6708\u65e5",yearPattern:"yyyy",hourTimePattern:"h a",minuteTimePattern:"h:mm a",secondTimePattern:"h:mm:ss a",millisecondTimePattern:"h:mm:ss:SSS a"},"zh-tw":{datePattern:"\u5e74\u6708\u65e5",yearPattern:"yyyy",
hourTimePattern:"h a",minuteTimePattern:"h:mm a",secondTimePattern:"h:mm:ss a",millisecondTimePattern:"h:mm:ss:SSS a"},en:{datePattern:"MMMM d, yyyy",yearPattern:"yyyy",hourTimePattern:"h a",minuteTimePattern:"h:mm a",secondTimePattern:"h:mm:ss a",millisecondTimePattern:"h:mm:ss:SSS a"}};return l});