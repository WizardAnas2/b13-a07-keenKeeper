import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <h2 className="text-9xl font-bold text-red-600 mb-4">404</h2>
      <p className="text-xl font-semibold mb-2">Friend Not Found!</p>
      <p className="text-gray-500 mb-8">Lets get you back home.</p>
      <Link href="/" className="btn btn-primary">
        Back to Dashboard
      </Link>
    </div>
  );
}