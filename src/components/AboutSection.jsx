import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground tracking-tight">
              A <span className="text-primary">Developer</span> with a passion
              for <span className="text-primary">Code</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              I'm a full stack developer with 1 year of experience and a passion
              for building web applications that are both functional and
              aesthetically pleasing. I specialize in Next.js, React, Node.js,
              Express, and PostgreSQL.
            </p>
            <p className="text-lg text-muted-foreground">
              I believe in writing clean, efficient code and always looking for
              ways to improve my craft. Currently focused on building projects
              that challenge me and expand my skillset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="custom-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-foreground">
                    Web Development
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Creating responsive and user-friendly web applications using
                    modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-foreground">
                    Frontend Development
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Creating dynamic and interactive user interfaces with React
                    and modern JavaScript frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-foreground">
                    Professional Growth
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Continuously learning and applying new skills in real-world
                    projects and collaborative environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
