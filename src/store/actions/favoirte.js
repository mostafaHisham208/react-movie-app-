
export default function addToFavorite(data) {
    return {
      type: "ADD_FAV",
      payload: data,
    };
  }
 
export function Removefavorite(data) {
    return {
      type: "REMOVE_FAV",
      payload: data,
    };
  }

   