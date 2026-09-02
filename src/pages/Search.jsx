import { useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/slices/productSlice";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import Toast from "../components/Toast";
export default function Search() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("q") || "";
  const [query, setQuery] = useState(initial);
  const [toast, setToast] = useState("");
  const products = useSelector(selectProducts);
  const results = useMemo(
    () =>
      products.filter((p) =>
        `${p.name} ${p.category}`
          .toLowerCase()
          .includes(query.toLowerCase().trim()),
      ),
    [products, query],
  );
  const show = (m) => {
    setToast(m);
    setTimeout(() => setToast(""), 1800);
  };
  const submit = (e) => {
    e.preventDefault();
    setParams(query ? { q: query } : {});
  };
  return (
    <>
      <main className="container-page py-10 md:py-16">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-neutral-400">
          Find your next piece
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Search</h1>
        <div className="mt-8 max-w-2xl">
          <SearchBar value={query} onChange={setQuery} onSubmit={submit} />
        </div>
        <div className="mt-12">
          <p className="mb-6 text-sm text-neutral-500">
            {query
              ? `${results.length} result${results.length !== 1 ? "s" : ""} for “${query}”`
              : "All products"}
          </p>
          <ProductGrid products={results} onToast={show} />
        </div>
      </main>
      <Toast message={toast} />
    </>
  );
}
