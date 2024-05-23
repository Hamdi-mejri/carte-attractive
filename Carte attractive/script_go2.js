var dreux =new google.maps.LatLng(48.736141,1.362293);
var chartres =new google.maps.LatLng(48.446751,1.50341);
var evreux =new google.maps.LatLng(49.01804,1.13818);
var plaisir =new google.maps.LatLng(48.8132378,1.9497316);

var geocoder = new google.maps.Geocoder();
var map = null;
var markers = [];
var zones = [];
var cityCircle;
var bounds = new google.maps.LatLngBounds();

var v1;
var v2;
var v3;
var v4;

var r1;
var r2;
var r3;

var strColor;
var sOpacityEx;
var sOpacity;
var sWeight;
var fColorEx;
var fColorZ1;
var fColorZ2;
var fColorZ3;
var fOpacity;


function init() {

$.getJSON('data.json',function(params) {

v1=params.v1;
v2=params.v2;
v3=params.v3;
v4=params.v4;

r1=params.r1;
r2=params.r2;
r3=params.r3;

strColor=params.strColor;
sOpacityEx=params.sOpacityEx;
fOpacity=params.fOpacity;
sWeight=params.sWeight;
fColorEx=params.fColorEx;
fColorZ1=params.fColorZ1;	
fColorZ2=params.fColorZ2;	
fColorZ3=params.fColorZ3;
sOpacity=params.sOpacity;
	
	});		
}

/**************** DREUX***/
var myCityDreuxZone1Ex = new google.maps.Circle({
  center:dreux,
  radius:10000,
  strokeColor:"red",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor: '#FF0000',
      fillOpacity: 0.35,
  });

var myCityDreuxZone2Ex = new google.maps.Circle({
  center:dreux,
  radius:25000,
  strokeColor:"red",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor: '#FF0000',
      fillOpacity: 0.35,
  });
  
  
var myCityDreuxZone1 = new google.maps.Circle({
  center:dreux,
  radius:10000,
  strokeColor:"red",
  strokeOpacity:0,
  strokeWeight:2,
  fillColor: '#290BB1',
      fillOpacity: 0.35,
  });
  
var myCityDreuxZone2 = new google.maps.Circle({
  center:dreux,
  radius:25000,
  strokeColor:"red",
  strokeOpacity:0,
  strokeWeight:2,
  fillColor: '#27118A',
      fillOpacity: 0.35,
  });

	var myCityDreuxZone3= new google.maps.Circle({
  center:dreux,
  radius:45000,
  strokeColor:"red",
  strokeOpacity:0,
  strokeWeight:2,
  fillColor: '#9088B7',
      fillOpacity: 0.35,
  });
/*
var myCityDreuxZone1Ex = new google.maps.Circle({
  center: v1,
  radius:   parseInt(r1),
  strokeColor:  strColor,
  strokeOpacity:  parseFloat(sOpacityEx),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorEx,
  fillOpacity:  parseFloat(fOpacity),
  });

var myCityDreuxZone2Ex = new google.maps.Circle({
  center:  v1,
  radius:   parseInt(r2),
  strokeColor:  strColor,
  strokeOpacity:  parseFloat(sOpacityEx),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorEx,
  fillOpacity:  parseFloat(fOpacity),
  });
  
  
var myCityDreuxZone1 = new google.maps.Circle({
  center:  v1,
  radius:  parseInt(r1),
  strokeColor:  strColor,
  strokeOpacity:  parseInt(sOpacity),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorZ1,
  fillOpacity: parseFloat(fOpacity),
  });
  
var myCityDreuxZone2 = new google.maps.Circle({
  center:  v1,
  radius:  parseInt(r2),
  strokeColor:  strColor,
  strokeOpacity:  parseInt(sOpacity),
  strokeWeight: parseInt(sWeight),
  fillColor:  fColorZ2,
  fillOpacity:  parseFloat(fOpacity),
  });

	 var myCityDreuxZone3= new google.maps.Circle({
  center:  v1,
  radius:  parseInt(r3),
  strokeColor:  strColor,
  strokeOpacity:  parseInt(sOpacity),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorZ3,
  fillOpacity:  parseFloat(fOpacity),
  });
*/ /****chartres***/
var myCitychartresZone1Ex = new google.maps.Circle({
  center:  v2,
  radius:   parseInt(r1),
  strokeColor:  strColor,
  strokeOpacity:  parseFloat(sOpacityEx),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorEx,
  fillOpacity:  parseFloat(fOpacity),
  });

var myCitychartresZone2Ex = new google.maps.Circle({
  center:  v2,
  radius:   parseInt(r2),
  strokeColor:  strColor,
  strokeOpacity:  parseFloat(sOpacityEx),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorEx,
  fillOpacity:  parseFloat(fOpacity),
  });
  
  
