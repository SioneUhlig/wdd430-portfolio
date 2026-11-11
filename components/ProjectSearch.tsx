'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function ProjectSearch({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1'); // a new search always starts on page 1
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <div className="mb-6">
      <label htmlFor="search" className="sr-only">Search projects</label>
      <input
        id="search"
        type="search"
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded border border-gray-600 bg-transparent px-4 py-2 focus:outline-none focus:border-sky-400"
      />
    </div>
  );
}