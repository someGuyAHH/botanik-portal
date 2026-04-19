import { useState } from "react";

export default function AddPlantModal({ city, cityName, onClose, onAdded }) {
  const [form, setForm] = useState({ ad: "", yoresel: "", latince: "", amac: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.ad.trim() || !form.latince.trim()) {
      setError("Bitki adı ve latince adı zorunludur.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/plants/${encodeURIComponent(city)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Bir hata oluştu");
      }
      const plant = await res.json();
      onAdded(plant);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="modal-subtitle">Yeni Bitki Ekle</p>
            <h3 className="modal-title">{cityName}</h3>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Kapat">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="ad">Bitki Adı <span className="required">*</span></label>
            <input
              id="ad"
              name="ad"
              value={form.ad}
              onChange={handleChange}
              placeholder="örn. Uludağ Çanı"
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="yoresel">Yöresel Adı</label>
            <input
              id="yoresel"
              name="yoresel"
              value={form.yoresel}
              onChange={handleChange}
              placeholder="örn. Dağ çan çiçeği"
            />
          </div>

          <div className="form-group">
            <label htmlFor="latince">Latince Adı <span className="required">*</span></label>
            <input
              id="latince"
              name="latince"
              value={form.latince}
              onChange={handleChange}
              placeholder="örn. Campanula uludagensis"
            />
          </div>

          <div className="form-group">
            <label htmlFor="amac">Kullanım Amacı</label>
            <input
              id="amac"
              name="amac"
              value={form.amac}
              onChange={handleChange}
              placeholder="örn. Süs bitkisi, Tıbbi"
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>İptal</button>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Ekleniyor…" : "Bitki Ekle"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
