import Image from "next/image";
import Link from "next/link";
//import PlaylistComponent from "@/components/playlist";

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
        <div className="flex flex-col min-h-screen bg-[#1a2332]">
            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-[#0f1623]">
                <div className="text-2xl font-bold text-[#00d26a]">
                Playlist Creator
                </div>
                <nav className="space-x-4">
                <Link href="/" className="text-white hover:text-gray-300">
                    Home
                </Link>
                <Link href="/playlists" className="text-white hover:text-gray-300">
                    Playlists
                </Link>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center">
                {/*Tiles*/}
                
                <div>balls</div>
            </main>

            {/*Footer*/}            
            <footer className="p-4 bg-[#0f1623] text-center text-gray-400">Web Development at Berkeley</footer>
        </div>
    )
}