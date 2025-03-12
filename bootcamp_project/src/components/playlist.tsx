import { Song,Playlist,PlaylistProps } from "@/types/interfaces";
  
  export function PlaylistComponent({ playlist }: PlaylistProps) {
    return (
      <div>
        <h2 className="text-xl font-bold">{playlist.name}</h2>
        <ul>
          {playlist.songs.map((song) => (
            <li key={song.id}>
              {song.title} by {song.artist} – {song.duration} seconds
            </li>
          ))}
        </ul>
      </div>
    );
  }