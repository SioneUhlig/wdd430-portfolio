interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="p-4 border-l-4 border-sky-400 bg-slate-900 rounded">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-300 mb-3">{description}</p>
      <p className="text-sm text-slate-400">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>
      {link && (
        <p className="mt-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 hover:underline">View Project</a>
        </p>
      )}
    </article>
  );
}