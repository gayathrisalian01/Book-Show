import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <Link to={`/shows/${show.show.id}`}>
              {show.show.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
