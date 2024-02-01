const API_URL = 'https://api.tvmaze.com/search/shows?q=all';

const fetchShows = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export default { fetchShows };
