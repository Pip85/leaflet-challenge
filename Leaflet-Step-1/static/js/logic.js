//Create map object
var myMap = L.map("map", {
    center: [39.8283, -98.5795],
  zoom: 5
});

//Create tile layer
var tiles = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "light-v10",
  accessToken: API_KEY
}).addTo(myMap);

// Store API path
var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

//_________________________________________________________________________________
// Prior code to see if D3 connection to API is working
// Connect to API through D3
// d3.json(url).then(function(data) {
//     L.geoJson(data, {
//         style: function(feature) {
//             return {
//                 color: "green"
//             };
//         },
//     }).addTo(myMap);
// });
//____________________________________________________________________________________

// Connect to API through D3 and send to createMarkers function
d3.json(url).then(function(data) {
    createMarkers(data.features)
  });

function createMarkers(quakes) {
    function features(feature, layer) {
        layer.bindPopup("<h5>" + feature.properties.place + "</h5><hr><h5>" + "Magnitude: " + feature.properties.mag + "</h5><h5>" + "Depth: " + feature.geometry.coordinates[2] + "</h5>");
    }

    L.geoJSON(quakes, {
        onEachFeature: features
    }).addTo(myMap);

    // createMap(earthquakes);
}

// function createMap(earthquakes) {
//     var tiles = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "light-v10",
//     accessToken: API_KEY
//     })   
    
//     var overlay = {
//         Earthquakes: earthquakes
//     };     

//     var myMap = L.map("map", {
//     center: [39.8283, -98.5795],
//     zoom: 5,
//     layers: [tiles, earthquakes]
//     .addTo(myMap)
//     });

    // L.control.layers(tiles, overlay, {
    //     collapsed:  false
    // }).addTo(myMap);
// }
