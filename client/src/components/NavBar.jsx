import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-indigo-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-20 flex justify-between items-center py-3">
        <Link to="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 fill-red-600"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="font-bold">My Videos</div>
        </Link>
        <Link
          to="/videos/add"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
        >
          + Add Video
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
