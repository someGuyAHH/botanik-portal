import { useState, useEffect, useCallback } from "react";
import TurkeyMapLib from "turkey-map-react";
const TurkeyMap = TurkeyMapLib.default ?? TurkeyMapLib;
import plantData from "./data/plants.js";
import CityPanel from "./CityPanel.jsx";
import "./App.css";

const bolgeRenk = {
  "Marmara Bölgesi":           "#1565C0",
  "Ege Bölgesi":               "#2E7D32",
  "Akdeniz Bölgesi":           "#E65100",
  "İç Anadolu Bölgesi":        "#6A1B9A",
  "Karadeniz Bölgesi":         "#00695C",
  "Doğu Anadolu Bölgesi":      "#B71C1C",
  "Güneydoğu Anadolu Bölgesi": "#4E342E",
};

const M = "#1565C0", E = "#2E7D32", A = "#E65100",
      I = "#6A1B9A", K = "#00695C", D = "#B71C1C", G = "#4E342E";

const cityColors = {
  istanbul: M, bursa: M, canakkale: M, edirne: M, kirklareli: M,
  bilecik: M, tekirdag: M, kocaeli: M, sakarya: M, yalova: M, balikesir: M,
  izmir: E, manisa: E, aydin: E, denizli: E, mugla: E,
  kutahya: E, usak: E, afyonkarahisar: E,
  antalya: A, mersin: A, adana: A, hatay: A,
  isparta: A, burdur: A, kahramanmaras: A, osmaniye: A,
  kayseri: I, konya: I, ankara: I, sivas: I, kirikkale: I,
  aksaray: I, karaman: I, kirsehir: I, nevsehir: I, nigde: I,
  yozgat: I, cankiri: I, eskisehir: I,
  bolu: K, artvin: K, rize: K, trabzon: K, samsun: K, ordu: K,
  zonguldak: K, duzce: K, karabuk: K, bartin: K, kastamonu: K,
  sinop: K, amasya: K, tokat: K, corum: K, giresun: K, gumushane: K, bayburt: K,
  erzurum: D, erzincan: D, elazig: D, malatya: D, tunceli: D,
  bingol: D, bitlis: D, mus: D, van: D, hakkari: D,
  agri: D, kars: D, igdir: D, ardahan: D,
  gaziantep: G, sanliurfa: G, diyarbakir: G, mardin: G, adiyaman: G,
  siirt: G, batman: G, sirnak: G, kilis: G,
};

const mapCss = Object.entries(cityColors)
  .map(([id, color]) =>
    `#${id} path{fill:${color}!important}` +
    `#${id}:hover path{filter:brightness(1.15)!important;cursor:pointer}`
  )
  .join("");

const totalStaticPlants = Object.values(plantData)
  .reduce((sum, d) => sum + d.bitkiler.length, 0);

function getCityData(name) {
  const found = Object.entries(plantData).find(
    ([k]) => k.toUpperCase() === name.toUpperCase()
  );
  return found ? found[1] : null;
}

export default function App() {
  const [selected, setSelected] = useState(null);
  const [userPlants, setUserPlants] = useState({});
  const [totalAdded, setTotalAdded] = useState(0);

  useEffect(() => {
    fetch("/api/plants")
      .then((r) => r.json())
      .then((data) => {
        setUserPlants(data);
        const count = Object.values(data).reduce((s, arr) => s + arr.length, 0);
        setTotalAdded(count);
      })
      .catch(() => {});
  }, []);

  const getMergedData = useCallback(
    (staticData, cityKey) => {
      const extra = userPlants[cityKey?.toUpperCase()] || [];
      return {
        ...staticData,
        bitkiler: [...(staticData.bitkiler || []), ...extra],
      };
    },
    [userPlants]
  );

  const handleClick = ({ name, id }) => {
    const data = getCityData(name);
    const regionColor = cityColors[id] ?? bolgeRenk[data?.bolge] ?? "#2d5016";
    const base = data || { il: name, bolge: "—", bitkiler: [] };
    setSelected({
      ...getMergedData(base, name),
      _color: regionColor,
      _cityKey: name.toUpperCase(),
    });
  };

  const handlePlantAdded = (plant) => {
    if (!selected) return;
    setUserPlants((prev) => {
      const key = selected._cityKey;
      return { ...prev, [key]: [...(prev[key] || []), plant] };
    });
    setTotalAdded((n) => n + 1);
    setSelected((prev) => ({
      ...prev,
      bitkiler: [...prev.bitkiler, plant],
    }));
  };

  const panelColor = selected?._color ?? "#2d5016";
  const totalPlants = totalStaticPlants + totalAdded;

  return (
    <div className="app">
      <style>{mapCss}</style>

      <header className="header">
        <div className="header-content">
          <div className="header-brand">
            <div className="header-icon">🌿</div>
            <div className="header-text">
              <h1>Türkiye Endemik Bitki Atlası</h1>
              <p>7 Bölgede Yetişen Endemik Bitkiler</p>
            </div>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">81</span>
              <span className="stat-label">İl</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">7</span>
              <span className="stat-label">Bölge</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">{totalPlants}</span>
              <span className="stat-label">Bitki</span>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="map-section">
          <div className="map-card">
            {!selected && (
              <div className="map-hint">
                <span className="map-hint-icon">👆</span>
                <span>Bir ile tıklayarak o ilin endemik bitkilerini görüntüleyin</span>
              </div>
            )}
            <div className="map-wrapper">
              <TurkeyMap
                hoverable={false}
                onClick={handleClick}
                customStyle={{ idleColor: "#888", hoverColor: "#888" }}
              />
            </div>
          </div>

          <div className="legend">
            {Object.entries(bolgeRenk).map(([bolge, renk]) => (
              <div key={bolge} className="legend-item">
                <span className="legend-dot" style={{ background: renk }} />
                <span>{bolge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`panel-section ${selected ? "has-selection" : ""}`}>
          {selected ? (
            <CityPanel
              data={selected}
              color={panelColor}
              onClose={() => setSelected(null)}
              onPlantAdded={handlePlantAdded}
            />
          ) : (
            <div className="empty-panel">
              <div className="empty-illustration">
                <div className="empty-leaf">🌱</div>
                <div className="empty-ring" />
              </div>
              <h3>Bir il seçin</h3>
              <p>
                Haritadaki herhangi bir ile tıklayarak o ilde yetişen endemik
                bitkiler hakkında bilgi edinebilirsiniz.
              </p>
              <p className="empty-sub">
                Türkiye&apos;de 81 ilde endemik bitki verisi mevcuttur.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <span>🌿 Türkiye Endemik Bitki Atlası</span>
          <span className="footer-sep">·</span>
          <span>All Rights Reserved. Developed with ❤️ by Furkan Hasanusta & Bora Toker</span>
        </div>
      </footer>
    </div>
  );
}
