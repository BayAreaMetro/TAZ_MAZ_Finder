// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define([],function(){var d={bearingFieldPlaces:2,planSettingsOptions:{directionOrAngleType:["northAzimuth","southAzimuth","quadrantBearing"],directionOrAngleUnits:["decimalDegree","degreeMinuteSeconds"],distanceAndLengthUnits:["uSSurveyFeet","meters"],areaUnits:["squareUSSurveyFeet","acres","squareMeters"],circularCurveParameters:["radiusAndChordLength","radiusAndArcLength"]},getQuadrant:function(b){return{"-1":"NE","-2":"SE","-3":"SW","-4":"NW"}[b]},getQuadrantShortcut:function(b){b=b.toUpperCase();
return{NE:"-1",SE:"-2",SW:"-3",NW:"-4"}[b]},getQuadrantShortcutFromDD:function(b){var a;0<=b&&90>=b?a="-1":90<b&&180>=b?a="-2":180<b&&270>b?a="-3":270<=b&&360>b&&(a="-4");return a},getQuadrantAngleFromNADD:function(b){b=d.getQuadrantAngleAndShortcut(b);return b.quadrant.charAt(0)+b.quadrantAngle+b.quadrant.charAt(1)},getSouthAzimuthFromNorthAzimuth:function(b){var a;180<b?a=b-180:180>b?a=b+180:180===b&&(a=0);return a},DMStoDD:function(b){var a,c,d;a=Math.abs(parseFloat(b.degree));c=parseFloat(b.minutes);
d=parseFloat(b.seconds);a=a+c/60+d/3600;b.isNegative&&(a*=-1);return a},DDtoDMS:function(b){var a,c;a=3600*b.angle;b=Math.round(a%60);b=60==b?0:b;c=(a-b)/60;a=Math.round(c%60);a=60==a?0:a;return{degree:Math.round((c-a)/60),minutes:a,seconds:b}},getBearingObjForFormat0:function(b){var a,c;a={};a.degree=parseInt(b[1],10);a.minutes=parseInt(b[2]||0,10);a.seconds=parseInt(b[3]||0,10);a.quadrant=d.getQuadrant("-"+b[4]);a.quadrantShortcut="-"+b[4];"string"===typeof b[1]&&(c="-"===b[1].charAt(0));a.decimalDegrees=
d.DMStoDD({degree:a.degree,minutes:a.minutes,seconds:a.seconds,isNegative:c});return a},getBearingObjForFormat1:function(b){var a,c;a={};a.degree=parseInt(b[2],10);a.minutes=parseInt(b[3]||0,10);a.seconds=parseInt(b[4]||0,10);a.quadrant=b[1]+b[5];a.quadrantShortcut=d.getQuadrantShortcut(b[1]+b[5]);"string"===typeof b[2]&&(c="-"===b[2].charAt(0));a.decimalDegrees=d.DMStoDD({degree:a.degree,minutes:a.minutes,seconds:a.seconds,isNegative:c});return a},getBearingObjForFormat2:function(b){var a,c;a={};
a.degree=parseInt(b[2],10);a.minutes=parseInt(b[3]||0,10);a.seconds=parseInt(b[4]||0,10);a.quadrant=b[1]+b[5];a.quadrantShortcut=d.getQuadrantShortcut(b[1]+b[5]);"string"===typeof b[2]&&(c="-"===b[2].charAt(0));a.decimalDegrees=d.DMStoDD({degree:a.degree,minutes:a.minutes,seconds:a.seconds,isNegative:c});return a},getBearingObjForFormat3:function(b){var a,c;a={};a.degree=parseInt(b[1],10);a.minutes=parseInt(b[2]||0,10);a.seconds=parseInt(b[3]||0,10);"string"===typeof b[1]&&(c="-"===b[1].charAt(0));
a.decimalDegrees=d.DMStoDD({degree:a.degree,minutes:a.minutes,seconds:a.seconds,isNegative:c});a.quadrantShortcut=d.getQuadrantShortcutFromDD(a.decimalDegrees);a.quadrant=d.getQuadrant(a.quadrantShortcut);return a},getBearingObjForFormat4:function(b){var a,c;a=d.DDtoDMS({angle:b[1]});c={};c.degree=a.degree;c.minutes=a.minutes;c.seconds=a.seconds;c.decimalDegrees=b[1];c.quadrantShortcut=d.getQuadrantShortcutFromDD(c.decimalDegrees);c.quadrant=d.getQuadrant(c.quadrantShortcut);return c},getBearingObjForFormat5:function(b){var a,
c;a={};a.degree=parseInt(b[1],10);a.minutes=parseInt(b[2]||0,10);a.seconds=parseInt(b[3]||0,10);"string"===typeof b[1]&&(c="-"===b[1].charAt(0));a.decimalDegrees=d.DMStoDD({degree:a.degree,minutes:a.minutes,seconds:a.seconds,isNegative:c});a.quadrantShortcut=d.getQuadrantShortcutFromDD(a.decimalDegrees);a.quadrant=d.getQuadrant(a.quadrantShortcut);return a},getBearingObjForFormat6:function(b){var a,c;a={};a.degree=parseInt(b[1],10);a.minutes=parseInt(b[2]||0,10);a.seconds=parseInt(b[3]||0,10);a.quadrantShortcut=
b[4];a.quadrant=d.getQuadrant(a.quadrantShortcut);"string"===typeof b[1]&&(c="-"===b[1].charAt(0));a.decimalDegrees=d.DMStoDD({degree:a.degree,minutes:a.minutes,seconds:a.seconds,isNegative:c});return a},getBearingObjForFormat7:function(b){var a,c;a={};a.decimalDegrees=b[2];c=d.DDtoDMS({angle:a.decimalDegrees});a.degree=parseInt(c.degree,10);a.minutes=parseInt(c.minutes||0,10);a.seconds=parseInt(c.seconds||0,10);a.quadrant=b[1]+b[3];a.quadrantShortcut=d.getQuadrantShortcut(a.quadrant);return a},getBearingObjForFormat8:function(b){var a,
c;a={};a.decimalDegrees=b[1];c=d.DDtoDMS({angle:a.decimalDegrees});a.degree=parseInt(c.degree,10);a.minutes=parseInt(c.minutes||0,10);a.seconds=parseInt(c.seconds||0,10);a.quadrantShortcut=b[2];a.quadrant=d.getQuadrant(a.quadrantShortcut);return a},getQuadrantAngleAndShortcut:function(b){var a={};0<=b&&90>=b?(a.quadrantAngle=b,a.quadrant="NE"):90<b&&180>=b?(a.quadrantAngle=180-b,a.quadrant="SE"):180<b&&270>b?(a.quadrantAngle=b-180,a.quadrant="SW"):270<=b&&360>b&&(a.quadrantAngle=360-b,a.quadrant=
"NW");return a},roundSeconds:function(b){b=Number(b);return 10>b?"0"+b:b},honourPopupRounding:function(b,a){var c;if(isNaN(b)||null===b)b=4;c=Math.pow(10,b);c=Math.round(a*c)/c;return c=c.toFixed(b)},convertBearingToOutputFormats:function(b){var a,c,e,f,g;a={};c={};360===b.degree&&(b.degree=0);a=b.decimalDegrees;360===a&&(a=0);c.naDD=a;c.naDDRound=d.honourPopupRounding(d.bearingFieldPlaces,a);360===Number(c.naDDRound)&&(c.naDDRound=0);e=10>b.minutes?"0"+b.minutes:b.minutes;f=b.seconds;0<Number(e)&&
0<Number(d.roundSeconds(f))?c.naDMS=b.degree+"-"+e+"-"+d.roundSeconds(f):0===Number(e)&&0<Number(d.roundSeconds(f))?c.naDMS=b.degree+"-"+e+"-"+d.roundSeconds(f):0<Number(e)&&0===Number(d.roundSeconds(f))?c.naDMS=b.degree+"-"+e+"-00":0===Number(e)&&0===Number(d.roundSeconds(f))&&(c.naDMS=b.degree+"-00-00");b=d.getQuadrantAngleAndShortcut(a);c.qb3DD=b.quadrant.charAt(0)+b.quadrantAngle+b.quadrant.charAt(1);c.qb3DDRound=b.quadrant.charAt(0)+d.honourPopupRounding(d.bearingFieldPlaces,b.quadrantAngle)+
b.quadrant.charAt(1);e=d.DDtoDMS({angle:b.quadrantAngle});f=10>e.minutes?"0"+e.minutes:e.minutes;g=e.seconds;0<Number(f)&&0<Number(d.roundSeconds(g))?c.qb3DMS=b.quadrant.charAt(0)+e.degree+"-"+f+"-"+d.roundSeconds(g)+b.quadrant.charAt(1):0===Number(f)&&0<Number(d.roundSeconds(g))?c.qb3DMS=b.quadrant.charAt(0)+e.degree+"-"+f+"-"+d.roundSeconds(g)+b.quadrant.charAt(1):0<Number(f)&&0===Number(d.roundSeconds(g))?c.qb3DMS=b.quadrant.charAt(0)+e.degree+"-"+f+"-00"+b.quadrant.charAt(1):0===Number(f)&&0===
Number(d.roundSeconds(g))&&(c.qb3DMS=b.quadrant.charAt(0)+e.degree+"-00-00"+b.quadrant.charAt(1));a=d.getSouthAzimuthFromNorthAzimuth(a);360===a&&(a=0);c.saDD=a;c.saDDRound=d.honourPopupRounding(d.bearingFieldPlaces,a);360===Number(c.saDDRound)&&(c.saDDRound=0);a=d.DDtoDMS({angle:a});360===a.degree&&(a.degree=0);b=10>a.minutes?"0"+a.minutes:a.minutes;e=a.seconds;0<Number(b)&&0<Number(d.roundSeconds(e))?c.saDMS=a.degree+"-"+b+"-"+d.roundSeconds(e):0===Number(b)&&0<Number(d.roundSeconds(e))?c.saDMS=
a.degree+"-"+b+"-"+d.roundSeconds(e):0<Number(b)&&0===Number(d.roundSeconds(e))?c.saDMS=a.degree+"-"+b+"-00":0===Number(b)&&0===Number(d.roundSeconds(e))&&(c.saDMS=a.degree+"-00-00");return c},getBearingDetailsOfRequiredFormat:function(b,a){var c={};switch(a){case 0:c=d.getBearingObjForFormat0(b);break;case 1:c=d.getBearingObjForFormat1(b);break;case 2:c=d.getBearingObjForFormat2(b);break;case 3:c=d.getBearingObjForFormat3(b);break;case 4:c=d.getBearingObjForFormat4(b);break;case 5:c=d.getBearingObjForFormat5(b);
break;case 6:c=d.getBearingObjForFormat6(b);break;case 7:c=d.getBearingObjForFormat7(b);break;case 8:c=d.getBearingObjForFormat8(b)}return d.convertBearingToOutputFormats(c)},getBearingFormatArr:function(){var b=[];b.push({regex:/^((?:\-)?(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0))(?:\-(0|[0-5]?\d)\-(0|[0-5]\d))?\-([1-4])$/,type:"degreeMinuteSeconds"});b.push({regex:/^([nNsS])((?:\-)?(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0))(?:\-(0|[0-5]?\d)\-(0|[0-5]\d))?([eEwW])$/,type:"degreeMinuteSeconds"});b.push({regex:/^([nNsS])((?:\-)?(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0))(?:\.([0-5]\d)(?:([0-5]\d))?)?([eEwW])$/,
type:"degreeMinuteSeconds"});b.push({regex:/^((?:\-)?(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0))(?:\.([0-5]\d)(?:([0-5]\d))?)?$/,type:"degreeMinuteSeconds"});b.push({regex:/^((?:(?:\-?)(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0)(?:\.\d+)?)|(?:\-?)(?:\.\d+))$/,type:"decimalDegree"});b.push({regex:/^((?:\-)?(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0))(?:\-(0|[0-5]?\d)\-((?:[0-5]\d)))?$/,type:"degreeMinuteSeconds"});b.push({regex:/^((?:\-)?(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0))(?:\.([0-5]\d)(?:([0-5]\d))?)?(\-[1-4])$/,type:"degreeMinuteSeconds"});
b.push({regex:/^([nNsS])((?:(?:\-?)(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0)(?:\.\d+)?)|(?:\-?)(?:\.\d+))([eEwW])$/,type:"decimalDegree"});b.push({regex:/^((?:(?:\-?)(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0)(?:\.\d+)?)|(?:\-?)(?:\.\d+))(\-[1-4])$/,type:"decimalDegree"});return b},getNorthAzimuthAngle:function(b,a){a=a.toUpperCase();b=Number(b);switch(a){case "-1":case "NE":return(b+360)%360;case "-2":case "SE":return(540-b)%360;case "-3":case "SW":return(540+b)%360;case "-4":case "NW":return(360-b)%360}},convertBearingToNorthAzimuth:function(b,
a,c){switch(a){case 0:a=d.getBearingObjForFormat0(b);a=d.getNorthAzimuthAngle(a.decimalDegrees,"-"+b[4]);a=d.DDtoDMS({angle:a});b[1]=a.degree;b[2]=a.minutes;b[3]=a.seconds;break;case 1:a=d.getBearingObjForFormat1(b);a=d.getNorthAzimuthAngle(a.decimalDegrees,b[1]+b[5]);a=d.DDtoDMS({angle:a});b[2]=a.degree;b[3]=a.minutes;b[4]=a.seconds;break;case 2:a=d.getBearingObjForFormat2(b);a=d.getNorthAzimuthAngle(a.decimalDegrees,b[1]+b[5]);a=d.DDtoDMS({angle:a});b[2]=a.degree;b[3]=a.minutes;b[4]=a.seconds;break;
case 3:"northAzimuth"===c.directionOrAngleType||"quadrantBearing"===c.directionOrAngleType?(a=d.getBearingObjForFormat3(b),a=d.getNorthAzimuthAngle(a.decimalDegrees,"-1"),a=d.DDtoDMS({angle:a}),b[1]=a.degree,b[2]=a.minutes,b[3]=a.seconds):"southAzimuth"===c.directionOrAngleType&&(a=d.getBearingObjForFormat3(b),a=d.getNorthAzimuthAngle(a.decimalDegrees,"-3"),a=d.DDtoDMS({angle:a}),b[1]=a.degree,b[2]=a.minutes,b[3]=a.seconds);break;case 4:"northAzimuth"===c.directionOrAngleType||"quadrantBearing"===
c.directionOrAngleType?b[1]=d.getNorthAzimuthAngle(b[1],"-1"):"southAzimuth"===c.directionOrAngleType&&(b[1]=d.getNorthAzimuthAngle(b[1],"-3"));break;case 5:"northAzimuth"===c.directionOrAngleType?(a=d.getBearingObjForFormat5(b),a=d.getNorthAzimuthAngle(a.decimalDegrees,"-1"),a=d.DDtoDMS({angle:a}),b[1]=a.degree,b[2]=a.minutes,b[3]=a.seconds):"southAzimuth"===c.directionOrAngleType?(a=d.getBearingObjForFormat5(b),a=d.getNorthAzimuthAngle(a.decimalDegrees,"-3"),a=d.DDtoDMS({angle:a}),b[1]=a.degree,
b[2]=a.minutes,b[3]=a.seconds):"quadrantBearing"===c.directionOrAngleType&&(b=null);break;case 6:a=d.getBearingObjForFormat6(b);a=d.getNorthAzimuthAngle(a.decimalDegrees,b[4]);a=d.DDtoDMS({angle:a});b[1]=a.degree;b[2]=a.minutes;b[3]=a.seconds;break;case 7:b[2]=d.getNorthAzimuthAngle(b[2],b[1]+b[3]);break;case 8:b[1]=d.getNorthAzimuthAngle(b[1],b[2])}return b},categorizeBearingFormat:function(b,a){var c,e,f;b=b.toString();c=d.getBearingFormatArr();for(f=0;f<c.length;f++)if(c[f].type===a.directionOrAngleUnits&&
(e=c[f].regex.exec(b.trim()))&&0<e.length){e=d.convertBearingToNorthAzimuth(e,f,a);break}if(!e)for(f=0;f<c.length;f++)if(c[f].type!==a.directionOrAngleUnits&&(e=c[f].regex.exec(b.trim()))&&0<e.length){e=d.convertBearingToNorthAzimuth(e,f,a);break}return e?d.getBearingDetailsOfRequiredFormat(e,f):null},metersToUSSurveyFeet:function(b){b=Number(b);return 3.28083333333*b},usSurveyFeetToMeters:function(b){b=Number(b);return.304800609601*b},feetToUSSurveyFeet:function(b){b=Number(b);return d.metersToUSSurveyFeet(.3048*
b)},feetToMeters:function(b){b=Number(b);return.3048*b},usSurveyFeetToFeet:function(b){b=Number(b);return 1.000001999999281*b},metersToFeet:function(b){b=Number(b);return 3.280839895*b},getLengthObjForFormat0:function(b,a){var c;c={};"uSSurveyFeet"===a?(c.uSSurveyFeet=Number(b[0]),c.uSSurveyFeetRound=Math.round(1E4*c.uSSurveyFeet)/1E4,c.meters=d.usSurveyFeetToMeters(b[0]),c.metersRound=Math.round(1E4*c.meters)/1E4,c.feet=d.usSurveyFeetToFeet(c.uSSurveyFeet),c.feetRound=Math.round(1E4*c.feet)/1E4):
"meters"===a&&(c.uSSurveyFeet=d.metersToUSSurveyFeet(b[0]),c.uSSurveyFeetRound=Math.round(1E4*c.uSSurveyFeet)/1E4,c.meters=Number(b[0]),c.metersRound=Math.round(1E4*c.meters)/1E4,c.feet=d.metersToFeet(c.meters),c.feetRound=Math.round(1E4*c.feet)/1E4);return c},getLengthObjForFormat1:function(b){var a;a={};a.uSSurveyFeet=Number(b[2]);a.uSSurveyFeetRound=Math.round(1E4*a.uSSurveyFeet)/1E4;a.meters=d.usSurveyFeetToMeters(b[2]);a.metersRound=Math.round(1E4*a.meters)/1E4;a.feet=d.usSurveyFeetToFeet(a.uSSurveyFeet);
a.feetRound=Math.round(1E4*a.feet)/1E4;return a},getLengthObjForFormat2:function(b){var a;a={};a.uSSurveyFeet=d.metersToUSSurveyFeet(b[2]);a.uSSurveyFeetRound=Math.round(1E4*a.uSSurveyFeet)/1E4;a.meters=Number(b[2]);a.metersRound=Math.round(1E4*a.meters)/1E4;a.feet=d.metersToFeet(a.meters);a.feetRound=Math.round(1E4*a.feet)/1E4;return a},getLengthObjForFormat3:function(b){var a;a={};a.uSSurveyFeet=d.feetToUSSurveyFeet(b[2]);a.uSSurveyFeetRound=Math.round(1E4*a.uSSurveyFeet)/1E4;a.meters=d.feetToMeters(b[2]);
a.metersRound=Math.round(1E4*a.meters)/1E4;a.feet=Number(b[2]);a.feetRound=Math.round(1E4*a.feet)/1E4;return a},categorizeLengthFormat:function(b,a){var c,e,f;c=[];b=b.toString();c.push(/^((\-?)((0?|([1-9]\d*))(\.\d+)?))$/);c.push(/^(((\-?)((0?|([1-9]\d*))(\.\d+)?))(ft|FT|fT|Ft))$/);c.push(/^(((\-?)((0?|([1-9]\d*))(\.\d+)?))(m|M))$/);for(f=0;f<c.length&&!((e=c[f].exec(b.trim()))&&0<e.length);f++);e?(c=d.getLengthOfRequiredFormat(e,f,a))&&isNaN(c.meters)&&(c=null):c=null;return c},categorizeLengthFormatForFeet:function(b){var a,
c,e;a=[];b=b.toString();a.push(/^((\-?)((0?|([1-9]\d*))(\.\d+)?))$/);for(e=0;e<a.length&&!((c=a[e].exec(b.trim()))&&0<c.length);e++);return c?d.getLengthObjForFormat3(c):null},getLengthOfRequiredFormat:function(b,a,c){var e={};switch(a){case 0:e=d.getLengthObjForFormat0(b,c);break;case 1:e=d.getLengthObjForFormat1(b);break;case 2:e=d.getLengthObjForFormat2(b)}return e}};return d});