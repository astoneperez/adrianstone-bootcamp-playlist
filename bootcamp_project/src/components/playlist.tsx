import { Song,Playlist,PlaylistProps } from "@/types/interfaces";
  
  export function PlaylistComponent({ playlist }: PlaylistProps) {
    return (
      <div className="bg-[#1a2332]">
        <h2 className="text-xl font-bold">{playlist.title}</h2>
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