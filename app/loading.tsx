'use client';
import ClipLoader from 'react-spinners/ClipLoader';
const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClipLoader color="#3B82F6" loading={true} size={150} aria-label="Loading Spinner" />
    </div>
  );
};

export default LoadingPage;
