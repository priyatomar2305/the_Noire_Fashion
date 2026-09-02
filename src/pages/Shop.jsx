import { useMemo, useState } from "react";
import { FiSliders } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/slices/productSlice";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import Toast from "../components/Toast";
export default function Shop() {
  const products = useSelector(selectProducts);
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("featured");
  const [toast, setToast] = useState("");
  const cats = ["All", "Women", "Men", "Shoes", "Accessories"];
  const show = (m) => {
    setToast(m);
    setTimeout(() => setToast(""), 1800);
  };
  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (cat === "All" || p.category === cat) &&
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (price === "all" ||
          (price === "under50" && p.price < 50) ||
          (price === "50to100" && p.price >= 50 && p.price <= 100) ||
          (price === "over100" && p.price > 100)),
    );
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [products, search, cat, price, sort]);
  return (
    <>
      <main className="container-page py-10 md:py-16">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-neutral-400">
            The collection
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
            Shop all
          </h1>
          <p className="mt-3 max-w-xl text-neutral-500">
            A considered edit of modern essentials, statement pieces and
            everyday accessories.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <SearchBar
            value={search}
            onChange={setSearch}
            onSubmit={(e) => e.preventDefault()}
          />
          <select
            aria-label="Category"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm outline-none"
          >
            {cats.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            aria-label="Sort products"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm outline-none"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low to high</option>
            <option value="high">Price: High to low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <FiSliders size={15} className="shrink-0 text-neutral-400" />
          <span className="text-xs font-medium text-neutral-400">Price</span>
          {[
            ["all", "All"],
            ["under50", "Under $50"],
            ["50to100", "$50–$100"],
            ["over100", "Over $100"],
          ].map(([v, l]) => (
            <button
              key={v}
              onClick={() => setPrice(v)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${price === v ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 bg-white hover:border-neutral-400"}`}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="mt-10">
          <p className="mb-5 text-sm text-neutral-500">
            {filtered.length} products
          </p>
          <ProductGrid products={filtered} onToast={show} />
        </div>
      </main>
      <Toast message={toast} />
    </>
  );
}