var myCitychartresZone1 = new google.maps.Circle({
  center:  v2,
  radius:  parseInt(r1),
  strokeColor:  strColor,
  strokeOpacity:  parseInt(sOpacity),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorZ1,
  fillOpacity:  parseFloat(fOpacity),
  });
  
var myCitychartresZone2 = new google.maps.Circle({
  center:  v2,
  radius:  parseInt(r2),
  strokeColor:  strColor,
  strokeOpacity:  parseInt(sOpacity),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorZ2,
  fillOpacity:  parseFloat(fOpacity),
  });

	var myCitychartresZone3= new google.maps.Circle({
  center:  v2,
  radius:  parseInt(r3),
  strokeColor:  strColor,
  strokeOpacity:  parseInt(sOpacity),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorZ3,
  fillOpacity:  parseFloat(fOpacity),
  });

/*****************evreux***/
var myCityevreuxZone1Ex = new google.maps.Circle({
  center:  v3,
  radius:   parseInt(r1),
  strokeColor:  strColor,
  strokeOpacity:  parseFloat(sOpacityEx),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorEx,
  fillOpacity:  parseFloat(fOpacity),
  });

var myCityevreuxZone2Ex = new google.maps.Circle({
  center:  v3,
  radius:   parseInt(r2),
  strokeColor:  strColor,
  strokeOpacity:  parseFloat(sOpacityEx),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorEx,
  fillOpacity:  parseFloat(fOpacity),
  });
  
  
var myCityevreuxZone1 = new google.maps.Circle({
  center:v3,
  radius:  parseInt(r1),
  strokeColor:  strColor,
  strokeOpacity:  parseInt(sOpacity),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorZ1,
  fillOpacity:  parseFloat(fOpacity),
  });
  
var myCityevreuxZone2 = new google.maps.Circle({
  center:  v3,
  radius:  parseInt(r2),
  strokeColor:  strColor,
  strokeOpacity:  parseInt(sOpacity),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorZ2,
  fillOpacity:  parseFloat(fOpacity),
  });

	var myCityevreuxZone3= new google.maps.Circle({
  center: v3,
  radius: parseInt(r3),
  strokeColor: strColor,
  strokeOpacity: parseInt(sOpacity),
  strokeWeight: parseInt(sWeight),
  fillColor:  fColorZ3,
  fillOpacity:  parseFloat(fOpacity),
  });
/******plaisir****/
var myCityplaisirZone1Ex = new google.maps.Circle({
  center:  v4,
  radius :  parseInt(r1),
  strokeColor:  strColor,
  strokeOpacity:  parseFloat(sOpacityEx),
  strokeWeight:  parseInt(sWeight),
  fillColor:  fColorEx,
  fillOpacity:  parseFloat(fOpacity),
  });

var myCityplaisirZone2Ex = new google.maps.Circle({
  center: v4,
  radius:  parseInt(r2),
  strokeColor: strColor,
  strokeOpacity: parseFloat(sOpacityEx),
  strokeWeight: parseInt(sWeight),
  fillColor:  fColorEx,
  fillOpacity:  parseFloat(fOpacity),
  });
  
  
var myCityplaisirZone1 = new google.maps.Circle({
  center: v4,
  radius: parseInt(r1),
  strokeColor: strColor,
  strokeOpacity: parseInt(sOpacity),
  strokeWeight: parseInt(sWeight),
  fillColor:  fColorZ1,
  fillOpacity:  parseFloat(fOpacity),
  });
  
var myCityplaisirZone2 = new google.maps.Circle({
  center: v4,
  radius: parseInt(r2),
  strokeColor: strColor,
  strokeOpacity: parseInt(sOpacity),
  strokeWeight: parseInt(sWeight),
  fillColor:  fColorZ2,
      fillOpacity:  parseFloat(fOpacity),
  });

	var myCityplaisirZone3= new google.maps.Circle({
  center: v4,
  radius: parseInt(r3),
  strokeColor: strColor,
  strokeOpacity:parseInt(sOpacity),
  strokeWeight:parseInt(sWeight),
  fillColor: fColorZ3,
      fillOpacity: parseFloat(fOpacity),
  });

// });  
 //});
 /********fin villes******/
 
  
  
var outerbounds = [ // covers the (mercator projection) world
        new google.maps.LatLng(85,180),
    new google.maps.LatLng(85,90),
    new google.maps.LatLng(85,0),
    new google.maps.LatLng(85,-90),
    new google.maps.LatLng(85,-180),
    new google.maps.LatLng(0,-180),
    new google.maps.LatLng(-85,-180),
    new google.maps.LatLng(-85,-90),
    new google.maps.LatLng(-85,0),
    new google.maps.LatLng(-85,90),
    new google.maps.LatLng(-85,180),
    new google.maps.LatLng(0,180),
    new google.maps.LatLng(85,180)];

	
	
