"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <>
      <h1>Error in ReviewID</h1>
      <p>{error.message}</p>
    </>
  );
}
