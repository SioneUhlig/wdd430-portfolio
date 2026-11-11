import ProjectListSkeleton from '@/components/ProjectListSkeleton';

export default function Loading() {
  return (
    <main className="max-w-4xl mx-auto p-8 animate-pulse">
      <div className="h-4 w-24 bg-gray-700 rounded mb-6" />
      <div className="h-9 w-72 bg-gray-700 rounded mb-6" />
      <ProjectListSkeleton count={2} />
    </main>
  );
}