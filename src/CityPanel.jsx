import { useState } from "react";
import AddPlantModal from "./AddPlantModal.jsx";

export default function CityPanel({ data, color, onClose, onPlantAdded }) {
  const [showModal, setShowModal] = useState(false);

  const allPlants = data.bitkiler || [];

  return (
    <>
      <div className="city-panel" style={{ "--panel-color": color }}>
        <div className="panel-header" style={{ background: color }}>
          <div className="panel-header-text">
            <span className="panel-region">{data.bolge}</span>
            <h2 className="panel-city">{data.il}</h2>
            <span className="panel-badge">{allPlants.length} endemik bitki</span>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Kapat">✕</button>
        </div>

        <div className="panel-body">
          {allPlants.length === 0 ? (
            <div className="no-data">
              <span className="no-data-icon">🔍</span>
              <p>Bu il için veri bulunamadı.</p>
            </div>
          ) : (
            <div className="plants-list">
              {allPlants.map((bitki, i) => (
                <div key={i} className={`plant-card ${bitki.addedByUser ? "user-added" : ""}`}>
                  <div className="plant-icon-wrap" style={{ background: color + "18", color }}>
                    <span className="plant-icon">🌿</span>
                  </div>
                  <div className="plant-info">
                    <div className="plant-name-row">
                      <h3 className="plant-name">{bitki.ad}</h3>
                      {bitki.addedByUser && (
                        <span className="user-badge">Eklendi</span>
                      )}
                    </div>
                    {bitki.yoresel && (
                      <p className="plant-local">
                        <span className="label">Yöresel:</span> {bitki.yoresel}
                      </p>
                    )}
                    <p className="plant-latin">
                      <em>{bitki.latince}</em>
                    </p>
                    {bitki.amac && (
                      <div className="plant-purpose" style={{ background: color + "15", borderColor: color + "60" }}>
                        <span className="label">Amaç:</span> {bitki.amac}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="panel-footer">
          <button
            className="add-plant-btn"
            style={{ background: color }}
            onClick={() => setShowModal(true)}
          >
            <span>+</span> Yeni Bitki Ekle
          </button>
        </div>
      </div>

      {showModal && (
        <AddPlantModal
          city={data.il?.toUpperCase()}
          cityName={data.il}
          onClose={() => setShowModal(false)}
          onAdded={onPlantAdded}
        />
      )}
    </>
  );
}
