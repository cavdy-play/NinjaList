import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setMovies(prevState => [
      ...prevState,
      { name, price, id: Math.random(Math.round(10 * 1000)) }
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={e => setName(e.target.value)} />
      <input
        type="text"
        name="price"
        onChange={e => setPrice(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
