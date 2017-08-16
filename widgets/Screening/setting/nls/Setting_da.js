// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Screening/setting/nls/strings":{units:{standardUnit:"Standardenhed",metricUnit:"Metrisk enhed"},analysisTab:{analysisTabLabel:"Analysis",selectAnalysisLayerLabel:"V\u00e6lg analyselag",addLayerLabel:"Tilf\u00f8j lag",noValidLayersForAnalysis:"Ingen gyldige lag fundet i det valgte webkort.",noValidFieldsForAnalysis:"Ingen gyldige felter fundet i det valgte webkort. Fjern det valgte lag.",addLayersHintText:"Tip: V\u00e6lg de lag og felter, der skal analyseres og vises i rapporten",
addLayerNameTitle:"Navn p\u00e5 lag",addFieldsLabel:"Tilf\u00f8j felt",addFieldsPopupTitle:"V\u00e6lg felter",addFieldsNameTitle:"Feltnavne",aoiToolsLegendLabel:"AIO-v\u00e6rkt\u00f8jer",aoiToolsDescriptionLabel:"Aktiv\u00e9r v\u00e6rkt\u00f8jer til at oprette interesseomr\u00e5der og angive deres etiketter",placenameLabel:"Stednavn",drawToolsLabel:"Tegnev\u00e6rkt\u00f8jer",uploadShapeFileLabel:"Overf\u00f8r en shapefil",coordinatesLabel:"Koordinater",coordinatesDrpDwnHintText:"Tip: V\u00e6lg enhed til visning af de angivne traverser",
coordinatesBearingDrpDwnHintText:"Tip: V\u00e6lg pejling til visning af de angivne traverser",allowShapefilesUploadLabel:"Tillad overf\u00f8rsel af shapefiler, der skal analyseres",areaUnitsLabel:"Vis omr\u00e5der/l\u00e6ngder i",allowShapefilesUploadLabelHintText:"Tip: Vis 'Overf\u00f8r shapefil i analyse' i rapportfanen",maxFeatureForAnalysisLabel:"Maks. antal objekter til analyse",maxFeatureForAnalysisHintText:"Tip: Angiv maks. antal objekter til analyse",searchToleranceLabelText:"S\u00f8getolerance (fod)",
searchToleranceHint:"Tip: S\u00f8getolerancen anvendes kun, n\u00e5r der analyseres punkt- eller linjeangivelser"},downloadTab:{downloadLegend:"Download-indstillinger",reportLegend:"Rapportindstillinger",downloadTabLabel:"Hent",syncEnableOptionLabel:"Vektorlag",syncEnableOptionHint:"Tip: Benyttes til at downloade objektoplysninger for objekter, der gennemsk\u00e6rer interesseomr\u00e5det, i de angivne formater.",syncEnableOptionNote:"Bem\u00e6rk: Der kr\u00e6ves synkroniseringsaktiverede featuretjenester til filgeodatabase-indstillingen.",
extractDataTaskOptionLabel:"Geoprocesseringstjenesten Udtr\u00e6k dataopgave",extractDataTaskOptionHint:"Tip: Brug en publiceret Udtr\u00e6k dataopgave-geoprocesseringstjeneste til at downloade objekter, der gennemsk\u00e6rer interesseomr\u00e5det i filgeodatabase- eller shapefil-format.",cannotDownloadOptionLabel:"Deaktiv\u00e9r download",syncEnableTableHeaderTitle:{layerNameLabel:"Navn p\u00e5 lag",csvFileFormatLabel:"CSV",fileGDBFormatLabel:"Filgeodatabase",allowDownloadLabel:"Tillad download"},
setButtonLabel:"Indstil",GPTaskLabel:"Angiv URL'en til geoprocesseringstjenesten",printGPServiceLabel:"Udskriv tjeneste-URL",setGPTaskTitle:"Angiv den kr\u00e6vede geoprocesseringstjeneste-URL",logoLabel:"Logo",logoChooserHint:"Tip: Klik p\u00e5 billedikonet for at redigere billedet",footnoteLabel:"Fodnote",columnTitleColorPickerLabel:"Farve p\u00e5 kolonnetitler",reportTitleLabel:"Rapporttitel",errorMessages:{invalidGPTaskURL:"Ugyldig geoprocesseringstjeneste. V\u00e6lg en geoprocesseringstjeneste, der indeholder Udtr\u00e6k dataopgave.",
noExtractDataTaskURL:"V\u00e6lg en vilk\u00e5rlig geoprocesseringstjeneste, der indeholder Udtr\u00e6k dataopgave."}},generalTab:{generalTabLabel:"Generelt",tabLabelsLegend:"Paneletiketter",tabLabelsHint:"Tip: Angiv etiketter",AOITabLabel:"Interesseomr\u00e5de-panel",ReportTabLabel:"Rapportpanel",bufferSettingsLegend:"Bufferindstillinger",defaultBufferDistanceLabel:"Standardbufferafstand",defaultBufferUnitsLabel:"Bufferenheder",generalBufferSymbologyHint:"Tip: Angiv den symbologi, der skal benyttes til at vise buffere omkring definerede interesseomr\u00e5der",
aoiGraphicsSymbologyLegend:"AOI-grafiksymbologi",aoiGraphicsSymbologyHint:"Tip: Angiv den symbologi, der skal benyttes til at definere punkt-, linje- og polygon-interesseromr\u00e5der",pointSymbologyLabel:"Punkt",previewLabel:"Eksempel",lineSymbologyLabel:"Linje",polygonSymbologyLabel:"Polygon",aoiBufferSymbologyLabel:"Buffersymbologi",pointSymbolChooserPopupTitle:"Adresse- eller positionssymbol",polygonSymbolChooserPopupTitle:"V\u00e6lg symbol for at fremh\u00e6ve polygon",lineSymbolChooserPopupTitle:"V\u00e6lg symbol for at fremh\u00e6ve linje",
aoiSymbolChooserPopupTitle:"Indstil buffersymbol"},searchSourceSetting:{searchSourceSettingTabTitle:"S\u00f8gekildeindstillinger",searchSourceSettingTitle:"S\u00f8gekildeindstillinger",searchSourceSettingTitleHintText:"Tilf\u00f8j og konfigur\u00e9r geokodningstjenester eller vektorlag som s\u00f8gekilder. Disse specificerede kilder bestemmer, hvad der kan s\u00f8ges efter i s\u00f8geboksen.",addSearchSourceLabel:"Tilf\u00f8j s\u00f8gekilde",featureLayerLabel:"Vektorlag",geocoderLabel:"Geokoder",
generalSettingLabel:"Generel indstilling",allPlaceholderLabel:"Pladsholdertekst for s\u00f8gning efter alle:",allPlaceholderHintText:"Tip: Indtast den tekst, der skal vises som pladsholder, mens der s\u00f8ges i alle lag og geokoder",generalSettingCheckboxLabel:"Vis pop-up for det fundne objekt eller den fundne position",countryCode:"Lande- eller regionskode(r)",countryCodeEg:"f.eks. ",countryCodeHint:"Hvis denne v\u00e6rdi er tom, bliver der s\u00f8gt efter alle lande og regioner",questionMark:"?",
searchInCurrentMapExtent:"S\u00f8g kun inden for den aktuelle kortudstr\u00e6kning",zoomScale:"Zoom-skala",locatorUrl:"Geokodnings-URL",locatorName:"Navn p\u00e5 geokodningsfunktion",locatorExample:"Eksempel",locatorWarning:"Denne version af geokodningstjenesten underst\u00f8ttes ikke. Widget'en underst\u00f8tter Geokodningstjeneste version 10.0 og nyere.",locatorTips:"Forslag er ikke tilg\u00e6ngelige, fordi geokodningstjenesten ikke underst\u00f8tter forslagsfunktionen.",layerSource:"Lagkilde",
setLayerSource:"Angiv lagkilde",setGeocoderURL:"Angiv geokodnings-URL",searchLayerTips:"Forslag er ikke tilg\u00e6ngelige, fordi featuretjenesten ikke underst\u00f8tter forslagsfunktionen.",placeholder:"Pladsholdertekst",searchFields:"S\u00f8gefelter",displayField:"Visningsfelt:",exactMatch:"N\u00f8jagtigt match",maxSuggestions:"Maksimalt antal forslag",maxResults:"Maksimalt antal resultater",enableLocalSearch:"Aktiv\u00e9r lokal s\u00f8gning",minScale:"Min. m\u00e5lestok",minScaleHint:"N\u00e5r kortm\u00e5lestokken er st\u00f8rre end denne m\u00e5lstok, anvendes lokal s\u00f8gning",
radius:"Radius",radiusHint:"Angiver radius for et omr\u00e5de omkring det aktuelle kortcentrum, der benyttes til at booste rangordningen af geokodningsforslag, s\u00e5 de forslag, der ligger t\u00e6ttest p\u00e5 placeringen, returneres f\u00f8rst",setSearchFields:"Indstil s\u00f8gefelter",set:"Indstil",invalidUrlTip:"URL\u2019en ${URL} er ugyldig eller utilg\u00e6ngelig.",invalidSearchSources:"Ugyldige s\u00f8gekildeindstillinger"},errorMsg:{textboxFieldsEmptyErrorMsg:"Udfyld de obligatoriske felter",
bufferDistanceFieldsErrorMsg:"Angiv gyldige v\u00e6rdier",invalidSearchToleranceErrorMsg:"Angiv en gyldig v\u00e6rdi for s\u00f8getolerance",atLeastOneCheckboxCheckedErrorMsg:"Ugyldig konfiguration",noLayerAvailableErrorMsg:"Ingen lag tilg\u00e6ngelige",layerNotSupportedErrorMsg:"Underst\u00f8ttes ikke ",noFieldSelected:"Brug redigeringshandlingen til at v\u00e6lge felter til analyse.",duplicateFieldsLabels:'Dobbeltforekomst af etiketten "${labelText}" er tilf\u00f8jet til: "${itemNames}"',noLayerSelected:"V\u00e6lg mindst \u00e9t lag til analyse",
errorInSelectingLayer:"Kan ikke fuldf\u00f8re handlingen for det valgte lag. Pr\u00f8v igen.",errorInMaxFeatureCount:"Angiv et gyldigt maks. antal objekter til analysen."},_localized:{}}});