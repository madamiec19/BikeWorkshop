export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">My App</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-gray-400">Home</a></li>
                    <li><a href="/about" className="hover:text-gray-400">About</a></li>
                    <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </nav>
            </header>
    )
}