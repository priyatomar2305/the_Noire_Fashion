import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiMinus,
  FiPlus,
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiChevronRight,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { toggleWishlist } from "../redux/slices/wishlistSlice";
import ProductGrid from "../components/ProductGrid";
import Button from "../components/Button";
import Toast from "../components/Toast";
export default function ProductDetails() {
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const product = products.find((p) => p.id === Number(id));
  const dispatch = useDispatch();
  const [size, setSize] = useState(product?.sizes[0]);
  const [color, setColor] = useState(product?.colors[0]);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState("");
  if (!product)
    return (
      <main className="container-page py-24 text-center">
        <h1 className="text-3xl font-semibold">Product not found</h1>
        <Button to="/shop" className="mt-6">
          Back to shop
        </Button>
      </main>
    );
  const show = (m) => {
    setToast(m);
    setTimeout(() => setToast(""), 1800);
  };
  const add = () => {
    dispatch(
      addToCart({
        ...product,
        cartId: `${product.id}-${size}-${color}`,
        size,
        color,
        quantity: qty,
      }),
    );
    show("Added to cart");
  };
  const wish = () => {
    dispatch(toggleWishlist(product));
    show("Wishlist updated");
  };
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  return (
    <>
      <main className="container-page py-8 md:py-14">
        <div className="mb-8 flex items-center gap-2 text-xs text-neutral-400">
          <Link to="/shop" className="hover:text-neutral-900">
            Shop
          </Link>
          <FiChevronRight />
          <span>{product.category}</span>
          <FiChevronRight />
          <span className="text-neutral-700">{product.name}</span>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden bg-neutral-100">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="self-center py-4">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-neutral-400">
              {product.category}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-2xl font-semibold">${product.price}</span>
              <span className="text-neutral-400 line-through">
                ${product.oldPrice}
              </span>
              <span className="flex items-center gap-1 text-sm">
                <FiStar className="fill-yellow-500 text-yellow-500" />
                {product.rating}{" "}
                <span className="text-neutral-400">({product.reviews})</span>
              </span>
            </div>
            <p className="mt-6 leading-7 text-neutral-500">
              {product.description}
            </p>
            <div className="mt-8">
              <div className="flex justify-between text-sm font-semibold">
                <span>Size</span>
                <span className="text-xs font-normal text-neutral-400">
                  Size guide
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`min-w-12 rounded-full border px-4 py-2.5 text-sm ${size === s ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:border-neutral-900"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-7">
              <span className="text-sm font-semibold">Color</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`rounded-full border px-4 py-2.5 text-sm ${color === c ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:border-neutral-900"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <div className="flex items-center rounded-full border border-neutral-200">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="p-3"
                >
                  <FiMinus />
                </button>
                <span className="w-9 text-center text-sm">{qty}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty(qty + 1)}
                  className="p-3"
                >
                  <FiPlus />
                </button>
              </div>
              <button
                onClick={add}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-3 font-semibold text-white hover:bg-neutral-700"
              >
                <FiShoppingBag />
                Add to Cart
              </button>
              <button
                aria-label="Add to wishlist"
                onClick={wish}
                className="grid h-12 w-12 place-items-center rounded-full border border-neutral-200 hover:border-neutral-900"
              >
                <FiHeart />
              </button>
            </div>
            <div className="mt-7 grid grid-cols-3 border-y border-neutral-200 py-5 text-center text-xs text-neutral-500">
              <span>
                Free shipping
                <br />
                <b className="text-neutral-900">Over $100</b>
              </span>
              <span>
                Returns
                <br />
                <b className="text-neutral-900">30 days</b>
              </span>
              <span>
                Quality
                <br />
                <b className="text-neutral-900">Guaranteed</b>
              </span>
            </div>
          </div>
        </div>
        <section className="mt-24">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-neutral-400">
                You may also like
              </p>
              <h2 className="mt-2 text-3xl font-semibold">Related products</h2>
            </div>
          </div>
          <ProductGrid products={related} onToast={show} />
        </section>
      </main>
      <Toast message={toast} />
    </>
  );
}
