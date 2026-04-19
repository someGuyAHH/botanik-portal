const plantData = {
  İSTANBUL: {
    il: "İstanbul",
    bolge: "Marmara Bölgesi",
    bitkiler: [
      {
        ad: "İstanbul Çiğdemi",
        yoresel: "İstanbul çiğdemi",
        latince: "Crocus flavus subsp. sarichiae",
        amac: "Süs bitkisi",
      },
      {
        ad: "Kilyos Peygamber Çiçeği",
        yoresel: "Kilyos düğme çiçeği",
        latince: "Centaurea kilaea",
        amac: "Kıyı koruma ve peyzaj",
      },
    ],
  },
  BURSA: {
    il: "Bursa",
    bolge: "Marmara Bölgesi",
    bitkiler: [
      {
        ad: "Uludağ Çanı",
        yoresel: "Uludağ çan çiçeği",
        latince: "Campanula uludagensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Uludağ Kardeleni",
        yoresel: "Uludağ kardeleni",
        latince: "Galanthus plicatus subsp. byzantinus",
        amac: "Süs bitkisi",
      },
    ],
  },
  ÇANAKKALE: {
    il: "Çanakkale",
    bolge: "Marmara Bölgesi",
    bitkiler: [
      {
        ad: "Kazdağı Göknarı",
        yoresel: "Kazdağı göknarı",
        latince: "Abies nordmanniana subsp. equi-trojani",
        amac: "Orman ekosistemi",
      },
      {
        ad: "Truva Peygamber Çiçeği",
        yoresel: "Truva peygamber çiçeği",
        latince: "Centaurea trojana",
        amac: "Peyzaj",
      },
    ],
  },
  EDİRNE: {
    il: "Edirne",
    bolge: "Marmara Bölgesi",
    bitkiler: [
      {
        ad: "Edirne Peygamber Çiçeği",
        yoresel: "Edirne düğme çiçeği",
        latince: "Centaurea edirnensis",
        amac: "Bilimsel araştırma",
      },
      {
        ad: "Trakya Şalba",
        yoresel: "Edirne adaçayı",
        latince: "Salvia tchihatcheffii",
        amac: "Tıbbi bitki",
      },
    ],
  },
  KIRKLARELİ: {
    il: "Kırklareli",
    bolge: "Marmara Bölgesi",
    bitkiler: [
      {
        ad: "Istranca Menekşesi",
        yoresel: "Istranca menekşesi",
        latince: "Viola sphaerocarpa",
        amac: "Bilimsel araştırma",
      },
      {
        ad: "Yıldız Çiğdemi",
        yoresel: "Trakya çiğdemi",
        latince: "Crocus pallasii",
        amac: "Süs bitkisi",
      },
    ],
  },
  BİLECİK: {
    il: "Bilecik",
    bolge: "Marmara Bölgesi",
    bitkiler: [
      {
        ad: "Bilecik Çiğdemi",
        yoresel: "Bilecik çiğdemi",
        latince: "Crocus bilecikensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Osmaneli Geveni",
        yoresel: "Osmaneli geveni",
        latince: "Astragalus besetensis",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  TEKİRDAĞ: {
    il: "Tekirdağ",
    bolge: "Marmara Bölgesi",
    bitkiler: [
      {
        ad: "Tekirdağ Lalesi",
        yoresel: "Tekirdağ lalesi",
        latince: "Tulipa hellespontica",
        amac: "Süs bitkisi",
      },
      {
        ad: "Ganos Çanı",
        yoresel: "Istranca çan çiçeği",
        latince: "Campanula veneris",
        amac: "Peyzaj",
      },
    ],
  },
  KOCAELİ: {
    il: "Kocaeli",
    bolge: "Marmara Bölgesi",
    bitkiler: [
      {
        ad: "Kocaeli Çiğdemi",
        yoresel: "Kocaeli çiğdemi",
        latince: "Crocus kotschyanus",
        amac: "Süs bitkisi",
      },
      {
        ad: "Kartepe Menekşesi",
        yoresel: "Kartepe menekşesi",
        latince: "Viola pseudogracilis",
        amac: "Süs bitkisi",
      },
    ],
  },
  SAKARYA: {
    il: "Sakarya",
    bolge: "Marmara Bölgesi",
    bitkiler: [
      {
        ad: "Adapazarı Sümbülü",
        yoresel: "Sakarya sümbülü",
        latince: "Scilla vardaria",
        amac: "Süs bitkisi",
      },
      {
        ad: "Sakarya Geveni",
        yoresel: "Sakarya geveni",
        latince: "Astragalus sakaryaensis",
        amac: "Toprak koruma",
      },
    ],
  },
  YALOVA: {
    il: "Yalova",
    bolge: "Marmara Bölgesi",
    bitkiler: [
      {
        ad: "Yalova Safran Çiçeği",
        yoresel: "Yalova safranı",
        latince: "Crocus yalovaensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Yalova Peygamber Çiçeği",
        yoresel: "Yalova düğme çiçeği",
        latince: "Centaurea yalovaensis",
        amac: "Peyzaj",
      },
    ],
  },
  BALIKESİR: {
    il: "Balıkesir",
    bolge: "Marmara Bölgesi",
    bitkiler: [
      {
        ad: "Manyas Çiğdemi",
        yoresel: "Manyas çiğdemi",
        latince: "Crocus pestalozzae",
        amac: "Süs bitkisi",
      },
      {
        ad: "Kazdağı Çayı",
        yoresel: "Kazdağı dağ çayı",
        latince: "Sideritis trojana",
        amac: "Bitki çayı",
      },
    ],
  },
  İZMİR: {
    il: "İzmir",
    bolge: "Ege Bölgesi",
    bitkiler: [
      {
        ad: "Yamanlar Çiğdemi",
        yoresel: "İzmir çiğdemi",
        latince: "Crocus fleischeri",
        amac: "Süs bitkisi",
      },
      {
        ad: "Efeler Adaçayı",
        yoresel: "İzmir adaçayı",
        latince: "Salvia smyrnaea",
        amac: "Tıbbi bitki",
      },
    ],
  },
  MANİSA: {
    il: "Manisa",
    bolge: "Ege Bölgesi",
    bitkiler: [
      {
        ad: "Spil Dağı Lalesi",
        yoresel: "Spil lalesi",
        latince: "Tulipa orphanidea",
        amac: "Süs bitkisi",
      },
      {
        ad: "Manisa Çanı",
        yoresel: "Manisa çan çiçeği",
        latince: "Campanula lyrata",
        amac: "Peyzaj",
      },
    ],
  },
  AYDIN: {
    il: "Aydın",
    bolge: "Ege Bölgesi",
    bitkiler: [
      {
        ad: "Tüllüşah",
        yoresel: "Aydın peygamber çiçeği",
        latince: "Centaurea amaena",
        amac: "Süs bitkisi",
      },
      {
        ad: "Aydın Geveni",
        yoresel: "Aydın geveni",
        latince: "Astragalus aytatchii",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  DENİZLİ: {
    il: "Denizli",
    bolge: "Ege Bölgesi",
    bitkiler: [
      {
        ad: "Denizli Sığırkuyruğu",
        yoresel: "Denizli yünlü gelini",
        latince: "Verbascum denizliense",
        amac: "Bilimsel araştırma",
      },
      {
        ad: "Honaz Dağı Çiğdemi",
        yoresel: "Honaz çiğdemi",
        latince: "Crocus honazensis",
        amac: "Süs bitkisi",
      },
    ],
  },
  MUĞLA: {
    il: "Muğla",
    bolge: "Ege Bölgesi",
    bitkiler: [
      {
        ad: "Datça Hurması",
        yoresel: "Datça hurması",
        latince: "Phoenix theophrasti",
        amac: "Peyzaj",
      },
      {
        ad: "Anadolu Sığla Ağacı",
        yoresel: "Sığla ağacı",
        latince: "Liquidambar orientalis",
        amac: "Reçine üretimi ve tıbbi",
      },
    ],
  },
  KÜTAHYA: {
    il: "Kütahya",
    bolge: "Ege Bölgesi",
    bitkiler: [
      {
        ad: "Kütahya Çiğdemi",
        yoresel: "Kütahya çiğdemi",
        latince: "Crocus kutahyensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Murat Dağı Çanı",
        yoresel: "Murat dağı çan çiçeği",
        latince: "Campanula kutahyensis",
        amac: "Peyzaj",
      },
    ],
  },
  UŞAK: {
    il: "Uşak",
    bolge: "Ege Bölgesi",
    bitkiler: [
      {
        ad: "Uşak Geveni",
        yoresel: "Uşak geveni",
        latince: "Astragalus usakensis",
        amac: "Toprak koruma",
      },
      {
        ad: "Uşak Çiğdemi",
        yoresel: "Uşak çiğdemi",
        latince: "Crocus wattiorum",
        amac: "Süs bitkisi",
      },
    ],
  },
  AFYONKARAHİSAR: {
    il: "Afyonkarahisar",
    bolge: "Ege Bölgesi",
    bitkiler: [
      {
        ad: "Eber Sarısı",
        yoresel: "Eber sarısı (Piyan)",
        latince: "Vuralia turcica",
        amac: "Bilimsel araştırma",
      },
      {
        ad: "Afyon Geveni",
        yoresel: "Afyon geveni",
        latince: "Astragalus physodes",
        amac: "Doğal sakız",
      },
    ],
  },
  ANTALYA: {
    il: "Antalya",
    bolge: "Akdeniz Bölgesi",
    bitkiler: [
      {
        ad: "Antalya Çiğdemi",
        yoresel: "Antalya çiğdemi",
        latince: "Crocus antalyensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Olympos Şalbası",
        yoresel: "Olimpos adaçayı",
        latince: "Salvia olympica",
        amac: "Tıbbi bitki ve peyzaj",
      },
    ],
  },
  MERSİN: {
    il: "Mersin",
    bolge: "Akdeniz Bölgesi",
    bitkiler: [
      {
        ad: "Tarsus Çiğdemi",
        yoresel: "Tarsus çiğdemi",
        latince: "Crocus graves-tarsus",
        amac: "Süs bitkisi",
      },
      {
        ad: "Gülnar Geveni",
        yoresel: "Gülnar geveni",
        latince: "Astragalus gulnarensis",
        amac: "Toprak koruma",
      },
    ],
  },
  ADANA: {
    il: "Adana",
    bolge: "Akdeniz Bölgesi",
    bitkiler: [
      {
        ad: "Adana Çiğdemi",
        yoresel: "Adana çiğdemi",
        latince: "Crocus adanensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Akyatan Peygamber Çiçeği",
        yoresel: "Akyatan düğme çiçeği",
        latince: "Centaurea akyatanensis",
        amac: "Kıyı ekosistemi koruma",
      },
    ],
  },
  HATAY: {
    il: "Hatay",
    bolge: "Akdeniz Bölgesi",
    bitkiler: [
      {
        ad: "Amanos Çiğdemi",
        yoresel: "Amanos çiğdemi",
        latince: "Crocus vitellinus",
        amac: "Süs bitkisi",
      },
      {
        ad: "Hatay Geveni",
        yoresel: "Hatay geveni",
        latince: "Astragalus hatschbachii",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  ISPARTA: {
    il: "Isparta",
    bolge: "Akdeniz Bölgesi",
    bitkiler: [
      {
        ad: "Eğirdir Çanı",
        yoresel: "Eğirdir çan çiçeği",
        latince: "Campanula sivasica",
        amac: "Peyzaj",
      },
      {
        ad: "Isparta Geveni",
        yoresel: "Isparta geveni",
        latince: "Astragalus isparticus",
        amac: "Doğal ürün",
      },
    ],
  },
  BURDUR: {
    il: "Burdur",
    bolge: "Akdeniz Bölgesi",
    bitkiler: [
      {
        ad: "Burdur Peygamber Çiçeği",
        yoresel: "Burdur düğme çiçeği",
        latince: "Centaurea burdurica",
        amac: "Süs bitkisi",
      },
      {
        ad: "Salda Sığırkuyruğu",
        yoresel: "Salda gölü sığırkuyruğu",
        latince: "Verbascum saldense",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  KAHRAMANMARAŞ: {
    il: "Kahramanmaraş",
    bolge: "Akdeniz Bölgesi",
    bitkiler: [
      {
        ad: "Maraş Ters Lalesi",
        yoresel: "Maraş lalesi",
        latince: "Fritillaria elwesii",
        amac: "Süs bitkisi",
      },
      {
        ad: "Binboğa Çanı",
        yoresel: "Binboğa çan çiçeği",
        latince: "Campanula damboltiana",
        amac: "Peyzaj",
      },
    ],
  },
  OSMANİYE: {
    il: "Osmaniye",
    bolge: "Akdeniz Bölgesi",
    bitkiler: [
      {
        ad: "Amanos Menekşesi",
        yoresel: "Amanos menekşesi",
        latince: "Viola amanica",
        amac: "Süs bitkisi",
      },
      {
        ad: "Osmaniye Geveni",
        yoresel: "Osmaniye geveni",
        latince: "Astragalus osmaniyeensis",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  KAYSERİ: {
    il: "Kayseri",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Erciyes Çanı",
        yoresel: "Erciyes çan çiçeği",
        latince: "Campanula erciyesica",
        amac: "Peyzaj",
      },
      {
        ad: "Kayseri Geveni",
        yoresel: "Kayseri geveni",
        latince: "Astragalus kayserianus",
        amac: "Doğal ürün",
      },
    ],
  },
  KONYA: {
    il: "Konya",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Konya Peygamber Çiçeği",
        yoresel: "Konya düğme çiçeği",
        latince: "Centaurea iconiensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Tuz Gölü Karahindibası",
        yoresel: "Tuz gölü karahindibası",
        latince: "Taraxacum mirabile",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  ANKARA: {
    il: "Ankara",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Ankara Çiğdemi",
        yoresel: "Ankara çiğdemi",
        latince: "Crocus ancyrensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Sevgi Çiçeği",
        yoresel: "Gölbaşı sevgi çiçeği",
        latince: "Centaurea tchihatcheffii",
        amac: "Kültürel miras",
      },
    ],
  },
  SİVAS: {
    il: "Sivas",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Sivas Geveni",
        yoresel: "Sivas geveni",
        latince: "Astragalus sivasicus",
        amac: "Toprak koruma",
      },
      {
        ad: "Sivas Çiğdemi",
        yoresel: "Sivas çiğdemi",
        latince: "Crocus sivasensis",
        amac: "Süs bitkisi",
      },
    ],
  },
  KIRIKKale: {
    il: "Kırıkkale",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Kırıkkale Geveni",
        yoresel: "Kırıkkale geveni",
        latince: "Astragalus kirikkalensis",
        amac: "Bilimsel araştırma",
      },
      {
        ad: "İç Anadolu Şalbası",
        yoresel: "Kırıkkale adaçayı",
        latince: "Salvia kurdica",
        amac: "Tıbbi bitki",
      },
    ],
  },
  AKSARAY: {
    il: "Aksaray",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Hasandağı Çanı",
        yoresel: "Hasan dağı çan çiçeği",
        latince: "Campanula aksarayensis",
        amac: "Peyzaj",
      },
      {
        ad: "Tuz Gölü Sümbülü",
        yoresel: "Aksaray sümbülü",
        latince: "Muscari vuralii",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  KARAMAN: {
    il: "Karaman",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Karaman Geveni",
        yoresel: "Karaman geveni",
        latince: "Astragalus karamanicus",
        amac: "Toprak koruma",
      },
      {
        ad: "Ermenek Peygamber Çiçeği",
        yoresel: "Ermenek düğme çiçeği",
        latince: "Centaurea ermenekensis",
        amac: "Süs bitkisi",
      },
    ],
  },
  KIRŞEHİR: {
    il: "Kırşehir",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Kırşehir Geveni",
        yoresel: "Kırşehir geveni",
        latince: "Astragalus kirshehiricus",
        amac: "Bilimsel araştırma",
      },
      {
        ad: "Mucur Peygamber Çiçeği",
        yoresel: "Mucur düğme çiçeği",
        latince: "Centaurea mucurensis",
        amac: "Süs bitkisi",
      },
    ],
  },
  NEVŞEHİR: {
    il: "Nevşehir",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Kapadokya Soğanı",
        yoresel: "Kapadokya soğanı",
        latince: "Allium cappadocicum",
        amac: "Aromatik bitki",
      },
      {
        ad: "Nevşehir Çiğdemi",
        yoresel: "Nevşehir çiğdemi",
        latince: "Crocus nevshehirensis",
        amac: "Süs bitkisi",
      },
    ],
  },
  NİĞDE: {
    il: "Niğde",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Bolkar Kardeleni",
        yoresel: "Niğde kardeleni",
        latince: "Galanthus nivalis subsp. cilicicus",
        amac: "Süs bitkisi",
      },
      {
        ad: "Niğde Geveni",
        yoresel: "Niğde geveni",
        latince: "Astragalus nigdeensis",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  YOZGAT: {
    il: "Yozgat",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Yozgat Adaçayı",
        yoresel: "Yozgat şalbası",
        latince: "Salvia yosgadensis",
        amac: "Tıbbi bitki",
      },
      {
        ad: "Yozgat Çiğdemi",
        yoresel: "Yozgat çiğdemi",
        latince: "Crocus ancyrensis subsp. yosgadensis",
        amac: "Süs bitkisi",
      },
    ],
  },
  ÇANKIRI: {
    il: "Çankırı",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Çankırı Geveni",
        yoresel: "Çankırı geveni",
        latince: "Astragalus czanciriensis",
        amac: "Bilimsel araştırma",
      },
      {
        ad: "Tuzlu Peygamber Çiçeği",
        yoresel: "Çankırı düğme çiçeği",
        latince: "Centaurea tuzlucensis",
        amac: "Süs bitkisi",
      },
    ],
  },
  ESKİŞEHİR: {
    il: "Eskişehir",
    bolge: "İç Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Eskişehir Çiğdemi",
        yoresel: "Eskişehir çiğdemi",
        latince: "Crocus demirizianus",
        amac: "Süs bitkisi",
      },
      {
        ad: "Sündiken Adaçayı",
        yoresel: "Eskişehir şalbası",
        latince: "Salvia sündikenensis",
        amac: "Tıbbi bitki",
      },
    ],
  },
  BOLU: {
    il: "Bolu",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Abant Çiğdemi",
        yoresel: "Abant çiğdemi",
        latince: "Crocus abantensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Bolu Alıcı",
        yoresel: "Bolu alıcı",
        latince: "Crataegus boluensis",
        amac: "Gıda ve peyzaj",
      },
    ],
  },
  ARTVİN: {
    il: "Artvin",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Artvin Çanı",
        yoresel: "Artvin çan çiçeği",
        latince: "Campanula choruhensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Hopa Engereği",
        yoresel: "Hopa engerek otu",
        latince: "Echium orientale",
        amac: "Arıcılık",
      },
    ],
  },
  RİZE: {
    il: "Rize",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Rize Dağ Çayı",
        yoresel: "Rize dağ çayı",
        latince: "Sideritis rizeensis",
        amac: "Bitki çayı",
      },
      {
        ad: "İkizdere Çiğdemi",
        yoresel: "Rize çiğdemi",
        latince: "Crocus vallicola",
        amac: "Süs bitkisi",
      },
    ],
  },
  TRABZON: {
    il: "Trabzon",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Trabzon Peygamber Çiçeği",
        yoresel: "Trabzon düğme çiçeği",
        latince: "Centaurea trapezuntina",
        amac: "Bilimsel araştırma",
      },
      {
        ad: "Sümela Çanı",
        yoresel: "Sümela çan çiçeği",
        latince: "Campanula sumelensis",
        amac: "Peyzaj",
      },
    ],
  },
  SAMSUN: {
    il: "Samsun",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Samsun Geveni",
        yoresel: "Samsun geveni",
        latince: "Astragalus samsunianus",
        amac: "Toprak koruma",
      },
      {
        ad: "Bafra Sığırkuyruğu",
        yoresel: "Samsun sığırkuyruğu",
        latince: "Verbascum samsunense",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  ORDU: {
    il: "Ordu",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Ordu Menekşesi",
        yoresel: "Ordu menekşesi",
        latince: "Viola orbelica",
        amac: "Süs bitkisi",
      },
      {
        ad: "Giresun Dağ Çayı",
        yoresel: "Karadeniz çayı",
        latince: "Sideritis amasiaca",
        amac: "Bitki çayı",
      },
    ],
  },
  ZONGULDAK: {
    il: "Zonguldak",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Zonguldak Çiğdemi",
        yoresel: "Zonguldak çiğdemi",
        latince: "Crocus zonguldakensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Filyos Peygamber Çiçeği",
        yoresel: "Zonguldak düğme çiçeği",
        latince: "Centaurea zonguldakensis",
        amac: "Kıyı koruma",
      },
    ],
  },
  DÜZCE: {
    il: "Düzce",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Düzce Peygamber Çiçeği",
        yoresel: "Düzce düğme çiçeği",
        latince: "Centaurea pinetorum",
        amac: "Bilimsel araştırma",
      },
      {
        ad: "Efteni Menekşesi",
        yoresel: "Batı Karadeniz menekşesi",
        latince: "Viola dirimliensis",
        amac: "Peyzaj",
      },
    ],
  },
  KARABÜK: {
    il: "Karabük",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Safranbolu Çiğdemi",
        yoresel: "Safran çiçeği",
        latince: "Crocus sativus",
        amac: "Baharat ve tıbbi",
      },
      {
        ad: "Kel Tepe Çanı",
        yoresel: "Karabük çan çiçeği",
        latince: "Campanula karabukensis",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  BARTIN: {
    il: "Bartın",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Bartın Geveni",
        yoresel: "Bartın geveni",
        latince: "Astragalus bartinensis",
        amac: "Toprak koruma",
      },
      {
        ad: "Amasra Peygamber Çiçeği",
        yoresel: "Amasra düğme çiçeği",
        latince: "Centaurea bartineensis",
        amac: "Peyzaj",
      },
    ],
  },
  KASTAMONU: {
    il: "Kastamonu",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Ilgaz Dağı Çiğdemi",
        yoresel: "Ilgaz çiğdemi",
        latince: "Crocus ilgazensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Kastamonu Sığırkuyruğu",
        yoresel: "Kastamonu yünlü gelini",
        latince: "Verbascum kastamonicum",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  SİNOP: {
    il: "Sinop",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Sinop Çiğdemi",
        yoresel: "Sinop çiğdemi",
        latince: "Crocus sinopensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Sinop Peygamber Çiçeği",
        yoresel: "Sinop düğme çiçeği",
        latince: "Centaurea sinopensis",
        amac: "Kıyı ekosistemi",
      },
    ],
  },
  AMASYA: {
    il: "Amasya",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Amasya Geveni",
        yoresel: "Amasya geveni",
        latince: "Astragalus amasiensis",
        amac: "Doğal ürün",
      },
      {
        ad: "Amasya Çöreotu",
        yoresel: "Amasya çörek otu",
        latince: "Nigella amasiaca",
        amac: "Tıbbi bitki",
      },
    ],
  },
  TOKAT: {
    il: "Tokat",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Tokat Peygamber Çiçeği",
        yoresel: "Tokat düğme çiçeği",
        latince: "Centaurea tokatiensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Tokat Geveni",
        yoresel: "Tokat geveni",
        latince: "Astragalus tokatiensis",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  ÇORUM: {
    il: "Çorum",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Çorum Geveni",
        yoresel: "Çorum geveni",
        latince: "Astragalus corumensis",
        amac: "Toprak koruma",
      },
      {
        ad: "Çorum Çiğdemi",
        yoresel: "Çorum çiğdemi",
        latince: "Crocus hittiticus",
        amac: "Süs bitkisi",
      },
    ],
  },
  GİRESUN: {
    il: "Giresun",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Giresun Çanı",
        yoresel: "Giresun çan çiçeği",
        latince: "Campanula giresunensis",
        amac: "Peyzaj",
      },
      {
        ad: "Giresun Dağ Çayı",
        yoresel: "Giresun yayla çayı",
        latince: "Sideritis amasiaca",
        amac: "Bitki çayı",
      },
    ],
  },
  GÜMÜŞHANE: {
    il: "Gümüşhane",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Gümüşhane Çiğdemi",
        yoresel: "Gümüşhane çiğdemi",
        latince: "Crocus gümüşhaneensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Zigana Peygamber Çiçeği",
        yoresel: "Zigana düğme çiçeği",
        latince: "Centaurea ziganensis",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  BAYBURT: {
    il: "Bayburt",
    bolge: "Karadeniz Bölgesi",
    bitkiler: [
      {
        ad: "Bayburt Geveni",
        yoresel: "Bayburt geveni",
        latince: "Astragalus bayburtensis",
        amac: "Toprak koruma",
      },
      {
        ad: "Bayburt Sığırkuyruğu",
        yoresel: "Bayburt yünlü gelini",
        latince: "Verbascum bayburtens",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  ERZURUM: {
    il: "Erzurum",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Erzurum Geveni",
        yoresel: "Erzurum geveni",
        latince: "Astragalus erzincanicus",
        amac: "Doğal sakız",
      },
      {
        ad: "Palandöken Çanı",
        yoresel: "Erzurum çan çiçeği",
        latince: "Campanula palandokenensis",
        amac: "Peyzaj",
      },
    ],
  },
  ERZİNCAN: {
    il: "Erzincan",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Erzincan Sütotu",
        yoresel: "Erzincan süt otu",
        latince: "Polygala erzincanica",
        amac: "Bilimsel araştırma",
      },
      {
        ad: "Keşiş Dağı Çiğdemi",
        yoresel: "Erzincan çiğdemi",
        latince: "Crocus kotschyanus",
        amac: "Süs bitkisi",
      },
    ],
  },
  ELAZIĞ: {
    il: "Elazığ",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Elazığ Peygamber Çiçeği",
        yoresel: "Elazığ düğme çiçeği",
        latince: "Centaurea elazigensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Hazarşah Geveni",
        yoresel: "Elazığ geveni",
        latince: "Astragalus elazigensis",
        amac: "Toprak koruma",
      },
    ],
  },
  MALATYA: {
    il: "Malatya",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Malatya Peygamber Çiçeği",
        yoresel: "Malatya düğme çiçeği",
        latince: "Centaurea malatyaensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Hekimhan Geveni",
        yoresel: "Malatya geveni",
        latince: "Astragalus hekimhanicus",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  TUNCELİ: {
    il: "Tunceli",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Munzur Çanı",
        yoresel: "Munzur çan çiçeği",
        latince: "Campanula munzurensis",
        amac: "Peyzaj",
      },
      {
        ad: "Tunceli Sarımsağı",
        yoresel: "Tunceli dağ sarımsağı",
        latince: "Allium tuncelianum",
        amac: "Gıda ve aromatik",
      },
    ],
  },
  BİNGÖL: {
    il: "Bingöl",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Bingöl Çiğdemi",
        yoresel: "Bingöl çiğdemi",
        latince: "Crocus bingolensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Bingöl Geveni",
        yoresel: "Bingöl geveni",
        latince: "Astragalus bingolensis",
        amac: "Toprak koruma",
      },
    ],
  },
  BİTLİS: {
    il: "Bitlis",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Bitlis Peygamber Çiçeği",
        yoresel: "Bitlis düğme çiçeği",
        latince: "Centaurea bitlisensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Nemrut Soğanı",
        yoresel: "Bitlis yabani soğanı",
        latince: "Allium nemrutdaghense",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  MUŞ: {
    il: "Muş",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Muş Lalesi",
        yoresel: "Muş lalesi",
        latince: "Tulipa sintenisii",
        amac: "Kültürel miras ve süs",
      },
      {
        ad: "Muş Geveni",
        yoresel: "Muş geveni",
        latince: "Astragalus muschianus",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  VAN: {
    il: "Van",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Van Çanı",
        yoresel: "Van çan çiçeği",
        latince: "Campanula vanensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Van Ters Lalesi",
        yoresel: "Van lalesi (Ağlayan Gelin)",
        latince: "Fritillaria imperialis",
        amac: "Süs bitkisi",
      },
    ],
  },
  HAKKARİ: {
    il: "Hakkari",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Hakkari Çiğdemi",
        yoresel: "Hakkari çiğdemi",
        latince: "Crocus hakkariensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Cilo Ters Lalesi",
        yoresel: "Hakkari ters lalesi",
        latince: "Fritillaria kurdica",
        amac: "Kültürel miras",
      },
    ],
  },
  AĞRI: {
    il: "Ağrı",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Ağrı Dağı Çiğdemi",
        yoresel: "Ağrı dağı çiğdemi",
        latince: "Crocus karduchorum",
        amac: "Süs bitkisi",
      },
      {
        ad: "Ağrı Geveni",
        yoresel: "Ağrı geveni",
        latince: "Astragalus argyrophyllus",
        amac: "Toprak koruma",
      },
    ],
  },
  KARS: {
    il: "Kars",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Kars Geveni",
        yoresel: "Kars geveni",
        latince: "Astragalus karsianus",
        amac: "Toprak koruma",
      },
      {
        ad: "Kars Papatyası",
        yoresel: "Kars papatyası",
        latince: "Tanacetum kotschyi",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  IĞDIR: {
    il: "Iğdır",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Iğdır Çiğdemi",
        yoresel: "Sürmeli çiğdemi",
        latince: "Crocus pallasii subsp. haussknechtii",
        amac: "Süs bitkisi",
      },
      {
        ad: "Aras Geveni",
        yoresel: "Iğdır geveni",
        latince: "Astragalus igdiricus",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  ARDAHAN: {
    il: "Ardahan",
    bolge: "Doğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Ardahan Peygamber Çiçeği",
        yoresel: "Ardahan düğme çiçeği",
        latince: "Centaurea ardahanensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Ardahan Geveni",
        yoresel: "Ardahan geveni",
        latince: "Astragalus kemulariae",
        amac: "Toprak koruma",
      },
    ],
  },
  GAZİANTEP: {
    il: "Gaziantep",
    bolge: "Güneydoğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Antep Sümbülü",
        yoresel: "Antep sümbülü",
        latince: "Hyacinthus orientalis subsp. chionophilus",
        amac: "Süs bitkisi",
      },
      {
        ad: "Antep Geveni",
        yoresel: "Antep geveni",
        latince: "Astragalus aintabicus",
        amac: "Doğal ürün",
      },
    ],
  },
  ŞANLIURFA: {
    il: "Şanlıurfa",
    bolge: "Güneydoğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Urfa Ters Lalesi",
        yoresel: "Urfa ters lalesi",
        latince: "Fritillaria persica",
        amac: "Süs bitkisi",
      },
      {
        ad: "Mezopotamya Sümbülü",
        yoresel: "Urfa sümbülü",
        latince: "Scilla mesopotamica",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  DİYARBAKIR: {
    il: "Diyarbakır",
    bolge: "Güneydoğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Diyarbakır Peygamber Çiçeği",
        yoresel: "Diyarbakır düğme çiçeği",
        latince: "Centaurea diyarbakirensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Karacadağ Çiğdemi",
        yoresel: "Diyarbakır çiğdemi",
        latince: "Crocus leichtlinii",
        amac: "Süs bitkisi",
      },
    ],
  },
  MARDİN: {
    il: "Mardin",
    bolge: "Güneydoğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Mardin Peygamber Çiçeği",
        yoresel: "Mardin düğme çiçeği",
        latince: "Centaurea mardinensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Mardin Geveni",
        yoresel: "Mardin geveni",
        latince: "Astragalus mardinensis",
        amac: "Toprak koruma",
      },
    ],
  },
  ADIYAMAN: {
    il: "Adıyaman",
    bolge: "Güneydoğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Adıyaman Çiğdemi",
        yoresel: "Nemrut çiğdemi",
        latince: "Crocus adiyamanensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Nemrut Geveni",
        yoresel: "Adıyaman geveni",
        latince: "Astragalus nemrutdaghensis",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  SİİRT: {
    il: "Siirt",
    bolge: "Güneydoğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Siirt Geveni",
        yoresel: "Siirt geveni",
        latince: "Astragalus siirticus",
        amac: "Toprak koruma",
      },
      {
        ad: "Botan Çan Çiçeği",
        yoresel: "Siirt çanı",
        latince: "Campanula paucicapitata",
        amac: "Peyzaj",
      },
    ],
  },
  BATMAN: {
    il: "Batman",
    bolge: "Güneydoğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Batman Peygamber Çiçeği",
        yoresel: "Batman düğme çiçeği",
        latince: "Centaurea batmaniensis",
        amac: "Bilimsel araştırma",
      },
      {
        ad: "Sason Ters Lalesi",
        yoresel: "Batman lalesi",
        latince: "Fritillaria sasonica",
        amac: "Süs bitkisi",
      },
    ],
  },
  ŞIRNAK: {
    il: "Şırnak",
    bolge: "Güneydoğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Cudi Çiğdemi",
        yoresel: "Şırnak çiğdemi",
        latince: "Crocus cudiensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Şırnak Geveni",
        yoresel: "Şırnak geveni",
        latince: "Astragalus sirnakensis",
        amac: "Bilimsel araştırma",
      },
    ],
  },
  KİLİS: {
    il: "Kilis",
    bolge: "Güneydoğu Anadolu Bölgesi",
    bitkiler: [
      {
        ad: "Kilis Sümbülü",
        yoresel: "Kilis sümbülü",
        latince: "Muscari kilisensis",
        amac: "Süs bitkisi",
      },
      {
        ad: "Kilis Adaçayı",
        yoresel: "Kilis şalbası",
        latince: "Salvia kilisiana",
        amac: "Tıbbi bitki",
      },
    ],
  },
};

export default plantData;
