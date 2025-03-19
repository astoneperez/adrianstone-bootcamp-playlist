/*import { Song,Playlist,PlaylistProps } from "@/types/interfaces";
  
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
  }*/

import type { Playlist } from "@/types/interfaces"

interface PlaylistCardProps {
  playlist?: Playlist
  isAddNew?: boolean
}

export function PlaylistCard({ playlist, isAddNew = false }: PlaylistCardProps) {
  if (isAddNew) {
    return (
      <div className="bg-[#1f2937] border border-gray-700 hover:border-[#00d26a] rounded-md cursor-pointer transition-colors h-[200px] flex items-center justify-center">
        <div className="text-[#00d26a] text-5xl">+</div>
      </div>
    )
  }

  return (
    <div className="bg-[#1f2937] border border-gray-700 hover:border-[#00d26a] rounded-md cursor-pointer transition-colors p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{playlist?.title}</h3>
      <p className="text-gray-400 mb-4">{playlist?.description}</p>
    </div>
  )
}