// Adds a marker to the map.
function addMarker(destlabel, location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: destlabel,
    map: map
  });
   markers.push(marker);
}
// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Sets the map on all markers in the array.
function setMapOnAllZ(map) {
  for (var i = 0; i < zones.length; i++) {
    zones[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Removes the markers from the map, but keeps them in the array.
function clearZones() {
  setMapOnAllZ(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  
  markers = [];
}
function drawCircle(point, radius, dir) { 
  var d2r = Math.PI / 180;   // degrees to radians 
  var r2d = 180 / Math.PI;   // radians to degrees 
  var earthsradius = 6377.83; // 3963 is the radius of the earth in miles
  var points = 32; 

  // find the raidus in lat/lon 
  var rlat = (radius / earthsradius) * r2d; 
  var rlng = rlat / Math.cos(point.lat() * d2r); 

  var extp = new Array(); 
  if (dir==1)   {var start=0;var end=points+1} // one extra here makes sure we connect the ends
  else      {var start=points+1;var end=0}
  for (var i=start; (dir==1 ? i < end : i > end); i=i+dir) { 
    var theta = Math.PI * (i / (points/2)); 
    extp.push(new google.maps.LatLng(point.lat() + (rlat * Math.sin(theta)), point.lng() + (rlng * Math.cos(theta)))); 
    bounds.extend(extp[extp.length-1]);
  } 
  return extp;
}

 

function initialize()
{
init();
var mapProp = {
  center:dreux,
  zoom:11,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  
map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
loadKmlLayer('http://151.80.143.126:8181/democarte/monDep.kml', map);


// This event listener will call addMarker() when the map is clicked.
  map.addListener('click', function(event) {
   addMarker(event.latLng);
   deleteMarkers();
  });
	
/*myCityDreuxZone3.setMap(map);
myCityDreuxZone2.setMap(map);
myCityDreuxZone1.setMap(map);

myCitychartresZone3.setMap(map);
myCitychartresZone2.setMap(map);
myCitychartresZone1.setMap(map);

myCityevreuxZone3.setMap(map);
myCityevreuxZone2.setMap(map);
myCityevreuxZone1.setMap(map);

myCityplaisirZone3.setMap(map);
myCityplaisirZone2.setMap(map);
myCityplaisirZone1.setMap(map);*/
    // options for the polygon
    
    //map.fitBounds(bounds);
	
	
}


/**
 * Adds a KMLLayer based on the URL passed. Clicking on a marker
 * results in the balloon content being loaded into the right-hand div.
 * @param {string} src A URL for a KML file.
 */
function loadKmlLayer(src, map) {
  var kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
  
}


function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('destination').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
	  markers.push(marker);
    } else {
      alert('L\'adresse saisie ne correspond à aucune ville.');
    }
  });
}


function high(destination, source){


deleteMarkers();
clearZones();
geocodeAddress(geocoder, map);
if(source=="dreux"){
 
myCityDreuxZone3.setMap(map);

myCityDreuxZone2.setMap(map);
myCityDreuxZone1.setMap(map);
zones.push(myCityDreuxZone3);
zones.push(myCityDreuxZone2);
zones.push(myCityDreuxZone1);
$("#pz1").text("20");
		$("#pz2").text("30");
		$("#pz3").text("40");
		
}

if(source=="evreux"){

myCityevreuxZone3.setMap(map);
myCityevreuxZone2.setMap(map);
myCityevreuxZone1.setMap(map);
zones.push(myCityevreuxZone3);
zones.push(myCityevreuxZone2);
zones.push(myCityevreuxZone1);
$("#pz1").text("12");
		$("#pz2").text("18");
		$("#pz3").text("23");

}

if(source=='chartres'){

myCitychartresZone3.setMap(map);
myCitychartresZone2.setMap(map);
myCitychartresZone1.setMap(map);
zones.push(myCitychartresZone3);
zones.push(myCitychartresZone2);
zones.push(myCitychartresZone1);
$("#pz1").text("15");
		$("#pz2").text("25");
		$("#pz3").text("45");
}

if(source=="plaisir"){
myCityplaisirZone3.setMap(map);
myCityplaisirZone2.setMap(map);
myCityplaisirZone1.setMap(map);
zones.push(myCityplaisirZone3);
zones.push(myCityplaisirZone2);
zones.push(myCityplaisirZone1);
$("#pz1").text("17");
		$("#pz2").text("27");
		$("#pz3").text("47");
}

}

function zonage(zone, source){


deleteMarkers();
clearZones();
init();
if(source=="dreux"){
 map.setCenter(dreux);
   if(zone=="0"){
myCityDreuxZone3.setMap(map);
myCityDreuxZone2.setMap(map);
myCityDreuxZone1.setMap(map);
zones.push(myCityDreuxZone3);
zones.push(myCityDreuxZone2);
zones.push(myCityDreuxZone1);
}
  if(zone=="1"){

var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      paths: [outerbounds,drawCircle(dreux,10,-1)]
    };
 cityCircle = new google.maps.Polygon(Options);

zones.push(cityCircle);
}
  if(zone=="2"){


myCityDreuxZone1Ex.setMap(map);

var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      paths: [outerbounds,drawCircle(dreux,25,-1)]
    };
 cityCircle = new google.maps.Polygon(Options);

zones.push(cityCircle);

zones.push(myCityDreuxZone1Ex);
}
if(zone=="3"){


myCityDreuxZone2Ex.setMap(map);

var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      paths: [outerbounds,drawCircle(dreux,45,-1)]
    };
 cityCircle = new google.maps.Polygon(Options);

zones.push(cityCircle);

zones.push(myCityDreuxZone2Ex);
}
$("#pz1").text("20");
		$("#pz2").text("30");
		$("#pz3").text("40");
}

