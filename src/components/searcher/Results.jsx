
import React from 'react';
import search_icon from '../../assets/search_icon.svg'
import { useNavigate, useParams } from 'react-router-dom'

export default function Results({movies}) {
  const navigate = useNavigate()
  return (
    <div className="results-box">
      {movies.map(movie => (
        <div key={movie.id} className="result-item" onClick={navigate('/stream')}>
          <img src={search_icon} className="result-icon" alt="" />
          {movie.title + (movie.release_date ? ` (${movie.release_date.split('-')[0]})` : '')} 
        </div>
      ))}
    </div>
  );
}

