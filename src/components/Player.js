import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setSongs,
  setCurrentSong,
}) => {
  // play song function
  const playSong = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  // use effect that is triggered when the skip buttons change the current song
  useEffect(() => {
    const newSongs = songs.map((state) => {
      if (state.id === currentSong.id) {
        return { ...state, active: true };
      } else {
        return { ...state, active: false };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  }, [currentSong]);
  // skip track backward and forward
  const skipTrack = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(
        currentIndex === songs.length - 1 ? songs[0] : songs[currentIndex + 1]
      );
      currentIndex += 1;
    } else if (direction === "skip-back") {
      await setCurrentSong(
        currentIndex === 0 ? songs[songs.length - 1] : songs[currentIndex - 1]
      );
      currentIndex -= 1;
    }
  };
  //updating the song info on time update
  const updateSongInfo = (e) => {
    const time = e.target.currentTime;
    const duration = e.target.duration;
    const percentage = Math.round(
      (Math.round(time) / Math.round(duration)) * 100
    );

    setSongInfo({
      currentTime: time,
      duration: duration,
      animationPercentage: percentage,
    });
    //skipping the music when a song finishes
    if (duration === time) skipTrack("skip-forward");
  };
  // formating the time int0 -> minutes: seconds
  const formatTime = (time) => {

    return (
      time ? Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2): "0:00"
    );
  };

  // this function will handle the changes in the input
  const changeTime = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      currentTime: e.target.value,
      duration: songInfo.duration.animationPercentage,
    });
  };

  //styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]} , ${currentSong.color[0]})`,
          }}
          className="track"
        >
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={changeTime}
          />
          <div className="animate-track" style={trackAnim}></div>
        </div>
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrack("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSong}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrack("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={updateSongInfo}
        onLoadedMetadata={updateSongInfo}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};
export default Player;
