import React, { useEffect, useState } from "react";

export default function ListView() {
    const [earthquakes, setEarthquakes] = useState([]);
    const [filterMag, setFilterMag] = useState(""); // e.g., >4.0
    const [filterRegion, setFilterRegion] = useState(""); // substring filter
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(
                    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
                );
                const data = await res.json();
                // sort by time descending (most recent first)
                const sorted = data.features.sort(
                    (a, b) => b.properties.time - a.properties.time
                );
                setEarthquakes(sorted);
            } catch (error) {
                setError("Failed to fetch earthquake data. Please try again later.");
                setShowError(true);
                console.error("Error fetching earthquake data:", error);
                setTimeout(() => setShowError(false), 3000);
                console.error("Error fetching earthquake data:", error);
            }
        }
        fetchData();
    }, []);

    const filteredQuakes = earthquakes.filter((quake) => {
        const mag = quake.properties.mag || 0;
        const place = quake.properties.place.toLowerCase();
        const magFilter = filterMag ? mag >= parseFloat(filterMag) : true;
        const regionFilter = filterRegion
            ? place.includes(filterRegion.toLowerCase())
            : true;
        return magFilter && regionFilter;
    });

    const formatTime = (timestamp) => new Date(timestamp).toLocaleString();

    return (
        <div className="mt-4">
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <input
                    type="number"
                    placeholder="Magnitude (e.g:5)"
                    className="border px-3 py-2 rounded w-full sm:w-48 border-b-2"
                    value={filterMag}
                    onChange={(e) => setFilterMag(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Region (e.g.:Washington)"
                    className="border px-3 py-2 rounded w-full sm:w-48 border-b-2"
                    value={filterRegion}
                    onChange={(e) => setFilterRegion(e.target.value)}
                />
            </div>
             <h2 className="sticky top-0 w-full bg-violet-300 shadow-md font-bold text-center text-black text-2xl">List of places where earthquakes happened recently 👇</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md  "  >
                    <thead className="bg-violet-600 text-white" >
                        <tr>
                            <th className="px-4 py-2 text-left">Place</th>
                            <th className="px-4 py-2 text-center">Magnitude</th>
                            <th className="px-4 py-2 text-center">Depth (km)</th>
                            <th className="px-4 py-2 text-center">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredQuakes.map((quake) => (
                            <tr
                                key={quake.id}
                                className="border-b hover:bg-gray-100 transition-colors"
                            >
                                <td className="px-4 py-2">{quake.properties.place}</td>
                                <td className="px-4 py-2 text-center">{quake.properties.mag}</td>
                                <td className="px-4 py-2 text-center">{quake.geometry.coordinates[2]}</td>
                                <td className="px-4 py-2 text-center">{formatTime(quake.properties.time)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
