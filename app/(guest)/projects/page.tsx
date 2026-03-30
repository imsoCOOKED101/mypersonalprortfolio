import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Random Joke Generator",
    description: "A simple Project that generates random jokes.",
    image: "/jokes.png",
    tech: ["HTML", "Css", "JavaScript"],
    url: "https://htmljsproject.vercel.app",
  },
  {
    title: "Products",
    description: "A simple Project and it's about Products.",
    image: "/products.png",
    tech: ["HTML", "Css", "JavaScript", "Reactjs"],
    url: "https://myproducts-nine.vercel.app/",
  },
  {
    title: "TinyBubbles",
    description: "A very simple project about a laundry shop website.",
    image: "/tinybubbles.png",
    tech: ["HTML", "Css", "JavaScript"],
    url: "https://tinybubbles.vercel.app/",
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

export default function ProjectPage() {
  return (
    <div className="px-4 md:px-16 lg:px-32 py-6 mt-6 md:mt-10">

      {/* Heading */}
      <div className="flex flex-col items-center w-full mb-8 md:mb-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          My Projects
        </h1>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl px-4 dark:text-white">
          A collection of projects I built while learning web development,
          showing my progress and skills.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid
        grid-cols-1       
        md:grid-cols-2    
        lg:grid-cols-3    
        gap-4 md:gap-6
      ">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition dark:text-black">
            {/* Project Image */}
            <div className="relative h-40 md:h-44 lg:h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-4 md:p-5 space-y-2 md:space-y-3">
              <h3 className="font-semibold text-base md:text-lg">
                {project.title}
              </h3>

              <p className="text-gray-600 text-xs md:text-sm line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1 md:pt-2">
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
  );
}