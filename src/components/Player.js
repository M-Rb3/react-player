import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  SongInfo,
  updateSonginfo,
  songs,
}) => {
  const getTime = (current) => {
    return (
      Math.floor(current / 60) +
      ":" +
      ("0" + Math.floor(current % 60)).slice(-2)
    );
  };

  // Event Handlers
  const activeLibraryHandler = (currentSong) => {
    songs.map((song) => {
      if (currentSong.id === song.id) {
        song.active = true;
      } else {
        song.active = false;
      }
      if (isPlaying) audioRef.current.play();
    });
  };
  const playSongHandler = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
    } else {
      setIsPlaying(true);
      audioRef.current.play();
    }
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    updateSonginfo({ ...SongInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    } else {
      if (currentIndex === 0) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
      } else {
        await setCurrentSong(songs[currentIndex - 1]);
        activeLibraryHandler(songs[currentIndex - 1]);
      }
    }
  };
  // Add Styles
  const trackAim = {
    transform: `translateX(${SongInfo.animationPercentage}%)`,
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(SongInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={SongInfo.duration || 0}
            value={SongInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAim} className="animate-track"></div>
        </div>
        <p>{SongInfo.duration ? getTime(SongInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          onClick={() => skipTrackHandler("skip-forward")}
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};
export default Player;
