import { useState } from "react";
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

// city id (from library) → hex color
const M = "#1565C0", E = "#2E7D32", A = "#E65100",
      I = "#6A1B9A", K = "#00695C", D = "#B71C1C", G = "#4E342E";

const cityColors = {
  // Marmara
  istanbul: M, bursa: M, canakkale: M, edirne: M, kirklareli: M,
  bilecik: M, tekirdag: M, kocaeli: M, sakarya: M, yalova: M, balikesir: M,
  // Ege
  izmir: E, manisa: E, aydin: E, denizli: E, mugla: E,
  kutahya: E, usak: E, afyonkarahisar: E,
  // Akdeniz
  antalya: A, mersin: A, adana: A, hatay: A,
  isparta: A, burdur: A, kahramanmaras: A, osmaniye: A,
  // İç Anadolu
  kayseri: I, konya: I, ankara: I, sivas: I, kirikkale: I,
  aksaray: I, karaman: I, kirsehir: I, nevsehir: I, nigde: I,
  yozgat: I, cankiri: I, eskisehir: I,
  // Karadeniz
  bolu: K, artvin: K, rize: K, trabzon: K, samsun: K, ordu: K,
  zonguldak: K, duzce: K, karabuk: K, bartin: K, kastamonu: K,
  sinop: K, amasya: K, tokat: K, corum: K, giresun: K, gumushane: K, bayburt: K,
  // Doğu Anadolu
  erzurum: D, erzincan: D, elazig: D, malatya: D, tunceli: D,
  bingol: D, bitlis: D, mus: D, van: D, hakkari: D,
  agri: D, kars: D, igdir: D, ardahan: D,
  // Güneydoğu Anadolu
  gaziantep: G, sanliurfa: G, diyarbakir: G, mardin: G, adiyaman: G,
  siirt: G, batman: G, sirnak: G, kilis: G,
};

const mapCss = Object.entries(cityColors)
  .map(([id, color]) =>
    `#${id} path{fill:${color}!important}` +
    `#${id}:hover path{opacity:0.72!important;cursor:pointer}`
  )
  .join("");

function getCityData(name) {
  const found = Object.entries(plantData).find(
    ([k]) => k.toUpperCase() === name.toUpperCase()
  );
  return found ? found[1] : null;
}

export default function App() {
  const [selected, setSelected] = useState(null);

  const handleClick = ({ name, id }) => {
    const data = getCityData(name);
    const regionColor = cityColors[id] ?? bolgeRenk[data?.bolge] ?? "#2d5016";
    setSelected({
      ...(data || { il: name, bolge: "—", bitkiler: [] }),
      _color: regionColor,
    });
  };

  const panelColor = selected?._color ?? "#2d5016";

  return (
    <div className="app">
      <style>{mapCss}</style>

      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1>Türkiye Endemik Bitki Atlası</h1>
            <p>7 Bölgede Yetişen Endemik Bitkiler</p>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="map-section">
          {!selected && (
            <p className="map-hint">
              Bir ile tıklayarak o ilin endemik bitkilerini görüntüleyin
            </p>
          )}
          <div className="map-wrapper">
            <TurkeyMap
              hoverable={false}
              onClick={handleClick}
              customStyle={{ idleColor: "#888", hoverColor: "#888" }}
            />
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
            />
          ) : (
            <div className="empty-panel">
              <div className="empty-icon">🌱</div>
              <h3>Bir il seçin</h3>
              <p>
                Haritadaki herhangi bir ile tıklayarak o ilde yetişen endemik
                bitkiler hakkında bilgi edinebilirsiniz.
              </p>
              <p className="empty-sub">Türkiye&apos;de 81 ilde endemik bitki verisi mevcuttur.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <p>Hazırlayan: Bora Toker | Hazırlık A | 115</p>
      </footer>
    </div>
  );
}
