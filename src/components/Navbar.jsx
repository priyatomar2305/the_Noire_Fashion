import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiX,
  FiClock,
} from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/slices/cartSlice";
import { selectWishlistCount } from "../redux/slices/wishlistSlice";
const links = [
  ["Home", "/"],
  ["Shop", "/shop"],
  ["Categories", "/category/Women"],
  ["Orders", "/orders"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const cartCount = useSelector(selectCartCount),
    wishCount = useSelector(selectWishlistCount);
  const submit = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#faf9f7]/95 backdrop-blur-xl">
      <div className="container-page flex h-18 items-center justify-between gap-5">
        <Link to="/" className="shrink-0 text-xl font-black tracking-[.22em]">
          NOIRÉ
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <form
            onSubmit={submit}
            className="hidden items-center rounded-full border border-neutral-200 bg-white px-3 py-2 xl:flex"
          >
            <FiSearch size={17} />
            <input
              aria-label="Search products"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-32 bg-transparent px-2 text-sm outline-none"
            />
          </form>
          <button
            aria-label="Search"
            onClick={() => navigate("/search")}
            className="rounded-full p-2.5 hover:bg-neutral-100 xl:hidden"
          >
            <FiSearch size={19} />
          </button>
          <Link
            aria-label="Orders"
            to="/orders"
            className="hidden rounded-full p-2.5 hover:bg-neutral-100 sm:block"
          >
            <FiClock size={19} />
          </Link>
          <Link
            aria-label="Wishlist"
            to="/wishlist"
            className="relative rounded-full p-2.5 hover:bg-neutral-100"
          >
            <FiHeart size={19} />
            {wishCount > 0 && (
              <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-neutral-900 px-1 text-[9px] text-white">
                {wishCount}
              </span>
            )}
          </Link>
          <Link
            aria-label="Cart"
            to="/cart"
            className="relative rounded-full p-2.5 hover:bg-neutral-100"
          >
            <FiShoppingBag size={19} />
            {cartCount > 0 && (
              <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-neutral-900 px-1 text-[9px] text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            aria-label="Profile"
            className="hidden rounded-full p-2.5 hover:bg-neutral-100 sm:block"
          >
            <FiUser size={19} />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="rounded-full p-2.5 hover:bg-neutral-100 lg:hidden"
          >
            {open ? <FiX size={21} /> : <FiMenu size={21} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-neutral-200 bg-[#faf9f7] lg:hidden">
          <nav className="container-page flex flex-col py-4">
            {links.map(([label, to]) => (
              <NavLink
                onClick={() => setOpen(false)}
                key={to}
                to={to}
                className="border-b border-neutral-200 py-4 text-base font-medium"
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              onClick={() => setOpen(false)}
              to="/wishlist"
              className="py-4 text-base font-medium"
            >
              Wishlist
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
