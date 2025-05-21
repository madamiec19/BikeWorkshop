export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2023 My App. All rights reserved.</p>
                <div className="mt-2">
                    <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
                    <span className="mx-2">|</span>
                    <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}