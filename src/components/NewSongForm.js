import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');

  const onChange = ({ target: { value } }) => setTitle(value);
  const onSubmit = event => {
    event.preventDefault();
    addSong(title);
    setTitle('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Song Name:</label>
      <input onChange={onChange} value={title} type="text" required />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
