import React, { useState } from "react";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Mapview from "./Components/Mapview";
import ListView from "./Components/ListView";
export default function App() {
  const [showModal, setShowModal] = useState(true);

  const handleContinue = () => {
    setShowModal(false);
  };
  const [viewMode, setViewMode] = useState("list"); 

  return (
    <>
    {showModal && (<Welcome onContinue={handleContinue} /> )}
    {!showModal && (
    <div className="min-h-screen bg-gray-100">
      <Header viewMode={viewMode} setViewMode={setViewMode} />

      <main className="p-6">
        {viewMode === "list" ? (
         <ListView/>
        ) : (
          <Mapview/>
        )}
      </main>
    </div>
    )}
    </>
  );
}