if(source=="evreux"){
 map.setCenter(evreux);
 if(zone=="0"){

myCityevreuxZone3.setMap(map);

myCityevreuxZone2.setMap(map);
myCityevreuxZone1.setMap(map);
zones.push(myCityevreuxZone3);
zones.push(myCityevreuxZone2);
zones.push(myCityevreuxZone1);
}
  if(zone=="1"){

var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      paths: [outerbounds,drawCircle(evreux,10,-1)]
    };
 cityCircle = new google.maps.Polygon(Options);

zones.push(cityCircle);
}
  if(zone=="2"){


myCityevreuxZone1Ex.setMap(map);

var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      paths: [outerbounds,drawCircle(evreux,25,-1)]
    };
 cityCircle = new google.maps.Polygon(Options);

zones.push(cityCircle);

zones.push(myCityevreuxZone1Ex);
}
if(zone=="3"){


myCityevreuxZone2Ex.setMap(map);

var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      paths: [outerbounds,drawCircle(evreux,45,-1)]
    };
 cityCircle = new google.maps.Polygon(Options);

zones.push(cityCircle);

zones.push(myCityevreuxZone2Ex);
}
$("#pz1").text("12");
		$("#pz2").text("18");
		$("#pz3").text("23");
}

if(source=='chartres'){
 map.setCenter(chartres);
if(zone=="0"){

myCitychartresZone3.setMap(map);

myCitychartresZone2.setMap(map);
myCitychartresZone1.setMap(map);
zones.push(myCitychartresZone3);
zones.push(myCitychartresZone2);
zones.push(myCitychartresZone1);
}
  if(zone=="1"){

var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      paths: [outerbounds,drawCircle(chartres,10,-1)]
    };
 cityCircle = new google.maps.Polygon(Options);

zones.push(cityCircle);
}
  if(zone=="2"){


myCitychartresZone1Ex.setMap(map);

var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      paths: [outerbounds,drawCircle(chartres,25,-1)]
    };
 cityCircle = new google.maps.Polygon(Options);

zones.push(cityCircle);

zones.push(myCitychartresZone1Ex);
}
if(zone=="3"){


myCitychartresZone2Ex.setMap(map);

var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      paths: [outerbounds,drawCircle(chartres,45,-1)]
    };
 cityCircle = new google.maps.Polygon(Options);

zones.push(cityCircle);

zones.push(myCitychartresZone2Ex);
}
$("#pz1").text("15");
		$("#pz2").text("25");
		$("#pz3").text("45");
}

if(source=="plaisir"){
 map.setCenter(plaisir);
if(zone=="0"){

myCityplaisirZone3.setMap(map);

myCityplaisirZone2.setMap(map);
myCityplaisirZone1.setMap(map);
zones.push(myCityplaisirZone3);
zones.push(myCityplaisirZone2);
zones.push(myCityplaisirZone1);
}
  if(zone=="1"){

var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      paths: [outerbounds,drawCircle(plaisir,10,-1)]
    };
 cityCircle = new google.maps.Polygon(Options);

zones.push(cityCircle);
}
  if(zone=="2"){


myCityplaisirZone1Ex.setMap(map);

var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      paths: [outerbounds,drawCircle(plaisir,25,-1)]
    };
 cityCircle = new google.maps.Polygon(Options);

zones.push(cityCircle);

zones.push(myCityplaisirZone1Ex);
}
if(zone=="3"){


myCityplaisirZone2Ex.setMap(map);

var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      paths: [outerbounds,drawCircle(plaisir,45,-1)]
    };
 cityCircle = new google.maps.Polygon(Options);

zones.push(cityCircle);

zones.push(myCityplaisirZone2Ex);
}
$("#pz1").text("17");
		$("#pz2").text("27");
		$("#pz3").text("47");
}

}




google.maps.event.addDomListener(window, 'load', initialize);