import { useState } from "react";

function Navbar () {
  const [toogleNavbar, setToogleNavbar] = useState(false);
    return(

        <div>
<header className="bg-white w-full bg-white border-b border-slate-100">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a href="#">
          <span className="text-pink-500 font-medium">Shopingin</span>
        </a>
      </div>


      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">

          <div>
            <a
              className="  text-sm font-medium text-gray-500 py-2 px-3 bg-slate-50 rounded-3xl"
              href="#"
            >
             <i className="fa-solid fa-bag-shopping"></i>
            </a>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</header>

        </div>
    )
}

export default Navbar;