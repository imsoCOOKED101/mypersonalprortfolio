import Image from "next/image";
import Link from "next/link";

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
    <div className="defaultpage p-6 mt-10">
      <div className="flex flex-col items-center w-full mb-10">
        {/* <div className="flex justify-center rounded-lg bg-gray-200 p-2 mb-2">
          <h1 className="text-md">Recent Projects</h1>
        </div> */}

        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-2">
            My Projects
          </h1>
          <p>
            A collection of projects I built while learning web development, showing my progress and skills.
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