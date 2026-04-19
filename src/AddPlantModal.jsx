import { useState } from "react";

export default function AddPlantModal({ city, cityName, onClose, onAdded }) {
  const [step, setStep] = useState("auth");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  const [form, setForm] = useState({ ad: "", yoresel: "", latince: "", amac: "" });
  const [submitError, setSubmitError] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!password.trim()) {
      setAuthError("Şifre boş bırakılamaz.");
      return;
    }
    setAuthError("");
    setAuthLoading(true);
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "x-admin-password": password },
      });
      if (res.status === 401) {
        setAuthError("Yanlış şifre. Lütfen tekrar deneyin.");
        return;
      }
      if (!res.ok) throw new Error("Sunucu hatası");
      setStep("form");
    } catch (err) {
      if (err.message !== "Yanlış şifre. Lütfen tekrar deneyin.") {
        setAuthError("Sunucuya bağlanılamadı.");
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.ad.trim() || !form.latince.trim()) {
      setSubmitError("Bitki adı ve latince adı zorunludur.");
      return;
    }
    setSubmitError("");
    setSubmitLoading(true);
    try {
      const res = await fetch(`/api/plants/${encodeURIComponent(city)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
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
      setSubmitError(err.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="modal-subtitle">
              {step === "auth" ? "Yetki Doğrulama" : "Yeni Bitki Ekle"}
            </p>
            <h3 className="modal-title">{cityName}</h3>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Kapat">✕</button>
        </div>

        {step === "auth" ? (
          <form onSubmit={handleAuth} className="modal-form">
            <div className="auth-info">
              <span className="auth-icon">🔒</span>
              <p>Bitki eklemek için yönetici şifresi gereklidir.</p>
            </div>
            <div className="form-group">
              <label htmlFor="password">Yönetici Şifresi <span className="required">*</span></label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifrenizi girin"
                autoFocus
                autoComplete="current-password"
              />
            </div>
            {authError && <p className="form-error">{authError}</p>}
            <div className="modal-actions">
              <button type="button" className="btn-secondary" onClick={onClose}>İptal</button>
              <button type="submit" className="btn-primary" disabled={authLoading}>
                {authLoading ? "Doğrulanıyor…" : "Devam Et →"}
              </button>
            </div>
          </form>
        ) : (
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
            {submitError && <p className="form-error">{submitError}</p>}
            <div className="modal-actions">
              <button type="button" className="btn-secondary" onClick={() => setStep("auth")}>
                ← Geri
              </button>
              <button type="submit" className="btn-primary" disabled={submitLoading}>
                {submitLoading ? "Ekleniyor…" : "Bitki Ekle"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
