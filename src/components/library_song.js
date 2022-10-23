import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  isPlaying,
  audioRef,
  songs,
  setSongs,
}) => {
  const updateCurrentSong = async () => {
    await setCurrentSong(song);
    if (isPlaying) audioRef.current.play();
    setSongs(
      songs.map((state) => {
        if (state.id === song.id) {
          return { ...state, active: true };
        } else {
          return { ...state, active: false };
        }
      })
    );
  };
  return (
    <div
      onClick={updateCurrentSong}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.author}</h4>
        <h5>{song.duration}</h5>
      </div>
    </div>
  );
};
export default LibrarySong;
