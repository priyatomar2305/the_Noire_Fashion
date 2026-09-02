import { Link } from "react-router-dom";
import { FiChevronRight, FiPackage } from "react-icons/fi";
const orders = [
  {
    id: "NR-20481",
    date: "Aug 28, 2026",
    status: "Delivered",
    total: 238,
    products: ["Oversized Wool Blazer", "Essential Cotton Tee"],
  },
  {
    id: "NR-20397",
    date: "Aug 14, 2026",
    status: "Delivered",
    total: 129,
    products: ["Studio Runner Sneakers"],
  },
  {
    id: "NR-20264",
    date: "Jul 29, 2026",
    status: "Shipped",
    total: 154,
    products: ["Leather Mini Shoulder Bag", "Sculpted Hoop Earrings"],
  },
];
export default function Orders() {
  return (
    <main className="container-page py-10 md:py-16">
      <p className="text-xs font-bold uppercase tracking-[.22em] text-neutral-400">
        Account
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Order history
      </h1>
      <div className="mt-10 space-y-4">
        {orders.map((o) => (
          <div
            key={o.id}
            className="rounded-2xl border border-neutral-200 bg-white p-5 md:p-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-neutral-400">Order {o.id}</p>
                <p className="mt-1 text-sm font-medium">{o.date}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${o.status === "Delivered" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}
              >
                {o.status}
              </span>
            </div>
            <div className="mt-6 flex items-center gap-4 border-t border-neutral-100 pt-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-neutral-100">
                <FiPackage />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {o.products.join(" · ")}
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  {o.products.length} item{o.products.length > 1 ? "s" : ""}
                </p>
              </div>
              <p className="font-semibold">${o.total.toFixed(2)}</p>
              <Link
                aria-label="View order"
                to="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-neutral-200 hover:border-neutral-900"
              >
                <FiChevronRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
