import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a2030]">
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-[#00d26a] text-xl font-bold">Bootcamp Playlist</div>
          <nav className="space-x-4">
            <div className="text-white hover:text-gray-300 inline-block cursor-pointer">Home</div>
            <div className="text-white hover:text-gray-300 inline-block cursor-pointer">Playlists</div>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="bg-[#00d26a] hover:bg-[#00b85e] text-white font-medium py-2 px-6 rounded transition-colors cursor-pointer">
          Go to playlists
        </div>
      </main>

      <footer className="border-t border-gray-800 p-4 text-center text-gray-400 text-sm">
        Web Development at Berkeley
      </footer>
    </div>
  )
}

