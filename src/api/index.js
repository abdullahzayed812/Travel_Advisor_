import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export async function getPlacesData(ne, sw) {
  const { data: { data } } = await axios.get(URL, {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'b6b7fbbdcamsh79f3ce1539d72c7p1509f4jsne825039e980d'
  }});
  return data;
}
