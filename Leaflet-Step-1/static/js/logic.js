//Create map object
// var myMap = L.map("map", {
//     center: [39.8283, -98.5795],
//   zoom: 5
// });

//Create tile layer
// var tiles = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "light-v10",
//   accessToken: API_KEY
// }).addTo(myMap);

// Store API path
// var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

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
// d3.json(url).then(function(data) {
    // createMarkers(data.features)
//     createMarkers(data)
// });

// function getLatLng(coord) {
//     var lat = coord[1];
//     var lng = coord[0];
//     var latlng = L.latLng(lat, lng);
//     console.log (latlng);
//     return latlng;
// }

// function markerSize(magnitude) {
//     return magnitude/4; 
// }


// function createMarkers(quakes) {
//     function features(feature, layer) {
//         layer.bindPopup("<h5>" + feature.properties.place + "</h5><hr><h5>" + "Magnitude: " + feature.properties.mag + "</h5><h5>" + "Depth: " + feature.geometry.coordinates[2] + "</h5>");
        
//         var latlng = getLatLng(feature.geometry.coord);
        
//         L.circleMarker(latlng, {
//             radius:  markerSize(feature.properties.mag),
//             fillColor: "green",
//             color: "green",
//             fillOpactity: .5
//         });

        // pointToLayer: function (feature, coordinates) {
        //     return L.circleMarker(latlng, geojsonMarkerOptions);
        // }
//     } 
        
//     L.geoJSON(quakes, {              
//         onEachFeature: features
//     }).addTo(myMap);
// }


//______________________________________________________________________________
// TEST CODE ===================================================================
//______________________________________________________________________________

// Store API path
// var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

// Connect to API through D3 and send to createMarkers function
// d3.json(url).then(function(data) {
//    var geojsonFeature = data;
//     console.log(geojsonFeature)
// });

//Create map object
// var myMap = L.map("map", {
//     center: [39.8283, -98.5795],
//   zoom: 5
// });

//Create tile layer
// var tiles = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "light-v10",
//   accessToken: API_KEY
// }).addTo(myMap);

// Connect to API through D3 and send to createMarkers function
// d3.json(url).then(function(data) {
//     var earthquakeData = data;
//     L.geoJSON(earthquakeData).addTo(myMap)
    
//     var coords = [];
//     function features(feature, layer) {
//         layer.bindPopup("<h5>" + feature.properties.place + "</h5><hr><h5>" + "Magnitude: " + feature.properties.mag + "</h5><h5>" + "Depth: " + feature.geometry.coordinates[2] + "</h5>");
//         coords.push([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]);
        
//         var geojsonMarkerOptions = {

//             fillColor: "green",
//             color: "green",
//             fillOpacity: .5,
//             radius: 8
//         };
      
//         pointToLayer: function (feature, latlng) {
//             return L.circleMarker(coords, geojsonMarkerOptions);
//         }.addTo(myMap)
//     });
//     };

//     var earthquakeFeatures = L.geoJSON(earthquakeData, {
//         onEachFeature: features
//         pointToLayer: 
//     });
    
//     earthquakeFeatures.addTo(myMap);
// })

//______________________________________________________________________________
// TEST CODE ===================================================================
//______________________________________________________________________________

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

// Create function to determine marker size based on magnitude
function markerSize(magnitude) {
    return magnitude/4;
}

var geojsonMarkerOptions = {
    fillColor: "green",
    color: "green",
    fillOpacity: .5,
}

// Store API path
var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

// Connect to API through D3 and send to createMarkers function
d3.json(url).then(function(data) {
    function getLatLng(coord) {
            var lat = coord[1];
            var lng = coord[0];
            var latlng = L.latLng(lat, lng);
            console.log (latlng);
            return latlng;
        }
    
    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    }).addTo(myMap);
        
        // style: function (feature) {
    //         return {
    //             fillColor: "green",
    //             color: "green",
    //             fillOpacity: .5,
    //             radius: 8
    //         };            
    //     },
    //     onEachFeature: function(feature, layer) {
    //         layer.bindPopup("<h5>" + feature.properties.place + "</h5><hr><h5>" + "Magnitude: " + feature.properties.mag + "</h5><h5>" + "Depth: " + feature.geometry.coordinates[2] + "</h5>"); 
    // });
 });