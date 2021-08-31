# **leaflet-challenge**

Student project - use leaflet.js to visualize earthquakes across the world.

## **software/tools used**

* HTML 5<br>
* Bootstrap 5<br>
* CSS<br>
* Javascript<br>
* Leaflet<br>
* d3js<BR>

## **resources**

* Background and datasets provided as part of Georgia Tech Data Analytics Boot Camp:<br>
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.<br>
* The map of earthquake sites was based on data from the US Geological Survey site below:
* http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

* The data included earthquake information such as latitude and longitude coordinates, depth of earthquake, magnitude of earthquake and text location over the last seven days(as of 7/14/21).  The data was presented in a geoJSON format.

## **project background**

* Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

* The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

* Your first task is to visualize an earthquake data set.

1. **Get your data set**

   * The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit (http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.

2. **Import & Visualize the Data**

   * Create a map using Leaflet that plots all of the earthquakes from your data set based on their  longitude and latitude.

   * Your data markers should reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color.

   * Include popups that provide additional information about the earthquake when a marker is clicked.

   * Create a legend that will provide context for your map data.

## **acknowledgement**

* Background provided as part of Georgia Tech Data Analytics Boot Camp:<br>
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.<br>
* The map of earthquake sites was based on data from the US Geological Survey site below:
* http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

## **process**

* Initial code included setting up a map using leaflet and importing the tile layers for the map.  Then a data connection to the API was established using D3.JSON.  After connecting to the data, the latitude and longitude coordinates were gathered to mark the earthquake locations.

* Using leaflet geoJSON, a map layer was created to show locations with a circle marker.  The marker size is determined by the earthquake magnitude.  This was done by adjusting the radius of each circle to correspond with the earthquake magnitude in each location.

* Marker colors were also added by assigning colors to each marker based on a locations earthquake depth.

* Next, popups were added to each marker showing the earthquake location, depth and magnitude.  The popups are visible by clicking on a marker.

* The final piece of the code is to add the legend of colors for each depth scale.  This was added to the bottom right of the map.

* The data pulled for this challenge showed relatively small size and depth throughout the United States as compared to other parts of the world, particularly South America's west coast.  The glaring exception to that is Alaska, which has more activity and variety of depth than even the well-know earthquake centric California.

* Take a look at the earthquakes from this past week (from 7/14/21).
![Earthquakes](Images/EarthquakesNorthAmericaJul21.png)
