import Link from 'next/link';
import { Suspense } from 'react';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';
import ProjectItems from '@/components/ProjectItems';
import ProjectListSkeleton from '@/components/ProjectListSkeleton';
import ProjectSearch from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';

type SearchParams = Promise<{ query?: string; page?: string }>;

async function ProjectResults({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const query = params.query ?? '';
  const currentPage = Number(params.page) || 1;

  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectsPages(query),
  ]);

  if (projects.length === 0) {
    return <p className="text-gray-400">No projects match &quot;{query}&quot;.</p>;
  }

  return (
    <>
      <ProjectItems projects={projects} />
      <Pagination totalPages={totalPages} />
    </>
  );
}

export default function ProjectsPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">All Projects</h1>
      <nav className="flex gap-4 mb-6">
        <Link href="/projects/school" className="text-sky-400 underline">School</Link>
        <Link href="/projects/opensource" className="text-sky-400 underline">Open Source</Link>
      </nav>

      <Suspense fallback={<div className="h-10 mb-6 rounded bg-gray-800 animate-pulse" />}>
        <ProjectSearch placeholder="Search by title, description, or technology..." />
      </Suspense>

      <Suspense fallback={<ProjectListSkeleton count={2} />}>
        <ProjectResults searchParams={searchParams} />
      </Suspense>
    </main>
  );
}