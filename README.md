Earthquake Visualizer
🔎 Overview

Earthquake Visualizer is a React-based web application designed for Casey, a geography student who wants to explore and understand recent seismic activity around the world.
It fetches real-time earthquake data from the USGS Earthquake API and displays it both as a map visualization and a detailed list for easy exploration.

🚀 Features
🟣 1. Introductory Popup

When the app first loads, an animated popup introduces Casey’s purpose — studying seismic activity patterns.

It includes a Continue button that smoothly transitions into the main application view.

🗺️ 2. Dual Section Layout

The main screen is divided into two sections:

Map View — built using React Leaflet, showing earthquake epicenters on an interactive world map.

List View — showing earthquake details like place name, magnitude, depth, and time in readable format.

🔍 3. Interactive Sorting & Filtering

Users can search by region (place name).

Users can sort earthquakes by magnitude (ascending or descending).

Data updates dynamically to reflect the latest earthquakes from the USGS API.

💬 4. Error Notifications

If data fetching fails, an error popup with a red background appears at the bottom of the screen.

🧭 5. Map Interaction

The map is fully interactive — users can zoom, pan, and click on markers to view earthquake details in a popup.

Uses OpenStreetMap tiles through react-leaflet
