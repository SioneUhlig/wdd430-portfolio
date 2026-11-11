import type { Project } from '@/lib/projects-db';

export default function ProjectItems({ projects }: { projects: Project[] }) {
  return (
    <ul className="space-y-4">
      {projects.map((p) => (
        <li key={p.id} className="border rounded p-4">
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <p>{p.description}</p>
          <p className="text-sm text-gray-500">{p.technologies?.join(', ')}</p>
          {p.link && <a href={p.link} className="text-sky-400 underline">View project</a>}
        </li>
      ))}
    </ul>
  );
}