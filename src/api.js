const BASE = "/api/index.php";

export const apiUrl = {
  auth:        ()           => `${BASE}?_route=auth`,
  plants:      ()           => `${BASE}?_route=plants`,
  cityPlants:  (city)       => `${BASE}?_route=plants/${encodeURIComponent(city)}`,
  deletePlant: (city, idx)  => `${BASE}?_route=plants/${encodeURIComponent(city)}/${idx}/delete`,
};
