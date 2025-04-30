// Define a Song interface
export interface Song {
    id: string;
    title: string;
    artist: string;
    duration: string; // in seconds
    album: string;
  }
  
  // Define a Playlist interface that includes an array of Song objects
  export interface Playlist {
    id: string;
    title: string;
    songs: Song[];
    description: string;
  }

  // Example component accepting a Playlist as a prop
  export interface PlaylistProps {
    playlist: Playlist;
  }