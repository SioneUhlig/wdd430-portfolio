'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-between mt-6" aria-label="Pagination">
      {currentPage > 1 ? (
        <Link href={createPageURL(currentPage - 1)} className="text-sky-400 underline">← Previous</Link>
      ) : (
        <span className="text-gray-600">← Previous</span>
      )}

      <span className="text-sm text-gray-400">Page {currentPage} of {totalPages}</span>

      {currentPage < totalPages ? (
        <Link href={createPageURL(currentPage + 1)} className="text-sky-400 underline">Next →</Link>
      ) : (
        <span className="text-gray-600">Next →</span>
      )}
    </nav>
  );
}