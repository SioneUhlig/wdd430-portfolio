import Link from 'next/link';
import { connection } from 'next/server';
import { getProjects } from '@/lib/projects-db';

export default async function ProjectsPage() {
  await connection();
  const projects = await getProjects();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">All Projects</h1>
      <nav className="flex gap-4 mb-6">
        <Link href="/projects/school" className="text-blue-600 underline">School</Link>
        <Link href="/projects/opensource" className="text-blue-600 underline">Open Source</Link>
      </nav>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.id} className="border rounded p-4">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p>{p.description}</p>
            <p className="text-sm text-gray-500">{p.technologies?.join(', ')}</p>
            {p.link && <a href={p.link} className="text-blue-600 underline">View project</a>}
          </li>
        ))}
      </ul>
    </main>
  );
}