import axios from "axios";

// The getHorses method retrieves Horses from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getHorses: function(query) {
    return axios.get("/api/Horses", { params: { q: query } });
  }
};
