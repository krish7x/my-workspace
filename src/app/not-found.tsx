import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-slate-900">404</h1>
      <p className="mt-4 text-slate-600">This page could not be found.</p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
