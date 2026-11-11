import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';
import { getProjects } from '@/lib/projects-db';

export default async function ProjectsByTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  await connection();
  const { type } = await params;

  if (type !== 'school' && type !== 'opensource') {
    notFound();
  }

  const projects = await getProjects(type);
  const heading = type === 'school' ? 'School Projects' : 'Open Source Projects';

  return (
    <main className="max-w-4xl mx-auto p-8">
      <Link href="/projects" className="text-blue-600 underline">← All projects</Link>
      <h1 className="text-3xl font-bold my-4">{heading}</h1>
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