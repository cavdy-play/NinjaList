import React, { useState, useContext } from 'react';
import NewSongForm from './NewSongForm';
import { ThemeContext } from '../contexts/ThemeContext';

const SongList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'this wild darkness', id: 2 },
    { title: 'memory gospel', id: 3 }
  ]);

  const addSong = title => {
    const uuid = Math.random(Math.round(29299299220));
    setSongs([...songs, { title, id: uuid }]);
  };

  return (
    <div
      className="song-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {songs.map(song => (
          <li style={{ background: theme.ui }} key={song.id}>
            {song.title}
          </li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
