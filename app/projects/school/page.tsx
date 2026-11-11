import Link from 'next/link';
import { Suspense } from 'react';
import SchoolProjectList from '@/components/SchoolProjectList';
import ProjectListSkeleton from '@/components/ProjectListSkeleton';

export default function SchoolProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <Link href="/projects" className="text-sky-400 underline">← All projects</Link>
      <h1 className="text-3xl font-bold my-4">School Projects</h1>
      <Suspense fallback={<ProjectListSkeleton count={2} />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}