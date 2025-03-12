// Define a Song interface
export interface Song {
    id: string;
    title: string;
    artist: string;
    duration: number; // in seconds
  }
  
  // Define a Playlist interface that includes an array of Song objects
  export interface Playlist {
    id: string;
    name: string;
    songs: Song[];
  }

  // Example component accepting a Playlist as a prop
  export interface PlaylistProps {
    playlist: Playlist;
  }