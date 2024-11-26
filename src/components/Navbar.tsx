import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-auto w-[700px] bg-slate-100 rounded-sm mt-1 mb-8 ">
      <nav className="flex justify-between items-center py-4 px-6">
        <div>
          <Link to="/" className="font-bold text-xl">
            خانه
          </Link>
        </div>
        <div className="">
          <Link
            to="/create"
            className="hover:bg-green-300 py-2 px-3 rounded-lg font-bold"
          >
            جدید
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
