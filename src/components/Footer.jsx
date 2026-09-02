import { Link } from "react-router-dom";
import {
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiArrowUpRight,
} from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="mt-24 bg-neutral-900 text-white">
      <div className="container-page py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
          <div>
            <div className="text-xl font-black tracking-[.22em]">NOIRÉ</div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-400">
              Modern essentials, considered silhouettes and timeless pieces for
              the way you live now.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                aria-label="Instagram"
                href="#"
                className="rounded-full border border-neutral-700 p-2.5 hover:bg-neutral-800"
              >
                <FiInstagram />
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="rounded-full border border-neutral-700 p-2.5 hover:bg-neutral-800"
              >
                <FiTwitter />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="rounded-full border border-neutral-700 p-2.5 hover:bg-neutral-800"
              >
                <FiFacebook />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Shop</h3>
            <div className="mt-5 space-y-3 text-sm text-neutral-400">
              <Link className="block hover:text-white" to="/shop">
                All Products
              </Link>
              <Link className="block hover:text-white" to="/category/Women">
                Women
              </Link>
              <Link className="block hover:text-white" to="/category/Men">
                Men
              </Link>
              <Link className="block hover:text-white" to="/category/Shoes">
                Shoes
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Customer Care</h3>
            <div className="mt-5 space-y-3 text-sm text-neutral-400">
              <Link className="block hover:text-white" to="/orders">
                Orders
              </Link>
              <Link className="block hover:text-white" to="/wishlist">
                Wishlist
              </Link>
              <Link className="block hover:text-white" to="/cart">
                Cart
              </Link>
              <span className="block">Shipping & Returns</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Stay in the loop</h3>
            <p className="mt-5 text-sm leading-6 text-neutral-400">
              New arrivals, private drops and styling notes. No noise.
            </p>
            <form className="mt-5 flex border-b border-neutral-600 pb-2">
              <input
                aria-label="Email address"
                placeholder="Email address"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-500"
              />
              <button aria-label="Subscribe">
                <FiArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-14 border-t border-neutral-800 pt-6 text-xs text-neutral-500">
          © 2026 NOIRÉ. Demo storefront built with React, Tailwind CSS and Redux
          Toolkit.
        </div>
      </div>
    </footer>
  );
}
