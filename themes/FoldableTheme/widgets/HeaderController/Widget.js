// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/FoldableTheme/widgets/HeaderController/PopupTileNodes":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/dom-construct dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack jimu/utils".split(" "),function(r,h,p,b,n,k,m,u,w,v,t){return r([u,w],{baseClass:"jimu-header-more-popup",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
margin:4,postCreate:function(){this.nodes=[];this.pages=[];this.createCloseBtn()},startup:function(){this.viewStack=new v({views:[],viewType:"dom"},this.pagesNode);this.viewStack.startup();this.resize()},resize:function(){var d=this._calculateGridParam(),f;null!==d?(b.setStyle(this.domNode,t.getPositionStyle(d.position)),this.nodeWidth=d.cellSize-this.margin,this.oldGridParam&&this.oldGridParam.rows===d.rows&&this.oldGridParam.cols===d.cols||(this.clearPages(),this.createPages(d)),this.nodes.forEach(h.hitch(this,
function(b,e){this.setItemNodePosition(b,e,d)})),this.oldGridParam=d,f=m("div.close",this.domNode)[0],b.setStyle(f,{width:.25*this.nodeWidth+"px",height:.25*this.nodeWidth+"px"})):(this.oldGridParam=null,b.setStyle(this.domNode,t.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=0)},setItemNodePosition:function(d,f,g){var e,h,l=48,k=16;e=0===f%g.cols?0:this.margin/2;h=f%(g.rows*g.cols)<g.cols?0:this.margin/2;f={};"number"===typeof this.nodeWidth&&(f.width=this.nodeWidth+
"px",f.height=this.nodeWidth+"px");"number"===typeof e&&(window.isRTL?f.marginRight=e+"px":f.marginLeft=e+"px");"number"===typeof h&&(f.marginTop=h+"px");if(e=m("img",d)[0])g.iconScaled&&(l*=this.nodeWidth/120),b.setStyle(e,{width:l+"px",height:l+"px"});if(l=m("div.node-label",d)[0])g.showLabel?(g.iconScaled&&(k*=this.nodeWidth/120),b.setStyle(l,{"font-size":k+"px",display:"block"})):b.setStyle(l,{"font-size":k+"px",display:"none"});b.setStyle(d,f)},clearPages:function(){p.forEach(this.pages,function(b){this.viewStack.removeView(b.pageNode)},
this);k.empty(this.pointsNode);this.pages=[];this.nodes=[]},createPages:function(b){var d,g,e,q;d=Math.ceil(this.items.length/(b.rows*b.cols));for(g=0;g<d;g++)e=k.create("div",{"class":"page"}),this.createPageItems(g,e,b),this.viewStack.addView(e),1<d&&(q=k.create("div",{"class":"point"},this.pointsNode),this.own(n(q,"click",h.hitch(this,this._onPageNodeClick,g)))),this.pages.push({pageNode:e,pointNode:q});0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(b){this._selectPage(b)},
_selectPage:function(d){1<this.pages.length&&(m(".point",this.domNode).removeClass("point-selected"),b.addClass(this.pages[d].pointNode,"point-selected"));this.viewStack.switchView(this.pages[d].pageNode)},createPageItems:function(b,f,g){var d,h,k;d=this.items.length;h=g.rows*g.cols;g=(b+1)*h;k=g-d;g=Math.min(g,d);for(b*=h;b<g;b++)this.createItemNode(b,f);for(b=d;b<d+k;b++)this.createEmptyItemNode(f)},createItemNode:function(b,f){var d,e;e=this.items[b];d=k.create("div",{"class":"icon-node jimu-float-leading jimu-main-background",
title:e.label,settingId:e.id,"data-widget-name":e.name},f);k.create("img",{src:e.icon},d);k.create("div",{"class":"node-label",title:e.label,innerHTML:t.stripHTML(e.label)},d);d.config=e;this.own(n(d,"click",h.hitch(this,function(){this.onNodeClicked(d)})));this.nodes.push(d)},createEmptyItemNode:function(b){b=k.create("div",{"class":"icon-node jimu-float-leading jimu-main-background"},b);this.nodes.push(b);return b},createCloseBtn:function(){var b;b=k.create("div",{"class":"close"},this.domNode);
k.create("div",{"class":"close-inner jimu-main-background"},b);n(b,"click",h.hitch(this,function(){this.hide()}));return b},hide:function(){b.setStyle(this.domNode,"display","none")},show:function(){b.setStyle(this.domNode,"display","block")},onNodeClicked:function(b){this.hide()},_calculateGridParam:function(){var d,f,g,e,h=!1,k=!0;d=b.getContentBox(jimuConfig.mapId);f=Math.min(d.w,d.h)-40;if(360<=f)e=120;else{e=Math.floor(f/3);if(10>e)return null;h=!0;80>e&&(k=!1)}f=Math.floor((d.h-40)/e);g=Math.floor((d.w-
40)/e);f=4<f?4:f;f=3>f?3:f;g=3>f?3:4<g?4:g;return{rows:f,cols:g,cellSize:e,iconScaled:h,showLabel:k,position:{top:(d.h-e*f)/2,bottom:(d.h-e*f)/2,left:(d.w-e*g)/2,right:(d.w-e*g)/2,width:e*g-this.margin*(g-1)/2,height:e*f-this.margin*(f-1)/2,zIndex:111}}}})})},"themes/FoldableTheme/widgets/HeaderController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/FoldableTheme/widgets/HeaderController/Widget.html":'\x3cdiv\x3e\r\n  \x3c!-- solve the bug of style delay loading --\x3e\r\n  \x3cdiv class\x3d"header-section jimu-float-leading" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3ca data-dojo-attach-point\x3d"logoLinkNode" target\x3d"_blank"\x3e\r\n      \x3cimg class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode" data-dojo-attach-event\x3d"onload:_onLogoLoad"\x3e\r\n    \x3c/a\x3e\r\n    \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n      \x3cdiv class\x3d"jimu-title jimu-float-leading" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"jimu-subtitle jimu-float-leading jimu-leading-margin5" data-dojo-attach-point\x3d"subtitleNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"links jimu-float-leading jimu-leading-margin25" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cdiv class\x3d"dynamic-section jimu-float-leading" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"signin-section jimu-float-leading" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSigninClick"\r\n        data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n        \x3ca href\x3d"" target\x3d"_blank" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"container-section jimu-float-leading" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/FoldableTheme/widgets/HeaderController/css/style.css":".jimu-widget-header-controller{box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .header-section{height: 100%; overflow: hidden;}.jimu-widget-header-controller .container-section{height: 100%; min-width: 80px;}.jimu-widget-header-controller .logo{cursor: pointer;}.jimu-widget-header-controller .hide-logo{display: none;}.jimu-widget-header-controller .titles{height: 100%; overflow: hidden;}.jimu-widget-header-controller .jimu-title{text-align: center; height: 100%;}.jimu-widget-header-controller .jimu-subtitle{text-align: center; height: 100%;}.jimu-widget-header-controller .links{height: 100%; overflow: hidden;}.jimu-widget-header-controller .dynamic-section,.jimu-widget-header-controller .signin-section{height: 100%;}.jimu-widget-header-controller .links .jimu-link{height: 100%;}.jimu-widget-header-controller .signin-section .jimu-link{color: #d9dde0;}.jimu-widget-header-controller .icon-node{cursor: pointer; opacity: 0.6; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header-controller .icon-node img{height: 24px; width: 24px;}.jimu-widget-header-controller .icon-node:first-child{border: none;}.jimu-widget-header-controller .icon-node:hover{opacity: 1;}.jimu-widget-header-controller .icon-node.jimu-state-selected{background-color: rgba(0, 0, 0, 0.3); opacity: 1; border: none; border-top: 2px solid #8491a1;}.jimu-widget-header-controller .drop-triangle{position: absolute; width: 0px; height: 0px; bottom: 1px; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid white;}.jimu-widget-header-controller .jimu-drop-menu{box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .jimu-drop-menu .menu-item{overflow: hidden; border-top: 1px solid rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item:hover{background-color: rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item img{width: 24px; height: 24px; cursor: pointer; margin: 8px;}.jimu-widget-header-controller .jimu-drop-menu .menu-item .label{cursor: pointer; margin-top: 12px; font-size: 14px; color: white; min-width: 50px; text-align: center; white-space: nowrap; max-width: 300px; text-overflow: ellipsis; overflow: hidden; padding-right: 8px;}.jimu-rtl .jimu-widget-header-controller .jimu-drop-menu .menu-item .label{padding-left: 8px;}.popup-links .popup-title{}.popup-links .logo{*/ height: 30px;}.popup-links .title{color:#fff; text-align: center; font-size: 16px; */ width: 71.42857142857143%; overflow: hidden; white-space: nowrap; height: 100%;}.popup-links .line{width: 100%; height: 4px; border-bottom: 1px solid #393c40;}.popup-links .link-section{width: 100%; height: 66px;}.popup-links a{color: #fff; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; overflow: hidden; display: inline-block;}.popup-links .link-section.signin a{color: #d9dde0;}.jimu-header-more-popup{position: absolute; border-radius: 2px; z-index: 111; background-color: #516070;}.jimu-header-more-popup .pages{position: relative; overflow: hidden; padding: 2px;}.jimu-header-more-popup .points{position: absolute; overflow: hidden; bottom: -15px; left: 0px; right: 0px; text-align: center; background-color: #bababa;}.jimu-header-more-popup .points-inner{display: inline-block; overflow: hidden;}.jimu-header-more-popup .point{float: left; width: 8px; height: 8px; margin-left: 5px; border-radius: 4px; background-color: #f2f6f9; cursor: pointer;}.jimu-header-more-popup .point-selected{background-color: #485566;}.jimu-header-more-popup .page{position: relative; overflow: hidden;}.jimu-header-more-popup .close{position: absolute; top: -3.125%; right: -3.125%; border-radius: 50%; background-color: #697a8c; cursor: pointer;}.jimu-rtl .jimu-header-more-popup .close{left: -04.46428571428571%; right: auto;}.jimu-header-more-popup .close-inner{width: 80%; height: 80%; margin-left: 10%; margin-top: 10%; border-radius: 50%; background: #1d2123 url(images/close.png) no-repeat center center;}.jimu-header-more-popup .icon-node{background-color: #697a8c; cursor: pointer;}.jimu-header-more-popup .icon-node.jimu-state-selected{background-color: red;}.jimu-header-more-popup img{width: 48px; height: 48px; margin: auto; margin-top: 25%; display: block;}.jimu-header-more-popup .node-label{width: 100%; text-align: center; font-size: 16px; margin-top: 5px; color: white; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; display: inline-block;}@media screen and (max-width:600px){.jimu-header-more-popup .node-label{font-size: 14px;}}.jimu-more-icon-cover{z-index: 110; position: absolute; left: 0; top: 0; width: 100%; height: 100%;}.esriPopup .titlePane {background-color: rgba(72, 85, 102, 0.9);}",
"*now":function(r){r(['dojo/i18n!*preload*themes/FoldableTheme/widgets/HeaderController/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/aspect dojo/query dojo/on dojo/Deferred dojo/mouse dojo/dom-construct dojo/dom-geometry jimu/BaseWidget jimu/PoolControllerMixin jimu/tokenUtils jimu/portalUtils jimu/portalUrlUtils jimu/utils jimu/dijit/Message ./PopupTileNodes dojo/NodeList-manipulate".split(" "),function(r,h,p,b,n,k,m,u,w,v,t,d,f,g,e,q,l,y,z){return r([d,f],{baseClass:"jimu-widget-header-controller jimu-main-background",maxIconCount:-1,createMoreIcon:!1,
switchableElements:{},height:40,openedId:"",moveTopOnActive:!1,postCreate:function(){this.inherited(arguments);this._processGroupSetting();this.switchableElements.title=this.titleNode;this.switchableElements.links=this.linksNode;this.switchableElements.subtitle=this.subtitleNode;this._handleTitleColorAndLogoLink(this.appConfig);this.position&&this.position.height&&(this.height=this.position.height);b.setStyle(this.signInSectionNode,"display","none");this.appConfig&&this.appConfig.logo?(this.logoNode.src=
this.appConfig.logo,b.removeClass(this.logoNode,"hide-logo")):(this.logoNode.src="",b.addClass(this.logoNode,"hide-logo"));this.switchableElements.title.innerHTML=l.sanitizeHTML(this.appConfig.title?this.appConfig.title:"");this.switchableElements.subtitle.innerHTML=l.sanitizeHTML(this.appConfig.subtitle?this.appConfig.subtitle:"");this._createDynamicLinks(this.appConfig.links);this._setElementsSize();this.own(m(this.domNode,w.enter,h.hitch(this,function(){var a="",c=q.getServerByUrl(this.appConfig&&
this.appConfig.portalUrl||"");q.isArcGIScom(c)&&(c="ArcGIS.com");c&&(a=this.nls.signInTo+" "+c);this.signinLinkNode.title=a})))},startup:function(){this.inherited(arguments);this.resize()},onAction:function(a,c){if("highLight"===a&&c){var b=k('div[settingid\x3d"'+c.widgetId+'"]',this.domNode)[0];this._highLight(b)}"removeHighLight"===a&&this._removeHighLight()},onSignIn:function(a){this.inherited(arguments);b.setStyle(this.signinLinkNode,"display","none");b.setStyle(this.userNameLinkNode,"display",
"");b.setStyle(this.signoutLinkNode,"display","");this.userNameLinkNode.innerHTML=a.userId;b.setAttr(this.userNameLinkNode,"href",this.appConfig.portalUrl+"home/user.html");this.popupLinkNode&&(b.setStyle(this.popupSigninNode,"display","none"),b.setStyle(this.popupUserNameNode,"display",""),b.setStyle(this.popupSignoutNode,"display",""),k("a",this.popupUserNameNode).html(a.userId).attr("href",this.appConfig.portalUrl+"home/user.html"));this.resize()},onSignOut:function(){this.inherited(arguments);
this._onSignOut(this.nls.signin);e.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(h.hitch(this,function(a){this._onSignOut(this.nls.signInTo+" "+a.name)}),h.hitch(this,function(a){console.error(a)}))},_onSignOut:function(a){b.setStyle(this.signinLinkNode,"display","");b.setAttr(this.signinLinkNode,"innerHTML",a);b.setStyle(this.userNameLinkNode,"display","none");b.setStyle(this.signoutLinkNode,"display","none");this.userNameLinkNode.innerHTML="";this.popupLinkNode&&(b.setStyle(this.popupSigninNode,
"display",""),b.setAttr(this.popupSigninNode,"innerHTML",a),b.setStyle(this.popupUserNameNode,"display","none"),b.setStyle(this.popupSignoutNode,"display","none"),k("a",this.popupUserNameNode).html(""));this.resize()},resize:function(){var a=b.getStyle(this.headerNode,"float"),c=b.getStyle(this.logoNode,"float"),x=b.getStyle(this.titlesNode,"float"),d=b.getStyle(this.linksNode,"float");a&&"none"!==a&&c&&"none"!==c&&x&&"none"!==x&&d&&"none"!==d?this._resize():setTimeout(h.hitch(this,this.resize),200)},
_resize:function(){var a=b.getContentBox(this.domNode);this._showSwitchableElements(["title","links","subtitle"]);this._createIconNodes(a);this.morePane&&this.morePane.resize();this.popupLinkNode&&b.setStyle(jimuConfig.layoutId,{left:b.getContentBox(this.popupLinkNode).w+"px"})},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=null);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&(b.destroy(this.moreIconPaneCoverNode),this.moreIconPaneCoverNode=
null);this.popupLinkNode&&this.popupLinksVisible&&this._hidePopupLink();b.destroy(this.popupLinkNode);this.inherited(arguments)},onAppConfigChanged:function(a,c,b){switch(c){case "attributeChange":this._onAttributeChange(a,b);break;default:return}this.appConfig=a;this.resize()},getOpenedIds:function(){this.inherited(arguments);return""===this.openedId?[]:[this.openedId]},setOpenedIds:function(a){if(0!==a.length){var c=this.getConfigById(a[0]);c&&(this.openedId&&this._switchNodeToClose(this.openedId),
this.openedId=a[0],c.widgets&&"openAll"===c.openType?this._switchNodeToOpen(c.id):c.widgets||(this._getIconNodeById(c.id)?this._switchNodeToOpen(c.id):this._showIconContent(c)))}},_onLogoLoad:function(){this.resize()},_highLight:function(a){this.hlDiv&&this._removeHighLight();if(a){var c=t.getMarginBox(a);this.hlDiv=v.create("div",{style:{position:"absolute",left:c.l+"px",top:c.t+"px",width:c.w+"px",height:c.h+"px"},"class":"icon-highlight"},a,"before")}},_removeHighLight:function(){this.hlDiv&&(v.destroy(this.hlDiv),
this.hlDiv=null)},_onAttributeChange:function(a,c){"title"in c&&c.title!==this.appConfig.title&&(this.titleNode.innerHTML=l.sanitizeHTML(c.title));"subtitle"in c&&c.subtitle!==this.appConfig.subtitle&&(this.subtitleNode.innerHTML=l.sanitizeHTML(c.subtitle));"logo"in c&&c.logo!==this.appConfig.logo&&(c.logo?(b.setAttr(this.logoNode,"src",c.logo),b.removeClass(this.logoNode,"hide-logo")):(b.removeAttr(this.logoNode,"src"),b.addClass(this.logoNode,"hide-logo")));"links"in c&&this._createDynamicLinks(c.links);
this._handleTitleColorAndLogoLink(a)},_handleTitleColorAndLogoLink:function(a){a.titleColor?b.setStyle(this.titleNode,"color",a.titleColor):b.setStyle(this.titleNode,"color","");a.logoLink?(b.setAttr(this.logoLinkNode,"href",a.logoLink),b.setStyle(this.logoNode,"cursor","pointer")):(b.setAttr(this.logoLinkNode,"href","javascript:void(0)"),b.setStyle(this.logoNode,"cursor","default"))},_setElementsSize:function(){b.setStyle(this.logoNode,{height:"30px",marginTop:(this.height-30)/2+"px"});b.setStyle(this.titleNode,
{lineHeight:this.height+"px"});b.setStyle(this.subtitleNode,{lineHeight:this.height+"px"});k(".jimu-link",this.domNode).style({lineHeight:this.height+"px"})},_processGroupSetting:function(){p.forEach(this.appConfig.widgetPool.groups,function(a){var c;a:{if(this.config.groupSetting)for(c=0;c<this.config.groupSetting.length;c++)if(this.config.groupSetting[c].label===a.label){c=this.config.groupSetting[c].type;break a}c="openAll"}a.openType=c},this)},_createDynamicLinks:function(a){if(window.isRTL){var c=
[];p.forEach(a,function(a){c.unshift(a)});a=c}b.empty(this.dynamicLinksNode);p.forEach(a,function(a){b.create("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",innerHTML:l.sanitizeHTML(a.label),"class":"jimu-link jimu-align-leading jimu-leading-margin1",style:{lineHeight:this.height+"px"}},this.dynamicLinksNode)},this)},_showSwitchableElements:function(a){var c=this.switchableElements,d;for(d in c)c.hasOwnProperty(d)&&(-1<a.indexOf(d)?(b.setStyle(c[d],"display","block"),c[d].visible=!0):(b.setStyle(c[d],
"display","none"),c[d].visible=!1));this.logoClickHandle&&this.logoClickHandle.remove();0>a.indexOf("links")?this.logoClickHandle=m(this.logoNode,"click",h.hitch(this,this._onLogoClick)):this.popupLinksVisible&&this._hidePopupLink()},_switchSignin:function(){var a=g.getPortalCredential(this.appConfig.portalUrl);if(a)this.onSignIn(a);else this.onSignOut()},_onLogoClick:function(){this.popupLinkNode&&b.destroy(this.popupLinkNode);this.popupLinkNode=this._createPopupLinkNode();this.popupLinksVisible?
this._hidePopupLink():this._showPopupLink()},_hidePopupLink:function(){b.setStyle(this.popupLinkNode,"display","none");window.isRTL?b.setStyle(jimuConfig.layoutId,{right:0}):b.setStyle(jimuConfig.layoutId,{left:0});this.popupLinksVisible=!1},_showPopupLink:function(){b.setStyle(this.popupLinkNode,"display","");window.isRTL?b.setStyle(jimuConfig.layoutId,{right:b.getContentBox(this.popupLinkNode).w+"px"}):b.setStyle(jimuConfig.layoutId,{left:b.getContentBox(this.popupLinkNode).w+"px"});this.popupLinksVisible=
!0},_createPopupLinkNode:function(){var a,c;b.getContentBox(jimuConfig.mainPageId);a=b.create("div",{"class":"popup-links jimu-main-background",style:{position:"absolute",zIndex:100,top:0,bottom:0}},jimuConfig.mainPageId);window.isRTL?b.setStyle(a,{right:0,left:"50px"}):b.setStyle(a,{left:0,right:"50px"});c=b.create("div",{"class":"popup-title",style:{height:this.height+"px",width:"100%"}},a);var d=b.create("img",{"class":"logo jimu-float-leading jimu-leading-margin1",src:this.appConfig.logo?this.appConfig.logo:
this.folderUrl+"images/app-logo.png",style:{width:"30px",height:"30px",marginTop:(this.height-30)/2+"px"}},c),e=b.create("div",{"class":"title jimu-float-leading jimu-leading-margin1 jimu-ellipsis",innerHTML:l.sanitizeHTML(this.appConfig.title),style:{lineHeight:this.height+"px"}},c),f="auto";try{f=b.getMarginBox(c).w-b.getMarginBox(d).w-b.getMarginExtents(e).w+"px"}catch(A){console.error(A),f="auto"}b.setStyle(e,"width",f);p.forEach(this.appConfig.links,function(c){this._createLinkNode(a,c,!1)},
this);this._createLinkNode(a,{label:"",url:"#"},!1);return a},_createLinkNode:function(a,c,d){a=b.place('\x3cdiv class\x3d"jimu-link"\x3e\x3c/div\x3e',a);b.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e',a);d=b.place('\x3cdiv class\x3d"'+(d?"link-section signin":"link-section")+'"\x3e\x3c/div\x3e',a);b.create("a",{href:c.url,"class":"jimu-ellipsis",target:"_blank",rel:"noopener noreferrer",innerHTML:l.sanitizeHTML(c.label),title:c.label,style:{lineHeight:"66px"}},d);return a},_onSigninClick:function(){g.signInPortal(this.appConfig.portalUrl,
this.appConfig.appId)},_onSignoutClick:function(){this.appConfig.mode?new y({message:this.nls.cantSignOutTip}):g.signOutAll()},_onUserNameClick:function(){},_getHeaderSectionWidth:function(){return b.getMarginBox(this.headerNode).w},_getContainerWidth:function(a){var c=this._getHeaderSectionWidth();return a.w-c-this._getEmptyWidth(a)},_calcContainerAndEmptyWidth:function(a){var c=this._getContainerWidth(a),b=this._getEmptyWidth(a);c<2*this.iconWidth&&(this.switchableElements.subtitle.visible?(this._showSwitchableElements(["title",
"links"]),c=this._getContainerWidth(a),c<2*this.iconWidth&&(this._showSwitchableElements(["title"]),c=this._getContainerWidth(a),c<2*this.iconWidth&&(this._showSwitchableElements([]),c=this._getContainerWidth(a),c<2*this.iconWidth&&(b-=2*this.iconWidth-c,c=2*this.iconWidth,this._getContainerWidth(a))))):(this._showSwitchableElements([]),c=this._getContainerWidth(a),c<2*this.iconWidth&&(b-=2*this.iconWidth-c,c=2*this.iconWidth)));return{containerWidth:c,emptyWidth:b}},_getEmptyWidth:function(a){return.1*
a.w},_createIconNodes:function(a){k(".icon-node",this.containerNode).remove();this._closeDropMenu();var c,d=this.getAllConfigs();this.iconWidth=a.h;a=this._calcContainerAndEmptyWidth(a);c={width:a.containerWidth+"px"};c[window.isRTL?"marginRight":"marginLeft"]=a.emptyWidth-5+"px";b.setStyle(this.containerNode,c);this.maxIconCount=Math.floor(a.containerWidth/this.iconWidth);this.maxIconCount>=d.length?(this.headerIconCount=d.length,this.createMoreIcon=!1):(this.headerIconCount=this.maxIconCount-1,
this.createMoreIcon=!0);this.createMoreIcon&&this._createIconNode({label:this.nls.more,name:"__more"});var e;for(a=this.headerIconCount-1;0<=a;a--){c=d[a];var f=this._createIconNode(c);c.openAtStart&&(e=f)}e&&!this.openAtStartWidget&&(this._onIconClick(e),this.openAtStartWidget=e.config.name);this.openedId&&this.getConfigById(this.openedId)&&!1===this.getConfigById(this.openedId).inPanel&&(d=this._getIconNodeById(this.openedId),e=this.widgetManager.getWidgetById(this.openedId),d&&e?this._setOffPanelWidgetPosition(d,
e):(this.widgetManager.closeWidget(this.openedId),this.openedId=""))},_createIconNode:function(a){var c,d;d="__more"===a.name?this.folderUrl+"images/more_icon.png":a.icon;c=b.create("div",{"class":"icon-node jimu-float-trailing"+(this.openedId===a.id?" jimu-state-selected":""),title:a.label,settingId:a.id,style:{width:this.height+"px",height:this.height+"px"},"data-widget-name":a.name},this.containerNode);b.create("img",{src:d,style:{marginTop:(this.height-24)/2+"px"}},c);"__more"===a.name?m(c,"click",
h.hitch(this,this._showMorePane,a)):m(c,"click",h.hitch(this,function(){this._onIconClick(c)}));c.config=a;c.config.widgets&&1<c.config.widgets.length&&"dropDown"===c.config.openType&&this._createDropTriangle(c);return c},_createDropTriangle:function(a){var c=b.getMarginBox(a);b.create("div",{"class":"drop-triangle",style:{left:c.l+c.w/2-4+"px"}},a)},_onIconClick:function(a){a.config.widgets&&1!==a.config.widgets.length&&"openAll"!==a.config.openType?this.dropMenuNode?this._closeDropMenu():this._openDropMenu(a):
this.openedId&&this.openedId===a.config.id?this._switchNodeToClose(this.openedId):this.openedId?this._switchNodeToClose(this.openedId).then(h.hitch(this,function(){this._closeDropMenu();this._switchNodeToOpen(a.config.id)})):this._switchNodeToOpen(a.config.id)},_closeDropMenu:function(){this.dropMenuNode&&(b.destroy(this.dropMenuNode),this.dropMenuNode=null)},_openDropMenu:function(a){this.dropMenuNode=b.create("div",{"class":"jimu-drop-menu jimu-main-background",title:a.config.label,style:{position:"absolute",
zIndex:"101"}});b.place(this.dropMenuNode,this.containerNode);p.forEach(a.config.widgets,function(a){this._createDropMenuItem(a)},this);this._setDropMenuPosition(a);this.morePane&&this.morePane.hide()},_createDropMenuItem:function(a){var c=b.create("div",{"class":"menu-item",title:a.label,style:{height:this.height+"px"}},this.dropMenuNode);b.create("img",{"class":"jimu-float-leading",src:a.icon},c);b.create("div",{"class":"label jimu-float-leading",innerHTML:l.sanitizeHTML(a.label)},c);this.own(m(c,
"click",h.hitch(this,function(){this._closeDropMenu();this.openedId?this._switchNodeToClose(this.openedId).then(h.hitch(this,function(){this._showIconContent(c.config)})):this._showIconContent(c.config)})));c.config=a;return c},_setDropMenuPosition:function(a){var c={},c=b.getMarginBox(this.dropMenuNode),c=this._getDropdownPosition(a,c);c.zIndex=101;b.setStyle(this.dropMenuNode,l.getPositionStyle(c))},_getDropdownPosition:function(a,c){var d={},e=b.getMarginBox(a),f=b.getMarginBox(this.domNode);d.top=
this.height+1;window.isRTL?d.right=0>e.l+e.w-c.w?0:e.l+e.w-c.w:e.l+c.w>f.w?d.right=0:d.left=e.l;return d},_switchNodeToOpen:function(a){a=this._getIconNodeById(a);k(".icon-node",this.domNode).removeClass("jimu-state-selected");b.addClass(a,"jimu-state-selected");this._showIconContent(a.config)},_switchNodeToClose:function(a){k(".icon-node",this.domNode).removeClass("jimu-state-selected");var c=this.appConfig.getConfigElementById(a);if(c)return!1===c.inPanel?(this.widgetManager.closeWidget(a),this.openedId=
"",a=new u,a.resolve(),a):this.panelManager.closePanel(a+"_panel");a=new u;a.resolve();return a},_getIconNodeById:function(a){a=k('.icon-node[settingId\x3d"'+a+'"]',this.domNode);if(0!==a.length)return a[0]},_unSelectIcon:function(a){k('.icon-node[settingId\x3d"'+a+'"]',this.domNode).removeClass("jimu-state-selected");this.openedId=""},_showIconContent:function(a){!1===a.inPanel?this.widgetManager.loadWidget(a).then(h.hitch(this,function(c){this.openedId=a.id;var d=this._getIconNodeById(a.id);b.setStyle(c.domNode,
"zIndex",101);this._setOffPanelWidgetPosition(d,c);this.widgetManager.openWidget(c);this.own(n.after(c,"onClose",h.hitch(this,function(){this._unSelectIcon(a.id)})))})):this.panelManager.showPanel(a).then(h.hitch(this,function(c){this.openedId=a.id;this.own(n.after(c,"onClose",h.hitch(this,function(){this._unSelectIcon(a.id)})))}))},_setOffPanelWidgetPosition:function(a,c){var b=this._getDropdownPosition(a,this.widgetManager.getWidgetMarginBox(c));c.setPosition(b,this.containerNode)},_showMorePane:function(){var a,
c,d=[],e=this.getAllConfigs();for(a=this.headerIconCount;a<e.length;a++)c=e[a],d.push(c);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&b.destroy(this.moreIconPaneCoverNode);this._closeDropMenu();this.morePane=new z({openedId:this.openedId,items:d});this._createCoverNode();b.place(this.morePane.domNode,jimuConfig.mapId);this.morePane.startup();n.after(this.morePane,"onNodeClicked",h.hitch(this,function(a){this._moveConfigToHeader(a.config);this._createIconNodes(b.getContentBox(this.domNode));
this._onIconClick(this._getIconNodeById(a.config.id))}),!0);n.after(this.morePane,"hide",h.hitch(this,function(){b.destroy(this.moreIconPaneCoverNode)}),!0)},_moveConfigToHeader:function(a){var b=this.getAllConfigs(),d=a.index;a.index=b[this.headerIconCount-1].index;b[this.headerIconCount-1].index=d},_createCoverNode:function(){this.moreIconPaneCoverNode=b.create("div",{"class":"jimu-more-icon-cover"},jimuConfig.layoutId)}})});