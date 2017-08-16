// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/Evented dojo/dom-construct dojo/_base/html dojo/_base/array dojo/query dojo/on dojo/dom-style jimu/dijit/Popup jimu/dijit/CheckBox dojo/NodeList-data".split(" "),function(l,m,g,n,p,b,f,e,q,h,r,t){return l([m,n],{baseClass:"jimu-widget-screening",selectedFields:[],fieldsPopup:null,startup:function(){this._populateConfiguredFields();this.onFieldsSelectorClick();q(window,"resize",g.hitch(this,function(){this._setFieldPopupDimensions()}))},
_populateConfiguredFields:function(){for(var a in this.outFields)this.selectedFields.push(a)},onFieldsSelectorClick:function(){var a,c,k,f=0;c=b.create("div",{});p.create("div",{"class":"esriCTSelectFieldReportLabel",innerHTML:this.fieldTitle},c);k=b.create("div",{"class":"esriCTSelectFieldParentContainer",style:{maxHeight:"350px"}},c);this._fieldsCheckBox=[];for(a in this.outFields){var d=new t({checked:this._isSearchable(this.outFields[a]),label:this.outFields[a].label||this.outFields[a].alias||
a});b.addClass(d.domNode,"esriCTLayerFieldCheckbox");b.addClass(d.labelNode,"jimu-ellipsis");b.setAttr(d.domNode,{title:this.outFields[a].label||this.outFields[a].alias||a});"DartTheme"===this.appConfig.theme.name&&h.set(d.domNode.children[0],"backgroundColor","#4c4c4c");0===f%3&&(window.isRTL?b.setStyle(d.domNode,"marginRight",0):b.setStyle(d.domNode,"marginLeft",0));d.placeAt(k);e(d.domNode).data("fieldName",a);this._fieldsCheckBox.push(d);f++}this.fieldsPopup=new r({titleLabel:this.popupTitle,
autoHeight:!0,content:c,container:window.jimuConfig.layoutId,width:640,maxHeight:600,buttons:[{label:this.nls.common.ok,onClick:g.hitch(this,"_onSearchFieldsOk")},{label:this.nls.common.cancel,classNames:["jimu-btn-vacation"]}],onClose:g.hitch(this,function(){this.fieldsPopup=null})});b.addClass(this.fieldsPopup.domNode,this.appConfig.theme.name+"  "+this.baseClass);this._setFieldPopupDimensions()},_setFieldPopupDimensions:function(){this.fieldsPopup&&(window.appInfo.isRunInMobile?(this.fieldsPopup.set("width",
window.innerWidth-100),e(".esriCTLayerFieldCheckbox").addClass("esriCTLayerFieldWithoutMargin"),h.set(e(".esriCTSelectFieldParentContainer")[0],"height","200px")):(this.fieldsPopup.set("width",640),this.fieldsPopup.set("maxHeight",600),e(".esriCTLayerFieldCheckbox").removeClass("esriCTLayerFieldWithoutMargin")))},_isSearchable:function(a){return f.some(this.selectedFields,g.hitch(this,function(c){return a.name===c}))},_onSearchFieldsOk:function(){var a=[];f.forEach(this._fieldsCheckBox,function(c){if(c.getValue()){var b=
e(c.domNode).data("fieldName");a.push(b[0]);e(c.domNode).removeData()}});this._setSearchFields(a);this.fieldsPopup.close();this.emit("onFieldSelectComplete",this.selectedFields)},_getSearchFields:function(){return this.selectedFields},_setSearchFields:function(a){this.selectedFields=a}})});