import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl ">
        <div>
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
          </h2>
        </div>

        <div className="items-center text-">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Just A Newbie With A Passion For Web Development
            </h3>

            <p className="text-muted-foreground">
              Interested in hackathons and events related to Web2 and Web3. I
              have over 0.5 years of experience in web development.
            </p>

            <p className="text-muted-foreground">
              Passionate about creating solutions to complex problems, and I’m
              constantly learning new technologies and techniques to stay up to
              date with the ever-evolving landscape of Web2 and Web3.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/C-V.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Check Out My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
