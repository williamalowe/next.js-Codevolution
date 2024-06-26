"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h1>Error in ReviewID</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </>
  );
}
