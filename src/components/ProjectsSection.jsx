import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description:
      "My personal portfolio website built with React and Tailwind CSS.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Javascript"],
    demoUrl: "https://portfolio-v2-six-wine.vercel.app/",
    githubUrl: "https://github.com/yourusername/your-project",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "E-commerce website built with Next.js, Zustand, and Tailwind CSS. This is a simple e-commerce website that allows you to browse products and add them to your cart.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://ecommerce-website-nextjs.vercel.app/",
    githubUrl: "https://github.com/yourusername/your-project",
  },
  {
    id: 1,
    title: "My Portfolio",
    description:
      "My personal portfolio website built with React and Tailwind CSS.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Javascript"],
    demoUrl: "https://portfolio-v2-six-wine.vercel.app/",
    githubUrl: "https://github.com/yourusername/your-project",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs rounded-full font-medium bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-primary transition-colors duration-300 cursor-pointer">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-1">
                  {project.description}
                </p>
                <div className="flex justify-center mt-4 ">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                      target="_blank"
                    >
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://github.com/dogleading"
            target="_blank"
            className="text-primary text-lg hover:text-primary/75 transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};
