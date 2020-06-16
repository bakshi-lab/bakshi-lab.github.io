var markers = [
    {latLng: [410.50, -87.37], name: 'Chicago'},
    {latLng: [32.46, -96.46], name: 'Dallas'},
    {latLng: [36.10, -115.12], name: 'Las Vegas'},
    {latLng: [34.3, -118.15], name: 'Los Angeles'},
    {latLng: [40.43, -74.00], name: 'New York City'},
    {latLng: [53.412910, -8.243890], name: 'Ireland'},                       
    {latLng: [42.697708, 23.321868], name: 'Sofia, Bulgia'},
    {latLng: [49.014986, -105.270546], name: 'Boulder, CO'} 
];


$(function(){
    $('#map').vectorMap({
        map: 'world_mill',
        zoomOnScroll: false,
        hoverOpacity: 0.7,
        markerStyle: {
            initial: {
                fill: '#FFD700',
                stroke: '#383f47'
            }
        },                
        markers: markers        
    });
});       

function addMapPoint(lat, lon, title){
    removeMapPoint();
    var map = $('#map').vectorMap('get', 'mapObject'); 
    map.addMarkers([{ latLng: [lat, lon], name: title }], []);
}

function removeMapPoint(){
    var map = $('#map').vectorMap('get', 'mapObject'); 
    map.removeAllMarkers();
}

function generateRandomLong() {
    var num = (Math.random()*180).toFixed(3);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
}

function generateRandomLat() {
    var num = (Math.random()*90).toFixed(3);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
}

window.setInterval(function(){
  var lon = generateRandomLong();
  var lat = generateRandomLat();
  
  addMapPoint(lat, lon, lat + "," + lon);
}, 2500);