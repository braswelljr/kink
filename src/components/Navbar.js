import React, { useState, useRef, useEffect } from "react";
import cities from "countries-states-cities";

const Navbar = () => {
  const searchRef = useRef();
  const navbar = useRef();
  const [search, setSearch] = useState("");

  useEffect(() => {
    function onKeyDown(e) {
      if (
        e.key !== "/" ||
        e.target.tagName === "INPUT" ||
        e.target.tagName === "SELECT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      ) {
        return;
      }
      e.preventDefault();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", key => {
      if (key.key === "/") {
        searchRef.current.focus();
      }
    });
  }, []);

  const handleSearch = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <nav
      ref={navbar}
      className="fixed w-full px-4 space-y-2 bg-transparent sm:px-12 md:px-20 lg:px-32 top-3"
    >
      <div className="flex items-center justify-between px-4 py-2 space-x-4 bg-white rounded-lg shadow-lg">
        {/* <span className="w-auto h-auto transition-all transform cursor-pointer hover:translate-x-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-8 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span> */}
        <div className="">
          <span className="block w-8 h-8 bg-gray-800 rounded-full cursor-pointer animate-pulse"></span>
        </div>
        <form
          action="#"
          onSubmit={event => event.preventDefault()}
          method="post"
          className="w-full h-full"
        >
          <input
            type="text"
            name="search-input"
            id="search-input"
            ref={searchRef}
            value={search}
            onChange={handleSearch}
            autoComplete="off"
            className={`w-full h-10 px-2 py-1 rounded-md focus:outline-none`}
            placeholder={`Search Weather (Press "/" to focus)`}
          />
        </form>
      </div>
      {search.length > 0 ? (
        <div className="px-4 py-1 space-y-1 bg-white rounded-lg shadow-lg">
          {search}
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
