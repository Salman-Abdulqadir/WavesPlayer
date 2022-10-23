import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <img
        className={`${isPlaying ? "rotate" : ""}`}
        src={currentSong.cover}
      ></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.author}</h3>
    </div>
  );
};

export default Song;
