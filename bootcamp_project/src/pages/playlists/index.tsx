import { PlaylistCard } from "@/components/playlist-card"
import type { Playlist } from "@/types/interfaces"
import { playlists } from "@/example_data"


export default function PlaylistsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a2332]">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-[#0f1623]">
        <a href="/" className="text-2xl font-bold text-[#00d26a]">
          Playlist Creator
        </a>
        <nav className="space-x-4">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/playlists" className="text-white hover:text-gray-300">
            Playlists
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <h1 className="text-[#00d26a] text-3xl font-bold mb-8">Playlists</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
          <PlaylistCard isAddNew />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-[#0f1623] text-center text-gray-400">Web Development at Berkeley</footer>
    </div>
  )
}

