import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <p className="text-lg text-slate-300">
        I'm a web development student working toward expanding my skills in building interactive and functional web applications. I enjoy creating projects that make everyday tasks easier for users, such as a local event discovery application and an online library management system. Through these projects, I've gained experience developing search and filtering features, user accounts, and database-driven applications. My goal is to continue improving my programming skills and become a well-rounded web developer.
      </p>

      <h3 className="p-4 text-2xl font-bold mb-4 text-center">Skills</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <SkillCard skill="HTML & CSS" level="Intermediate" description="Building responsive, accessible page layouts." />
        <SkillCard skill="JavaScript" level="Intermediate" description="Adding interactivity and working with APIs." />
        <SkillCard skill="React" level="Learning" description="Building reusable UI components." />
        <SkillCard skill="Next.js" level="Learning" description="Routing, layouts and server components." />
      </div>
    </main>
  );
}