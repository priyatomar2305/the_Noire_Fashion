import { FiArrowLeft } from "react-icons/fi";
import Button from "../components/Button";
export default function NotFound() {
  return (
    <main className="container-page flex min-h-[70vh] items-center justify-center py-20 text-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.25em] text-neutral-400">
          404
        </p>
        <h1 className="mt-3 text-6xl font-semibold tracking-tight">
          Lost in style.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-neutral-500">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Button to="/" className="mt-8">
          <FiArrowLeft />
          Back home
        </Button>
      </div>
    </main>
  );
}
