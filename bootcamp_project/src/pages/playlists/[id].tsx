import Link from "next/link";

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

            <div>
                balls 2
            </div>
        </div>
    )
}