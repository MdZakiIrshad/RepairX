
function Header()
{

    return(
        <nav class="bg-gray-800 p-4">
            <div class="container mx-auto flex justify-between items-center">
            <div class="text-white text-xl font-bold">
                <a href="/" class="hover:text-gray-400">RepairX</a>
            </div>
            <div class="hidden md:flex space-x-4 items-center">
                <a href="/" class="text-gray-300 hover:text-white">Home</a>
                <a href="#" class="text-gray-300 hover:text-white">About</a>
                <a href="/features" class="text-gray-300 hover:text-white">Features</a>
                <a href="/login" class="text-gray-300 hover:text-white">Login</a>
                <a href="/signup" class="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-700">Sign Up</a>
            </div>
            <div class="md:hidden">
                <button class="text-gray-300 focus:outline-none focus:text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                </button>
            </div>
            </div>
        </nav>
    )
}
export default Header