export default async function handler(req, res) {
    const SWIGGY_API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7651566&lng=83.356231&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  
    try {
      const response = await fetch(SWIGGY_API_URL);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  }