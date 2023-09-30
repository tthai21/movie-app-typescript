import React, { useState } from "react";
import { RootState } from "../../../redux-toolkit/store";
import { useSelector } from "react-redux";
import PageLogo from "./PageLogo";
import UserLogo from "./UserLogo";
import { NavLink } from "react-router-dom";

const MobileMenus: React.FC = () => {
  const user: any = useSelector((state: RootState) => state.user.user);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const logOutHandler = () => {};
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <PageLogo></PageLogo>
      </div>
      <div className="flex justify-end border-b border-gray-400 mb-5 py-5 md:hidden">
        <nav>
          <section className="MOBILE-MENU flex sm:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-300"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-300"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-300"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-center min-h-[250px] text-white text-lg">
                <UserLogo></UserLogo>

                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink
                    end
                    onClick={() => setIsNavOpen(false)}
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink
                    to="/now-playing"
                    className={({ isActive }) => {
                      return isActive ? "text-primary" : "";
                    }}
                    onClick={() => setIsNavOpen(false)}
                  >
                    Now playing
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink
                    onClick={() => setIsNavOpen(false)}
                    to="/top-trending"
                    className={({ isActive }) => {
                      return isActive ? "text-primary" : "";
                    }}
                  >
                    Top Trending
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink
                    onClick={() => setIsNavOpen(false)}
                    to="/tv-episode"
                    className={({ isActive }) => {
                      return isActive ? "text-primary" : "";
                    }}
                  >
                    Tv Episodes
                  </NavLink>
                </li>
                {/* Account info */}
                {user && (
                  <>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <NavLink
                        end
                        onClick={() => setIsNavOpen(false)}
                        to="/favorite"
                        className={({ isActive }) =>
                          isActive ? "text-primary" : ""
                        }
                      >
                        Favorite Movies
                      </NavLink>
                    </li>
                  </>
                )}
                {user ? (
                  <div>
                    <button onClick={logOutHandler}>Log out</button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-white text-lg">
                    <div className="border-b border-gray-400 my-8 uppercase">
                      <NavLink
                        onClick={() => setIsNavOpen(false)}
                        to="/login"
                        className={({ isActive }) => {
                          return isActive ? "text-primary" : "";
                        }}
                      >
                        Log in
                      </NavLink>
                    </div>
                    <div className="border-b border-gray-400 my-8 uppercase">
                      <NavLink
                        onClick={() => setIsNavOpen(false)}
                        to="/signup"
                        className={({ isActive }) => {
                          return isActive ? "text-primary" : "";
                        }}
                      >
                        Sign up
                      </NavLink>
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </section>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 100vh;    
        background: rgb(15 23 42 / var(--tw-bg-opacity));
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </>
  );
};

export default MobileMenus;
