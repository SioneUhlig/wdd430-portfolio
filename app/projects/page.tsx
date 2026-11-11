import Link from 'next/link';
import { Suspense } from 'react';
import { connection } from 'next/server';
import { getProjects } from '@/lib/projects-db';
import ProjectItems from '@/components/ProjectItems';
import ProjectListSkeleton from '@/components/ProjectListSkeleton';

async function AllProjectList() {
  await connection();
  const projects = await getProjects();
  return <ProjectItems projects={projects} />;
}

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">All Projects</h1>
      <nav className="flex gap-4 mb-6">
        <Link href="/projects/school" className="text-sky-400 underline">School</Link>
        <Link href="/projects/opensource" className="text-sky-400 underline">Open Source</Link>
      </nav>
      <Suspense fallback={<ProjectListSkeleton />}>
        <AllProjectList />
      </Suspense>
    </main>
  );
}