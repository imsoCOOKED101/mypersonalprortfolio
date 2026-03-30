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
    title: "MiniEcoMarket",
    description:
      "A very simple project where a Farmer can add products like Vegetables, Fruits, Meat and etc. also There's a Costumer section also where in He/She can buy the products of the Farmer.",
    image: "/minieco.png",
    tech: ["HTML", "Css", "JavaScript"],
    url: "https://ecomarket-kappa.vercel.app/",
  },
];

export default function Homepage() {
  return (
    <div className="defaultpage px-4 md:px-8 lg:px-16 py-6">

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-16 md:mb-24">

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5">
            Hi, I&apos;m Gam
          </h1>

          <p className="text-gray-600 mb-6 text-justify text-sm md:text-base max-w-xl mx-auto md:mx-0 dark:text-white">
            I&apos;m a beginner Aspiring Web developer who is learning how to create websites
            and improve my skills through practice and small projects.
          </p>

          <div className="flex gap-2 mb-4 flex-wrap justify-center md:justify-start">
            <Link href="/projects">
              <Button className="bg-black hover:bg-gray-900 text-white px-5 flex gap-2 items-center">
                <Folder className="w-5 h-5" />
                View My Work
              </Button>
            </Link>

            <Link href="/contacts">
              <Button variant="outline" className="px-8">
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="flex gap-2 mt-2 justify-center md:justify-start">
            <Link
              href="https://github.com/imsoCOOKED101"
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
        <div className="
          rounded-full p-2 shadow-md relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 mt-0 md:mt-10 lg:mt-20
">
          <Image
            src="/gams.jpg"
            alt="Gams"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Section Heading */}
      <div className="flex flex-col items-center w-full mb-8 md:mb-10">
        <div className="flex justify-center rounded-lg bg-gray-200 p-2 mb-2">
          <h1 className="text-sm md:text-md dark:text-black">Recent Projects</h1>
        </div>

        <div className="text-center max-w-2xl px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Check out my recent work
          </h1>
          <p className="text-sm md:text-base">
            Here are some of my recent projects where I practice, learn, and
            improve my web development skills.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mt-10 px-2 md:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-40 md:h-44 lg:h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4 md:p-5 space-y-2 md:space-y-3">
                <h3 className="font-semibold text-base md:text-lg">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-xs md:text-sm">
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

      {/* Explore More */}
      <div className="mt-6 px-2 md:px-6 lg:px-10">
        <h1 className="p-2 text-sm md:text-base">Explore more</h1>
        <Link href="/projects">
          <Button>View Projects</Button>
        </Link>
      </div>

    </div>
  );
}