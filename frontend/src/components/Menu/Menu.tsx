const Menu = function () {
    return (
        <header>
            <nav className="flex items-center justify-between p-4 bg-white shadow-md">
              {/* Logo */}
              <a className="text-xl font-bold" href="#">Logo</a>

              {/* Navigation Links */}
              <section className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-black">Posts</a>
                <a href="#" className="text-gray-700 hover:text-black">Chat</a>
              </section>

              {/* Login Button */}
              <button className="px-4 py-2 bg-stone-500 text-white rounded-lg hover:bg-stone-600">
                Login
              </button>
            </nav>
        </header>
    )
}

export default Menu;
