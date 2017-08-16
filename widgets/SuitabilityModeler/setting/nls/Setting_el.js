// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"\u03a3\u03c7\u03b5\u03b4\u03b9\u03b1\u03c3\u03c4\u03ae\u03c2 \u03ba\u03b1\u03c4\u03b1\u03bb\u03bb\u03b7\u03bb\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2",general:{clear:"\u0395\u03ba\u03ba\u03b1\u03b8\u03ac\u03c1\u03b9\u03c3\u03b7",cancel:"\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",save:"\u0395\u03ba\u03c4\u03ad\u03bb\u03b5\u03c3\u03b7",saveAs:"\u0395\u03be\u03b1\u03b3\u03c9\u03b3\u03ae"},saveModel:{save:"\u0395\u03be\u03b1\u03b3\u03c9\u03b3\u03ae",
title:"\u03a4\u03af\u03c4\u03bb\u03bf\u03c2: ",summary:"\u03a3\u03cd\u03bd\u03bf\u03c8\u03b7: ",description:"\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae: ",tags:"\u0395\u03c4\u03b9\u03ba\u03ad\u03c4\u03b5\u03c2: ",folder:"\u03a6\u03ac\u03ba\u03b5\u03bb\u03bf\u03c2: ",homeFolderPattern:"{username} (\u0391\u03c1\u03c7\u03b9\u03ba\u03cc\u03c2)",failed:"\u0397 \u03b5\u03be\u03b1\u03b3\u03c9\u03b3\u03ae \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5."},util:{colorRamp:{1:"\u0395\u03be\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03ac \u03c7\u03b1\u03bc\u03b7\u03bb\u03ae",
2:"\u03a0\u03bf\u03bb\u03cd \u03c7\u03b1\u03bc\u03b7\u03bb\u03ae",3:"\u03a7\u03b1\u03bc\u03b7\u03bb\u03ae",4:"\u039c\u03b5\u03c3\u03b1\u03af\u03b1 \u03c0\u03c1\u03bf\u03c2 \u03c7\u03b1\u03bc\u03b7\u03bb\u03ae",5:"\u039c\u03b5\u03c3\u03b1\u03af\u03b1",6:"\u039c\u03b5\u03c3\u03b1\u03af\u03b1 \u03c0\u03c1\u03bf\u03c2 \u03c5\u03c8\u03b7\u03bb\u03ae",7:"\u03a5\u03c8\u03b7\u03bb\u03ae",8:"\u03a0\u03bf\u03bb\u03cd \u03c5\u03c8\u03b7\u03bb\u03ae",9:"\u0395\u03be\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03ac \u03c5\u03c8\u03b7\u03bb\u03ae",
low:"\u03a7\u03b1\u03bc\u03b7\u03bb\u03ae",high:"\u03a5\u03c8\u03b7\u03bb\u03ae",tipPattern:"{label} ({value})",flipCaption:"\u0391\u03bd\u03c4\u03b9\u03c3\u03c4\u03c1\u03bf\u03c6\u03ae"}},wro:{caption:"\u03a3\u03c7\u03b5\u03b4\u03b9\u03b1\u03c3\u03c4\u03ae\u03c2 \u03ba\u03b1\u03c4\u03b1\u03bb\u03bb\u03b7\u03bb\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2",browsePrompt:"Weighted overlay service",selectLayersCaption:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03ce\u03bd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03c9\u03bd",
selectLayers:"\u0398\u03b5\u03bc. \u03b5\u03c0\u03af\u03c0.",designModelCaption:"\u03a3\u03c7\u03b5\u03b4\u03af\u03b1\u03c3\u03b7 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5",designModel:"\u03a3\u03c7\u03b5\u03b4\u03af\u03b1\u03c3\u03b7 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5",transparency:"\u0394\u03b9\u03b1\u03c6\u03ac\u03bd\u03b5\u03b9\u03b1",visible:"\u039f\u03c1\u03b1\u03c4\u03cc",total:"\u03a3\u03c5\u03bd\u03bf\u03bb\u03b9\u03ba\u03ac",unableToLoad:"\u0394\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03c5\u03bd\u03b1\u03c4\u03ae \u03b7 \u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5.",
projectNotOpen:"\u0394\u03b5\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03b5\u03b9 \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03ad\u03c1\u03b3\u03bf.",readMore:"\u0394\u03b9\u03b1\u03b2\u03ac\u03c3\u03c4\u03b5 \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1",validation:{validating:"\u0395\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7...",invalidItemCaption:"\u03a0\u03c1\u03bf\u03b5\u03b9\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 Weighted overlay service",notAnImageService:"\u0391\u03c5\u03c4\u03cc \u03c4\u03bf \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 Image service.",
notAWroService:"\u0391\u03c5\u03c4\u03cc \u03c4\u03bf \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 Weighted overlay service.",undefinedUrl:"\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03c4\u03bf URL \u03b1\u03c5\u03c4\u03bf\u03cd \u03c4\u03bf\u03c5 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5.",inaccessible:"\u0397 \u03c5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b1 \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03c1\u03bf\u03c3\u03b2\u03ac\u03c3\u03b9\u03bc\u03b7.",
generalError:"\u0394\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc \u03c4\u03bf \u03ac\u03bd\u03bf\u03b9\u03b3\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5.",missingFieldPattern:"\u03a4\u03bf {field} \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03b1\u03b9\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf \u03c0\u03b5\u03b4\u03af\u03bf",notAllowRasterFunction:"\u03a4\u03bf allowRasterFunction \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03c3\u03b5 \u03c4\u03b9\u03bc\u03ae true",
notNearestResampling:"\u03a4\u03bf defaultResamplingMethod \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03a0\u03bb\u03b7\u03c3\u03b9\u03ad\u03c3\u03c4\u03b5\u03c1\u03bf",notIsWeightedOverlayProp:"\u0397 \u03b2\u03b1\u03c3\u03b9\u03ba\u03ae \u03b9\u03b4\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1 IsWeightedOverlay \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03c3\u03b5 \u03c4\u03b9\u03bc\u03ae true",invalidLink:"\u03a4\u03bf URL \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf. \u03a4\u03bf \u03ac\u03bd\u03bf\u03b9\u03b3\u03bc\u03b1 \u03c4\u03b7\u03c2 \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c3\u03af\u03b1\u03c2 \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf.",
unexpectedError:"\u03a0\u03c1\u03bf\u03ad\u03ba\u03c5\u03c8\u03b5 \u03bc\u03b7 \u03b1\u03bd\u03b1\u03bc\u03b5\u03bd\u03cc\u03bc\u03b5\u03bd\u03b7 \u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7.",rangeMessage:"\u0397 \u03c4\u03b9\u03bc\u03ae \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b2\u03c1\u03af\u03c3\u03ba\u03b5\u03c4\u03b1\u03b9 \u03bc\u03b5\u03c4\u03b1\u03be\u03cd ${0} \u03ba\u03b1\u03b9 ${1}",rangeMessage100:"\u0397 \u03c4\u03b9\u03bc\u03ae \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b2\u03c1\u03af\u03c3\u03ba\u03b5\u03c4\u03b1\u03b9 \u03bc\u03b5\u03c4\u03b1\u03be\u03cd 0 \u03ba\u03b1\u03b9 100",
maxLayers:"\u0395\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03bf\u03bd\u03c4\u03b1\u03b9 \u03bc\u03ad\u03c7\u03c1\u03b9 ${0} \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03ac \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03b1 \u03b1\u03bd\u03ac \u03c5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b1, \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03c0\u03c1\u03ce\u03c4\u03b1 \u03bd\u03b1 \u03ba\u03b1\u03c4\u03b1\u03c1\u03b3\u03ae\u03c3\u03b5\u03c4\u03b5 \u03ad\u03bd\u03b1 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c0\u03c1\u03b9\u03bd \u03c0\u03c1\u03bf\u03c3\u03b8\u03ad\u03c3\u03b5\u03c4\u03b5 \u03ad\u03bd\u03b1 \u03bd\u03ad\u03bf.",
notFound:"\u03a4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf ${0} \u03b4\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b5 \u03c3\u03c4\u03bf weighted overlay service",wroServiceNotDefined:"\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af weighted overlay service \u03b3\u03b9\u03b1 \u03c4\u03bf \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf.",overlayLayerOutputInvalid:"\u0397 \u03c4\u03b9\u03bc\u03ae \u03b5\u03be\u03cc\u03b4\u03bf\u03c5 \u03c4\u03c9\u03bd [${0}] \u03b5\u03c5\u03c1\u03ce\u03bd \u03bd\u03ad\u03b1\u03c2 \u03b1\u03bd\u03c4\u03b9\u03c3\u03c4\u03bf\u03af\u03c7\u03b9\u03c3\u03b7\u03c2 [${1}] \u03c4\u03bf\u03c5 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03c5\u03c0\u03ad\u03c1\u03b8\u03b5\u03c3\u03b7\u03c2 \u03bb\u03b5\u03af\u03c0\u03b5\u03b9 \u03ae \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7",
overlayLayerInputInvalid:"\u0397 \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03b7/\u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03b7 \u03c4\u03b9\u03bc\u03ae \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5 \u03c4\u03c9\u03bd [${0}] \u03b5\u03c5\u03c1\u03ce\u03bd \u03bd\u03ad\u03b1\u03c2 \u03b1\u03bd\u03c4\u03b9\u03c3\u03c4\u03bf\u03af\u03c7\u03b9\u03c3\u03b7\u03c2 [${1}] \u03c4\u03bf\u03c5 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03c5\u03c0\u03ad\u03c1\u03b8\u03b5\u03c3\u03b7\u03c2 \u03bb\u03b5\u03af\u03c0\u03b5\u03b9 \u03ae \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7",
overlayLayerRangesMissing:"\u0391\u03c0\u03cc \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c5\u03c0\u03ad\u03c1\u03b8\u03b5\u03c3\u03b7\u03c2 [${0}] \u03bb\u03b5\u03af\u03c0\u03bf\u03c5\u03bd \u03c4\u03b1 \u03b5\u03cd\u03c1\u03b7 \u03bd\u03ad\u03b1\u03c2 \u03b1\u03bd\u03c4\u03b9\u03c3\u03c4\u03bf\u03af\u03c7\u03b9\u03c3\u03b7\u03c2",overlayLayerWeight:"\u039f\u03b9 \u03b4\u03b5\u03af\u03ba\u03c4\u03b5\u03c2 \u03c3\u03c4\u03ac\u03b8\u03bc\u03b9\u03c3\u03b7\u03c2 \u03c4\u03bf\u03c5 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03c5\u03c0\u03ad\u03c1\u03b8\u03b5\u03c3\u03b7\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03bf\u03c5\u03bd \u03ac\u03b8\u03c1\u03bf\u03b9\u03c3\u03bc\u03b1 100",
overlayLayerRequired:"\u0391\u03c0\u03b1\u03b9\u03c4\u03b5\u03af\u03c4\u03b1\u03b9 \u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd \u03ad\u03bd\u03b1 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c5\u03c0\u03ad\u03c1\u03b8\u03b5\u03c3\u03b7\u03c2",overlayLayerNotDefined:"\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c5\u03c0\u03ad\u03c1\u03b8\u03b5\u03c3\u03b7\u03c2",
requiresColormap:"\u0391\u03c5\u03c4\u03ae \u03b7 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 raster \u03b1\u03c0\u03b1\u03b9\u03c4\u03b5\u03af \u03ad\u03bd\u03b1\u03bd \u03ad\u03b3\u03c7\u03c1\u03c9\u03bc\u03bf \u03c7\u03ac\u03c1\u03c4\u03b7, \u03b1\u03bb\u03bb\u03ac \u03c4\u03bf \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf \u03b4\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf \u03bf\u03c1\u03b9\u03c3\u03bc\u03cc \u03ad\u03b3\u03c7\u03c1\u03c9\u03bc\u03bf\u03c5 \u03c7\u03ac\u03c1\u03c4\u03b7",
createModelError:"\u03a3\u03c6\u03ac\u03bb\u03bc\u03b1 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03c4\u03bf\u03c5 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5",invalidModel:"\u03a4\u03bf \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf",imageServiceNotDefined:"\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf Image service",
imageLayerNotDefined:"\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf Image service",histogramNotDefined:"\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03b9\u03c3\u03c4\u03bf\u03b3\u03c1\u03ac\u03bc\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c3\u03c4\u03b1\u03b8\u03bc\u03b9\u03c3\u03bc\u03ad\u03bd\u03b7\u03c2 \u03c5\u03c0\u03ad\u03c1\u03b8\u03b5\u03c3\u03b7\u03c2."},
colorRampLabel:{"Green Yellow Red":"\u03a0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u03ba\u03af\u03c4\u03c1\u03b9\u03bd\u03bf \u03ba\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf","Red Yellow Green":"\u039a\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03ba\u03af\u03c4\u03c1\u03b9\u03bd\u03bf \u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf","Yellow to Dark Red":"\u039a\u03af\u03c4\u03c1\u03b9\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03ba\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf","Dark Red to Yellow":"\u039a\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf \u03c0\u03c1\u03bf\u03c2 \u03ba\u03af\u03c4\u03c1\u03b9\u03bd\u03bf",
"Light Gray to Dark Gray":"\u0393\u03ba\u03c1\u03b9 \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03b3\u03ba\u03c1\u03b9 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf","Dark Gray to Light Gray":"\u0393\u03ba\u03c1\u03b9 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf \u03c0\u03c1\u03bf\u03c2 \u03b3\u03ba\u03c1\u03b9 \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc","Light Brown to Dark Brown":"\u039a\u03b1\u03c6\u03ad \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03ba\u03b1\u03c6\u03ad \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",
"Dark Brown to Light Brown":"\u039a\u03b1\u03c6\u03ad \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf \u03c0\u03c1\u03bf\u03c2 \u03ba\u03b1\u03c6\u03ad \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc","Full Spectrum - Bright Red to Blue":"\u03a0\u03bb\u03ae\u03c1\u03b5\u03c2 \u03c6\u03ac\u03c3\u03bc\u03b1 - \u039a\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc \u03c0\u03c1\u03bf\u03c2 \u03bc\u03c0\u03bb\u03b5","Full Spectrum - Bright Blue to Red":"\u03a0\u03bb\u03ae\u03c1\u03b5\u03c2 \u03c6\u03ac\u03c3\u03bc\u03b1 - \u039c\u03c0\u03bb\u03b5 \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc \u03c0\u03c1\u03bf\u03c2 \u03ba\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf",
"Partial Spectrum - Yellow to Blue":"\u039c\u03b5\u03c1\u03b9\u03ba\u03cc \u03c6\u03ac\u03c3\u03bc\u03b1 - \u039a\u03af\u03c4\u03c1\u03b9\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03bc\u03c0\u03bb\u03b5","Partial Spectrum - Blue to Yellow":"\u039c\u03b5\u03c1\u03b9\u03ba\u03cc \u03c6\u03ac\u03c3\u03bc\u03b1 - \u039c\u03c0\u03bb\u03b5 \u03c0\u03c1\u03bf\u03c2 \u03ba\u03af\u03c4\u03c1\u03b9\u03bd\u03bf","Yellow-Green to Dark Blue":"\u039a\u03af\u03c4\u03c1\u03b9\u03bd\u03bf-\u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03bc\u03c0\u03bb\u03b5 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",
"Dark Blue to Yellow-Green":"\u039c\u03c0\u03bb\u03b5 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf \u03c0\u03c1\u03bf\u03c2 \u03ba\u03af\u03c4\u03c1\u03b9\u03bd\u03bf-\u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf","Cold to Hot Diverging":"\u03a8\u03c5\u03c7\u03c1\u03cc \u03c0\u03c1\u03bf\u03c2 \u03b8\u03b5\u03c1\u03bc\u03cc \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd","Hot to Cold Diverging":"\u0398\u03b5\u03c1\u03bc\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c8\u03c5\u03c7\u03c1\u03cc \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd",
"Surface - Low to High":"\u0395\u03c0\u03b9\u03c6\u03ac\u03bd\u03b5\u03b9\u03b1 - \u03a7\u03b1\u03bc\u03b7\u03bb\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c5\u03c8\u03b7\u03bb\u03cc","Surface - High to Low":"\u0395\u03c0\u03b9\u03c6\u03ac\u03bd\u03b5\u03b9\u03b1 - \u03a5\u03c8\u03b7\u03bb\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c7\u03b1\u03bc\u03b7\u03bb\u03cc"}},_localized:{}},"widgets/SuitabilityModeler/setting/nls/strings":{allowSaveAs:"\u0394\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1 \u03b5\u03be\u03b1\u03b3\u03c9\u03b3\u03ae\u03c2",
startingState:"\u039a\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7 \u03ad\u03bd\u03b1\u03c1\u03be\u03b7\u03c2:",byUrl:"\u039a\u03b5\u03bd\u03cc \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf",byItem:"\u03a0\u03c1\u03bf\u03b4\u03b9\u03b1\u03bc\u03bf\u03c1\u03c6\u03c9\u03bc\u03ad\u03bd\u03bf \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf",imageServiceUrl:"Image Service URL",validate:"\u0395\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",validating:"\u0395\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7...",
validated:"\u03a4\u03bf URL \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf.",modelName:"\u039c\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf",selectModel:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae",itemSelectorTitle:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5",ok:"\u039f\u039a",cancel:"\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",description1:"\u039f \u03a3\u03c7\u03b5\u03b4\u03b9\u03b1\u03c3\u03c4\u03ae\u03c2 \u03ba\u03b1\u03c4\u03b1\u03bb\u03bb\u03b7\u03bb\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2 \u03c3\u03b1\u03c2 \u03b2\u03bf\u03b7\u03b8\u03ac \u03bd\u03b1 \u03b2\u03c1\u03b5\u03af\u03c4\u03b5 \u03c4\u03b7\u03bd \u03ba\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03b7 \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c3\u03af\u03b1 \u03b3\u03b9\u03b1 \u03bc\u03b9\u03b1 \u03b4\u03c1\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1, \u03bd\u03b1 \u03c0\u03c1\u03bf\u03b2\u03bb\u03ad\u03c8\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b5\u03c5\u03c0\u03ac\u03b8\u03b5\u03b9\u03b1 \u03c3\u03b5 \u03ba\u03af\u03bd\u03b4\u03c5\u03bd\u03bf, \u03ae \u03bd\u03b1 \u03c0\u03c1\u03bf\u03c3\u03b4\u03b9\u03bf\u03c1\u03af\u03c3\u03b5\u03c4\u03b5 \u03c0\u03bf\u03cd \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03c3\u03c5\u03bc\u03b2\u03b5\u03af \u03ba\u03ac\u03c4\u03b9. \u039c\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf widget \u03bc\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03c3\u03c5\u03bd\u03b4\u03c5\u03ac\u03c3\u03b5\u03c4\u03b5 \u03ba\u03b1\u03b9 \u03bd\u03b1 \u03c3\u03c4\u03b1\u03b8\u03bc\u03af\u03c3\u03b5\u03c4\u03b5 \u03b4\u03b9\u03ac\u03c6\u03bf\u03c1\u03b1 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03ac \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03b1, \u03ce\u03c3\u03c4\u03b5 \u03bd\u03b1 \u03b1\u03be\u03b9\u03bf\u03bb\u03bf\u03b3\u03ae\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b1\u03c5\u03c4\u03cc\u03c7\u03c1\u03bf\u03bd\u03b1 \u03c0\u03bf\u03bb\u03bb\u03bf\u03cd\u03c2 \u03c0\u03b1\u03c1\u03ac\u03b3\u03bf\u03bd\u03c4\u03b5\u03c2.",
description2:"\u039f \u03a3\u03c7\u03b5\u03b4\u03b9\u03b1\u03c3\u03c4\u03ae\u03c2 \u03ba\u03b1\u03c4\u03b1\u03bb\u03bb\u03b7\u03bb\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af \u03b3\u03c1\u03ae\u03b3\u03bf\u03c1\u03bf Weighted Raster Overlay \u03c0\u03bf\u03c5 \u03b2\u03b1\u03c3\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03bf web \u03b3\u03b9\u03b1 \u03c4\u03b7 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03c9\u03bd \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 service. \u039c\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03be\u03b5\u03ba\u03b9\u03bd\u03ae\u03c3\u03b5\u03c4\u03b5 \u03b1\u03c0\u03cc \u03ba\u03b5\u03bd\u03ae \u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7 \u03b5\u03bd\u03cc\u03c2 Weight Raster Overlay (WRO) Service \u03ae \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 \u03c0\u03c1\u03bf\u03b4\u03b9\u03b1\u03bc\u03bf\u03c1\u03c6\u03c9\u03bc\u03ad\u03bd\u03bf \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf WRO. \u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03ac \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03b1, \u03b1\u03bd\u03c4\u03b9\u03c3\u03c4\u03bf\u03b9\u03c7\u03af\u03c3\u03c4\u03b5 \u03b4\u03b5\u03af\u03ba\u03c4\u03b5\u03c2 \u03c3\u03c4\u03ac\u03b8\u03bc\u03b9\u03c3\u03b7\u03c2 \u03ba\u03b1\u03b9 \u03c0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03cc\u03c3\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03ba\u03b1\u03c4\u03ac\u03c4\u03b1\u03be\u03b7\u03c2 \u03c4\u03bf\u03c5 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5, \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bf\u03c1\u03af\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03ae \u03c3\u03b1\u03c2. \u03a3\u03c4\u03b7 \u03c3\u03c5\u03bd\u03ad\u03c7\u03b5\u03b9\u03b1, \u03b8\u03ad\u03c3\u03c4\u03b5 \u03c3\u03b5 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03c4\u03bf modeler, \u03bf\u03c0\u03c4\u03b9\u03ba\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1 \u03ba\u03b1\u03b9, \u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03ac, \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c3\u03c4\u03b5 \u03c4\u03bf \u03b1\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1 \u03c9\u03c2 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c3\u03c4\u03bf\u03bd \u03bf\u03c1\u03b3\u03b1\u03bd\u03b9\u03c3\u03bc\u03cc/\u03c3\u03c4\u03b7\u03bd \u03c0\u03cd\u03bb\u03b7 \u03c3\u03b1\u03c2.",
description3:"\u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf GeoPlanner suitability modeler.",_localized:{}}});