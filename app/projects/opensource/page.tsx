import Link from 'next/link';
import { connection } from 'next/server';
import { getProjects } from '@/lib/projects-db';
import ProjectItems from '@/components/ProjectItems';

export default async function OpenSourceProjectsPage() {
  await connection();

  // Temporary delay to see the skeleton. Remove after testing.
  await new Promise((res) => setTimeout(res, 2000));

  const projects = await getProjects('opensource');

  return (
    <main className="max-w-4xl mx-auto p-8">
      <Link href="/projects" className="text-sky-400 underline">← All projects</Link>
      <h1 className="text-3xl font-bold my-4">Open Source Projects</h1>
      <ProjectItems projects={projects} />
    </main>
  );
}