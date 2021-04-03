import { useState, useRef } from "react";

//import styles
import "./styles/app.scss";

//Adding components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

//import data
import data from "./data";

function App() {
  //Ref
  const audioRef = useRef("null");
  const testRef = useRef("null");
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  // event handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  return (
    <div className="App">
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      ></Nav>
      <Song currentSong={currentSong}></Song>
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        setSongs={setSongs}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
      ></Player>
      <Library
        libraryStatus={libraryStatus}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      ></Library>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      />
    </div>
  );
}

export default App;
