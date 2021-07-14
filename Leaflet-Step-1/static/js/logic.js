//Create map object
var myMap = L.map("map", {
    center: [39.8283, -98.5795],
  zoom: 4
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

// Store URL path
var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

// Connect to geoJSON through D3
d3.json(url).then(function(data) {

    // Create function to gather lat/lng from coordinates
    function getLatLng(coord) {
            var lat = coord[1];
            var lng = coord[0];
            var latlng = L.latLng(lat, lng);           
            return latlng, depth;
    }    
   
    // Create function to change circle marker color based on depth
    function getColor(d) {
        return d > 90 ? '#DE3163':
               d > 70 ? '#20A387FF':
               d > 50 ? '#ff8700':
               d > 30 ? '#55A630':
               d > 10 ? '#FDE725FF':               
                        '#404788FF';
    }    

    // Use geoJSON data to populate the map
    L.geoJSON(data, {
     
        // Create circle markers on map and size based on magnitude
        pointToLayer: function (feature, latlng) {          
            return new L.circleMarker(latlng, {
                radius: feature.properties.mag*2.5,
                fillColor: getColor(feature.geometry.coordinates[2]),
                color: "black",
                fillOpacity: .5,
                weight: 1
            });
        },

        // Add popup for each marker with earthquake details
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h5>" + feature.properties.place + "</h5><hr><h5>" + "Magnitude: " + feature.properties.mag + 
            "</h5><h5>" + "Depth: " + feature.geometry.coordinates[2] + "</h5>"); 
        },
    }).addTo(myMap);
       
    // Create legend for depth colors 
    var legend = L.control({position:  "bottomright"});
    legend.onAdd = function(myMap) {
        var div = L.DomUtil.create("div", "info legend");
        limits = [-20, 10, 30, 50, 70, 90],
        labels = [];
        
        for (var i = 0; i < limits.length; i++) {
            div.innerHTML +=
            labels.push(
            '<i class = circle style="background:' + getColor(limits[i] + 1) + '"></i> ' +
            limits[i] + (limits[i + 1] ? '&ndash;' + limits[i + 1]  : '+'));
        }
        div.innerHTML = labels.join('<br>');
        return div;
    };
    legend.addTo(myMap);
  });

      