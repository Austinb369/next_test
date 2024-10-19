import Link from "next/link";

export default function NavBar () {
    return (
            <nav className="flex justify-between items-center p-4 bg-slate-200 text-black bg-opacity-75 
            fixed w-5/6 backdrop-blur-md top-0 left-0 right-0 z-10 rounded-lg shadow-lg mx-auto mt-2">
                <div>
                    <h1 className="text-2xl font-bold">Showcase de APIS trágicas</h1>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="font-bold">Home</Link>
                        </li>
                        <li>
                            <Link href='/users' className="font-bold">Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}