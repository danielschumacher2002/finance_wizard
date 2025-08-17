import PageLayout from "../Layout/PageLayout";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <PageLayout>
      <div className="m-auto flex items-center justify-center px-6">
        <div className="text-center text-white space-y-3 md:space-y-10">
          <h1 className="text-6xl font-bold md:text-9xl">404</h1>
          <p className="text-gray-400 md:text-4xl">Page not found</p>

          <Link
            to="/"
            className="inline-block mt-2 px-5 py-2.5 rounded-lg bg-special font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/20 md:w-sm md:h-30 md:items-center md:flex md:justify-center md:text-4xl"
          >
            Go Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
