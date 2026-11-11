export default function ProjectListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <ul className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className="border border-gray-700 rounded p-4 animate-pulse">
          <div className="h-6 w-1/2 bg-gray-700 rounded mb-3" />
          <div className="h-4 w-3/4 bg-gray-700 rounded mb-2" />
          <div className="h-3 w-1/3 bg-gray-800 rounded" />
        </li>
      ))}
    </ul>
  );
}
