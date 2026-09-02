import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/slices/productSlice";
import ProductGrid from "../components/ProductGrid";
import Toast from "../components/Toast";
export default function Category() {
  const { categoryName } = useParams();
  const products = useSelector(selectProducts);
  const list = products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase(),
  );
  const [toast, setToast] = useState("");
  const show = (m) => {
    setToast(m);
    setTimeout(() => setToast(""), 1800);
  };
  const title = list[0]?.category || categoryName;
  return (
    <>
      <main className="container-page py-10 md:py-16">
        <div className="flex items-end justify-between gap-5">
          <div>
            <Link
              to="/shop"
              className="text-sm text-neutral-500 hover:text-neutral-900"
            >
              ← Shop all
            </Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[.22em] text-neutral-400">
              Collection
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              {title}
            </h1>
          </div>
        </div>
        <div className="mt-12">
          <ProductGrid products={list} onToast={show} />
        </div>
      </main>
      <Toast message={toast} />
    </>
  );
}
