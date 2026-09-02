import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiArrowRight, FiShoppingBag, FiShield } from "react-icons/fi";
import { selectCartTotal } from "../redux/slices/cartSlice";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
export default function Cart() {
  const items = useSelector((s) => s.cart.items);
  const total = useSelector(selectCartTotal);
  const shipping = total >= 100 || total === 0 ? 0 : 9;
  return (
    <main className="container-page py-10 md:py-16">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-neutral-400">
          Your selection
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Shopping bag
        </h1>
      </div>
      {!items.length ? (
        <div className="rounded-[2rem] border border-dashed border-neutral-300 bg-white px-6 py-20 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-neutral-100">
            <FiShoppingBag size={25} />
          </div>
          <h2 className="mt-5 text-xl font-semibold">Your bag is empty</h2>
          <p className="mt-2 text-sm text-neutral-500">
            Looks like you haven't added anything yet.
          </p>
          <Button to="/shop" className="mt-7">
            Continue shopping <FiArrowRight />
          </Button>
        </div>
      ) : (
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.7fr]">
          <div>
            {items.map((i) => (
              <CartItem key={i.cartId} item={i} />
            ))}
          </div>
          <aside className="h-fit rounded-2xl bg-neutral-100 p-6 md:p-7">
            <h2 className="text-lg font-semibold">Order summary</h2>
            <div className="mt-7 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Shipping</span>
                <span>{shipping ? "$9.00" : "Free"}</span>
              </div>
            </div>
            <div className="my-6 border-t border-neutral-200" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${(total + shipping).toFixed(2)}</span>
            </div>
            <Button className="mt-7 w-full">
              Checkout <FiArrowRight />
            </Button>
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-neutral-500">
              <FiShield /> Secure checkout · Demo only
            </p>
          </aside>
        </div>
      )}
    </main>
  );
}
