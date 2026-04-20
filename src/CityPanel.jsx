import { useState } from "react";
import AddPlantModal from "./AddPlantModal.jsx";
import { apiUrl } from "./api.js";

function DeleteConfirm({ plant, city, userIdx, onCancel, onDeleted }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Şifre boş bırakılamaz.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(apiUrl.deletePlant(city, userIdx), {
        method: "POST",
        headers: { "x-admin-password": password },
      });
      if (res.status === 401) {
        setError("Yanlış şifre.");
        return;
      }
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Bir hata oluştu");
      }
      onDeleted(userIdx);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header modal-header--danger">
          <div>
            <p className="modal-subtitle">Bitki Sil</p>
            <h3 className="modal-title">{plant.ad}</h3>
          </div>
          <button className="modal-close" onClick={onCancel} aria-label="Kapat">✕</button>
        </div>
        <form onSubmit={handleDelete} className="modal-form">
          <div className="auth-info auth-info--danger">
            <span className="auth-icon">⚠️</span>
            <p>Bu bitki kalıcı olarak silinecek. Devam etmek için yönetici şifresini girin.</p>
          </div>
          <div className="form-group">
            <label htmlFor="del-password">Yönetici Şifresi <span className="required">*</span></label>
            <input
              id="del-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifrenizi girin"
              autoFocus
              autoComplete="current-password"
            />
          </div>
          {error && <p className="form-error">{error}</p>}
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onCancel}>İptal</button>
            <button type="submit" className="btn-danger" disabled={loading}>
              {loading ? "Siliniyor…" : "Sil"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function CityPanel({ data, color, onClose, onPlantAdded, onPlantDeleted }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

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
                  {bitki.addedByUser && (
                    <button
                      className="delete-plant-btn"
                      title="Sil"
                      aria-label="Bitkiyi sil"
                      onClick={() => setDeleteTarget(bitki)}
                    >
                      🗑
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="panel-footer">
          <button
            className="add-plant-btn"
            style={{ background: color }}
            onClick={() => setShowAddModal(true)}
          >
            <span>+</span> Yeni Bitki Ekle
          </button>
        </div>
      </div>

      {showAddModal && (
        <AddPlantModal
          city={data.il?.toUpperCase()}
          cityName={data.il}
          onClose={() => setShowAddModal(false)}
          onAdded={onPlantAdded}
        />
      )}

      {deleteTarget && (
        <DeleteConfirm
          plant={deleteTarget}
          city={data.il?.toUpperCase()}
          userIdx={deleteTarget._userIdx}
          onCancel={() => setDeleteTarget(null)}
          onDeleted={(idx) => {
            onPlantDeleted(idx);
            setDeleteTarget(null);
          }}
        />
      )}
    </>
  );
}
