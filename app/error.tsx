'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="bg-blue-50 min-h-screen flex-grow">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="flex justify-center">
            <FaExclamationTriangle className="text-8xl text-red-400" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-4 mb-2"> Oops! Something went wrong.</h1>
            <p className="text-red-800 italic text-xl mb-10">{error.message}</p>
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded transition-all duration-300 ease-in-out"
              onClick={() => reset()}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
      <div className="flex-grow" />
    </section>
  );
}
