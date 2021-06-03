import React, { useRef, useState } from "react";
// Import Styles
import "./styles/App.scss";
// Import Util
import data from "./data";
// Import Components
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

function App() {
  // ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [SongInfo, updateSonginfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  // Handlers
  const updateSongHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // calculate percantage
    const roundCurrent = Math.round(current);
    const roundDuration = Math.round(duration);
    const animation = Math.round((roundCurrent / roundDuration) * 100);

    updateSonginfo({
      ...SongInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: animation,
    });
  };
  const songEndhandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div className={`app ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        SongInfo={SongInfo}
        updateSonginfo={updateSonginfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        songs={songs}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={updateSongHandler}
        onLoadedMetadata={updateSongHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndhandler}
      ></audio>
    </div>
  );
}

export default App;
