export default function CityPanel({ data, color, onClose }) {
  return (
    <div className="city-panel" style={{ "--panel-color": color }}>
      <div className="panel-header" style={{ background: color }}>
        <div className="panel-header-text">
          <span className="panel-region">{data.bolge}</span>
          <h2 className="panel-city">{data.il}</h2>
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Kapat">
          ✕
        </button>
      </div>

      <div className="panel-body">
        {data.bitkiler.length === 0 ? (
          <p className="no-data">Bu il için veri bulunamadı.</p>
        ) : (
          <div className="plants-list">
            <p className="plants-count">
              {data.bitkiler.length} endemik bitki
            </p>
            {data.bitkiler.map((bitki, i) => (
              <div key={i} className="plant-card">
                <div className="plant-icon" style={{ color }}>🌸</div>
                <div className="plant-info">
                  <h3 className="plant-name">{bitki.ad}</h3>
                  <p className="plant-local">
                    <span className="label">Yöresel adı:</span> {bitki.yoresel}
                  </p>
                  <p className="plant-latin">
                    <em>{bitki.latince}</em>
                  </p>
                  <div className="plant-purpose" style={{ background: color + "22", borderColor: color }}>
                    <span className="label">Amacı:</span> {bitki.amac}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
