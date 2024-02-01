import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowDetails = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [showId]);

  return (
    <div>
      <h1>Show Details</h1>
      {show ? (
        <div>
          <h2>{show.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: show.summary }} />
          <Link to="/">Back to Home</Link>
        </div>
      ) : (
        <p>Loading show details...</p>
      )}
    </div>
  );
};

export default ShowDetails;
