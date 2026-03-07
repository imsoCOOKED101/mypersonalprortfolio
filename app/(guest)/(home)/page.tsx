import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Facebook, Folder } from "lucide-react";

// Projects array with DIFFERENT images
const projects = [
  {
    title: "Random Joke Generator",
    description:
      "A simple Project that generates random jokes.",
    image: "/jokes.png",
    tech: ["HTML", "Css", "JavaScript"],
    url: "https://htmljsproject.vercel.app",
  },
  {
    title: "Products",
    description:
      "A simple Project and it's about Products.",
    image: "/products.png",
    tech: ["HTML", "Css", "JavaScript", "Reactjs"],
    url: "https://myproducts-nine.vercel.app/",
  },
  {
    title: "TinyBubbles",
    description:
      "A very simple project about a laundry shop website.",
    image: "/tinybubbles.png",
    tech: ["HTML", "Css", "JavaScript"],
    url: "https://tinybubbles.vercel.app/",
  },
];

export default function Homepage() {
  return (
    <div className="defaultpage p-6">

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
        
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-5">
            Hi, I&apos;m Gam
          </h1>

          <p className="max-w-xl text-gray-600 mb-6 text-justify">
            I’m a beginner Web developer who is learning how to create websites 
            and improve my skills through practice and small projects.
          </p>

          <div className="flex gap-2 mb-4 flex-wrap">
            <Link href="/projects">
              <Button className="bg-black hover:bg-gray-900 text-white px-5 flex gap-2 items-center">
                <Folder className="w-5 h-5" />
                View My Work
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" className="px-8">
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="flex gap-2 mt-2">
            <Link
              href="https://github.com/Gam10196"
              target="_blank"
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <Github size={22} />
            </Link>

            <Link
              href="https://www.facebook.com/gamaliel10196/"
              target="_blank"
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <Facebook size={22} />
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="rounded-full p-2 shadow-md w-96 h-96 relative mt-20">
          <Image
            src="/gams.jpg"
            alt="Gams"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Section Heading */}
      <div className="flex flex-col items-center w-full mb-10">
        <div className="flex justify-center rounded-lg bg-gray-200 p-2 mb-2">
          <h1 className="text-md">Recent Projects</h1>
        </div>

        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-2">
            Check out my recent work
          </h1>
          <p>
            Here are some of my recent projects where I practice, learn, and
            improve my web development skills.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mt-10 p-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-semibold text-lg">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>

    </div>
  );
}