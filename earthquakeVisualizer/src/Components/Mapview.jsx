import React, { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Popup,
} from "react-leaflet";

export default function Mapview() {
    const [earthquakes, setEarthquakes] = useState([]);
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(
                    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
                );
                const data = await res.json();
                setEarthquakes(data.features);
            } catch (err) {
                setError("Failed to fetch earthquake data. Please try again later.");
                setShowError(true);
                console.error("Error fetching earthquake data:", error);
                setTimeout(() => setShowError(false), 3000);
            }
        }
        fetchData();
    }, []);


    const formatTime = (timestamp) => {
        return new Date(timestamp).toLocaleString();
    };

    const getColor = (mag) => {
        if (mag < 3) return "green";
        if (mag < 5) return "orange";
        return "red";
    };

    return (
        <div className="h-[80vh] w-full mt-4 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <h2 className="sticky top-0 w-full bg-violet-300 shadow-md font-bold text-center text-black text-2xl">You can click on the marked places to check magnitude,depth time</h2>
            <MapContainer
                center={[20, 0]}
                zoom={2}
                scrollWheelZoom={true}
                dragging={true}
                doubleClickZoom={true}
                zoomControl={true}
                className="h-full w-full rounded-lg"

            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
            />

            {earthquakes.map((quake) => {
                const [lon, lat, depth] = quake.geometry.coordinates;
                const mag = quake.properties.mag;

                return (
                    <CircleMarker
                        key={quake.id}
                        center={[lat, lon]}
                        radius={mag * 2}
                        fillOpacity={0.6}
                        color={getColor(mag)}
                    >
                        <Popup>
                            <div className="text-sm">
                                <p>
                                    <strong>Location:</strong> {quake.properties.place}
                                </p>
                                <p>
                                    <strong>Magnitude:</strong> {mag}
                                </p>
                                <p>
                                    <strong>Depth:</strong> {depth} km
                                </p>
                                <p>
                                    <strong>Time:</strong> {formatTime(quake.properties.time)}
                                </p>
                            </div>
                        </Popup>
                    </CircleMarker>
                );
            })}
        </MapContainer>
        </div >
    );
}
