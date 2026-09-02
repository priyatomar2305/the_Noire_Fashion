import { Link } from "react-router-dom";
import { FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { toggleWishlist } from "../redux/slices/wishlistSlice";
export default function ProductCard({ product, onToast }) {
  const dispatch = useDispatch();
  const liked = useSelector((s) =>
    s.wishlist.items.some((i) => i.id === product.id),
  );
  const add = () => {
    dispatch(
      addToCart({
        ...product,
        cartId: `${product.id}-${product.sizes[0]}-${product.colors[0]}`,
        size: product.sizes[0],
        color: product.colors[0],
        quantity: 1,
      }),
    );
    onToast?.("Added to cart");
  };
  const wish = () => {
    dispatch(toggleWishlist(product));
    onToast?.(liked ? "Removed from wishlist" : "Added to wishlist");
  };
  return (
    <article className="group">
      <div className="relative overflow-hidden bg-neutral-100">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
            {product.badge}
          </span>
        )}
        <button
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          onClick={wish}
          className={`absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/95 transition hover:scale-105 ${liked ? "text-red-500" : ""}`}
        >
          <FiHeart fill={liked ? "currentColor" : "none"} />
        </button>
        <button
          onClick={add}
          className="absolute inset-x-3 bottom-3 flex translate-y-14 items-center justify-center gap-2 rounded-full bg-neutral-900 py-3 text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <FiShoppingBag />
          Add to Cart
        </button>
      </div>
      <div className="pt-4">
        <Link
          to={`/product/${product.id}`}
          className="font-medium hover:underline"
        >
          {product.name}
        </Link>
        <div className="mt-1 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold">${product.price}</span>
            <span className="text-sm text-neutral-400 line-through">
              ${product.oldPrice}
            </span>
          </div>
          <span className="flex items-center gap-1 text-xs text-neutral-500">
            <FiStar className="fill-yellow-500 text-yellow-500" size={13} />
            {product.rating}
          </span>
        </div>
        <p className="mt-1 text-xs text-neutral-400">{product.category}</p>
      </div>
    </article>
  );
}
