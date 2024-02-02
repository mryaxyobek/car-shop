import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="py-10 bg-[#0A1B28] text-white">
        <div className="w-full max-w-base mx-auto px-5 flex flex-col items-start space-y-5 md:items-center lg:flex-row lg:justify-between lg:space-y-0">
          <Link className="text-[28px] font-bold leading-9" to="/">
            <h1>Mashina bozor</h1>
          </Link>

          <nav>
            <ul className="flex flex-col items-start space-y-6 text-lg font-medium leading-7 sm:flex-row sm:items-center sm:space-x-10 sm:space-y-0">
              <li>
                <NavLink to="/catalog">Katalog</NavLink>
              </li>
              <li>
                <NavLink to="/news">Yangiliklar</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Bog'lanish</NavLink>
              </li>
            </ul>
          </nav>

          <a className="inline-flex items-center" href="tel:+998881690033">
            <span className="text-[20px] font-bold leading-[30px]">
              99888 169-00-33
            </span>
          </a>
        </div>
      </div>

      <div className="py-5 bg-[#162633]">
        <div className="w-full max-w-base mx-auto px-5 flex flex-col items-start justify-between text-sm leading-5 text-[#E0E1E7] space-y-2 md:space-y-0 md:flex-row md:items-center">
          <p>© 2024. - Mashina bozor. Barcha huqular himoyalangan</p>
          <p>Maxfiylik siyosati</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
