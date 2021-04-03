import React from "react";
import LibrarySong from "./LibrarySong";

function Library({ songs, setCurrentSong, audioRef, isPlaying, setSongs }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              setSongs={setSongs}
              key={song.id}
              audioRef={audioRef}
              song={song}
              songs={songs}
              id={song.id}
              isPlaying={isPlaying}
              setCurrentSong={setCurrentSong}
            ></LibrarySong>
          );
        })}
      </div>
    </div>
  );
}

export default Library;
