import { useState } from "react";
import { useSelector } from "react-redux";
import { FiHeart } from "react-icons/fi";
import ProductGrid from "../components/ProductGrid";
import Button from "../components/Button";
import Toast from "../components/Toast";
export default function Wishlist() {
  const items = useSelector((s) => s.wishlist.items);
  const [toast, setToast] = useState("");
  const show = (m) => {
    setToast(m);
    setTimeout(() => setToast(""), 1800);
  };
  return (
    <>
      <main className="container-page py-10 md:py-16">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-neutral-400">
          Saved pieces
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Wishlist</h1>
        {!items.length ? (
          <div className="mt-12 rounded-[2rem] border border-dashed border-neutral-300 bg-white px-6 py-20 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-neutral-100">
              <FiHeart size={25} />
            </div>
            <h2 className="mt-5 text-xl font-semibold">Nothing saved yet</h2>
            <p className="mt-2 text-sm text-neutral-500">
              Save pieces you love and come back to them later.
            </p>
            <Button to="/shop" className="mt-7">
              Explore the collection
            </Button>
          </div>
        ) : (
          <div className="mt-10">
            <ProductGrid products={items} onToast={show} />
          </div>
        )}
      </main>
      <Toast message={toast} />
    </>
  );
}
