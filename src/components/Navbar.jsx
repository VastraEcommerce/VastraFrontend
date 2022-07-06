import { MdSearch } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      {/* Drawer */}
      <div className="drawer">
        <input id="main-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content contan flex flex-col">
          {/* Navbar */}
          <div className="bg-base-100 drop-shadow-md sticky top-0">
            <div className="container navbar">
              {/* mobile menu */}
              <div className="navbar-start">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="main-drawer"
                    className="btn btn-square btn-ghost"
                  >
                    <HiMenuAlt2 className="text-2xl" />
                  </label>
                </div>

                <Logo className="flex-1 px-2 mx-2" />
              </div>

              {/* logo */}
              <div className="navbar-center">
                <div className="flex-none hidden lg:block">
                  <ul className="menu menu-horizontal bg-base-100 rounded-box p-0">
                    {/* Navbar menu content here */}

                    <li tabIndex={0}>
                      <span>
                        <Link to="/">WOMEN'S</Link>
                      </span>
                      <ul className="rounded-box bg-base-100 p-2">
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                        <li>
                          <a>Submenu 3</a>
                        </li>
                      </ul>
                    </li>

                    <li tabIndex={0}>
                      <span>
                        <Link to="/">MEN'S</Link>
                      </span>
                      <ul className="rounded-box bg-base-100 p-2">
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                        <li>
                          <a>Submenu 3</a>
                        </li>
                      </ul>
                    </li>

                    <li tabIndex={0}>
                      <span>
                        <Link to="/">KIDS</Link>
                      </span>
                      <ul className="rounded-box bg-base-100 p-2">
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                        <li>
                          <a>Submenu 3</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/">ABOUT US</Link>
                    </li>
                    <li>
                      <Link to="/">CONTACT</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                  <MdSearch className="text-2xl" />
                </button>
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <HiOutlineShoppingCart className="text-2xl" />
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                  </div>
                </label>
              </div>
            </div>
          </div>
          {props.children}
        </div>

        <div className="drawer-side">
          <label htmlFor="main-drawer" className="drawer-overlay" />

          <div className="p-4 overflow-y-auto w-44 md:w-[25%] bg-base-100">
            <ul className="menu bg-base-100 w-36 p-2 rounded-box">
              {/* Sidebar content here */}
              <li>
                <Link to="/">WOMEN'S</Link>
              </li>
              <li>
                <Link to="/">MEN'S</Link>
              </li>
              <li>
                <Link to="/">KIDS</Link>
              </li>
              <li>
                <Link to="/">ABOUT US</Link>
              </li>
              <li>
                <Link to="/">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
