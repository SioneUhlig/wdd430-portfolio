
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Event Planner",
    description:
      "This web application allows users to discover local events within a customizable radius of up to 50 miles. Users can filter events by category, such as food, music, movies, and more, making it easy to find events that match their interests.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Netlify",
      "Map API",
      "Location API",
    ],
    link: "https://sioneuhlig.github.io/wdd330-final/index.html",
  },
  {
    title: "Library App",
    description:
      "This web application functions as an online library database. Users can search for books by title, author, or category, such as fiction and nonfiction. They can also sign in to view the books they currently have checked out. Additionally, the application includes management features that allow library staff to track borrowed books and see which users have checked them out.",
    technologies: ["React", "JavaScript", "CSS", "MySQL"],
    link: "https://github.com/SioneUhlig/LibraryApp.git",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-7 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          My Portfolio
        </h1>

        <p className="text-lg text-slate-300">
          I&apos;m an aspiring web developer with an interest in
          building practical and user-friendly web applications.
          Below are some of my recent projects, showcasing my
          experience creating applications that solve real-world
          problems.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}
