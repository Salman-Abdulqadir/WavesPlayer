import React, { useState, useRef } from "react";
import "./styles/app.scss";

//importing song library
import SongLibrary from "./resources";
//importing components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/nav";

function App() {
  // use reference of the song that is playing
  const audioRef = useRef(null);
  //use states of the app
  const [songs, setSongs] = useState(SongLibrary());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);

  // a state if the library button is toggled
  const [libraryStatus, setLibraryStatus] = useState(false);

  // use state of the duration
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  return (
    <div className={`App ${libraryStatus ? "library-activated" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song isPlaying={isPlaying} currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
    </div>
  );
}

export default App;
