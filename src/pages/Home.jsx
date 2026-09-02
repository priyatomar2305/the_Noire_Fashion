import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/slices/productSlice";
import { categories } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import CategoryCard from "../components/CategoryCard";
import Button from "../components/Button";
import Toast from "../components/Toast";
export default function Home() {
  const products = useSelector(selectProducts);
  const [toast, setToast] = useState("");
  const show = (m) => {
    setToast(m);
    setTimeout(() => setToast(""), 1800);
  };
  return (
    <>
      <main>
        <section className="hero-grid bg-neutral-900 text-white">
          <div className="container-page grid min-h-[650px] items-center gap-10 py-20 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[.28em] text-neutral-400">
                Autumn / Winter 2026
              </p>
              <h1 className="max-w-2xl text-5xl font-semibold leading-[.95] tracking-[-.04em] sm:text-7xl">
                Style that
                <br />
                <span className="text-neutral-500">speaks softly.</span>
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-neutral-400">
                Curated essentials and elevated silhouettes designed for modern
                everyday life.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button to="/shop" variant="light">
                  Shop collection <FiArrowRight />
                </Button>
                <Button
                  to="/category/Women"
                  variant="outline"
                  className="border-neutral-600 text-white hover:border-white"
                >
                  Explore women
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap gap-8 text-xs text-neutral-400">
                <span className="flex items-center gap-2">
                  <FiCheck />
                  Free shipping over $100
                </span>
                <span className="flex items-center gap-2">
                  <FiCheck />
                  30-day returns
                </span>
              </div>
            </div>
            <div className="relative hidden h-[560px] overflow-hidden rounded-[2rem] lg:block">
              <img
                src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=90"
                alt="Fashion collection"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-wider text-white/60">
                  Featured edit
                </p>
                <p className="mt-1 font-medium">The New Minimal</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container-page py-20 md:py-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-neutral-400">
                Browse by
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Shop the edit
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden items-center gap-2 text-sm font-semibold sm:flex"
            >
              View all <FiArrowRight />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {categories.map((c) => (
              <CategoryCard key={c.name} category={c} />
            ))}
          </div>
        </section>
        <section className="container-page pb-20 md:pb-28">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-neutral-400">
                Most wanted
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Trending now
              </h2>
            </div>
            <Link
              to="/shop"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              Shop all <FiArrowRight />
            </Link>
          </div>
          <ProductGrid products={products.slice(0, 4)} onToast={show} />
        </section>
        <section className="bg-neutral-100 py-20 md:py-28">
          <div className="container-page grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-neutral-400">
                New season
              </p>
              <h2 className="mt-3 max-w-lg text-4xl font-semibold tracking-tight md:text-5xl">
                Quiet luxury, everyday.
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-neutral-500">
                Discover new textures, refined tailoring and versatile layers
                made to work beyond the season.
              </p>
              <Button to="/shop" className="mt-8">
                Discover new arrivals <FiArrowRight />
              </Button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=90"
              alt="New season fashion"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </section>
        <section className="container-page py-20 md:py-28">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-neutral-400">
              Fresh in
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              New arrivals
            </h2>
          </div>
          <ProductGrid products={products.slice(4, 8)} onToast={show} />
        </section>
        <section className="container-page pb-24">
          <div className="overflow-hidden rounded-[2rem] bg-neutral-900 px-7 py-14 text-center text-white md:px-16 md:py-20">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-neutral-400">
              Private offer
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Your wardrobe, 20% better.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-neutral-400">
              Take 20% off your first order. Use code{" "}
              <strong className="text-white">NOIRE20</strong> at checkout.
            </p>
            <Button to="/shop" variant="light" className="mt-8">
              Shop the offer
            </Button>
          </div>
        </section>
      </main>
      <Toast message={toast} />
    </>
  );
}
