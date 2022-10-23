import React from "react";
import LibrarySong from "./library_song";

const Library = ({
  songs,
  setCurrentSong,
  isPlaying,
  audioRef,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "show" : ""}`}>
      <h2>Tracks</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            isPlaying={isPlaying}
            audioRef={audioRef}
            songs={songs}
            setSongs={setSongs}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
