import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Your Project One",
    description: "One or two accurate sentences about what it does.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/SioneUhlig/your-repo-name",
  },
  {
    title: "Your Project Two",
    description: "One or two accurate sentences about what it does.",
    technologies: ["React", "JavaScript"],
    link: "https://github.com/SioneUhlig/another-repo",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a web developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}