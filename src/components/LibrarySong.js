import React from "react";
const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying, songs }) => {
  // Handler
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    // ADD active state
    songs.map((currentSong) => {
      if (currentSong.id === song.id) {
        currentSong.active = true;
      } else {
        currentSong.active = false;
      }
    });
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
