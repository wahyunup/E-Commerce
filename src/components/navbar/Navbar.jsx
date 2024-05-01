function Navbar () {
    return(
        <div>
<header class="bg-white sticky w-full bg-white z-100 border-b border-slate-100">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
    <div class="flex h-16 items-center justify-between">
      <div class="md:flex md:items-center md:gap-12">
        <a href="#">
          <span class="text-pink-500 font-medium">Shopingin</span>
        </a>
      </div>

      <div class="hidden md:block">
        <nav aria-label="Global">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Assecoris </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Dress </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Pants </a>
            </li>

          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">

          <div class="hidden sm:flex ">
            <a
              class="  text-sm font-medium text-gray-500 py-2 px-3 bg-slate-50 rounded-3xl"
              href="#"
            >
             <i class="fa-solid fa-bag-shopping"></i>
            </a>
          </div>
        </div>

        <div class="block md:hidden">
          <button class="rounded p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

        </div>
    )
}

export default Navbar;