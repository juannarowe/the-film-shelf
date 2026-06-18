import { Link } from "react-router";

export default function() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center">
            <h1 className="text-7xl font-bold text-white">404</h1>
            <p className="text-gray-400 text-xl">Page Not Found</p>
            <Link to="/" className="mt-4 text-white hover:underline">Home</Link>
        </div>
    )
}