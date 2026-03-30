import Image from "next/image";
import { Code } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="px-4 md:px-16 lg:px-32 py-4 md:py-6">

      {/* Cover Banner */}
      <div className="relative bg-[url('/coverp.png')] bg-cover bg-center rounded-lg h-40 md:h-52 lg:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Profile Row */}
      <div className="relative flex flex-col md:flex-row items-center md:items-end gap-3 md:gap-6 -mt-12 md:-mt-16 lg:-mt-24 z-10">

        {/* Profile Image */}
        <div className="m-2 md:m-4 p-2 shadow-xl rounded-full bg-white shrink-0">
          <Image
            src="/gampp.jpg"
            alt="Gams"
            width={150}
            height={150}
            className="
              rounded-full transition-all duration-300 hover:scale-105
              w-20 h-20
              md:w-28 md:h-28
              lg:w-36 lg:h-36
            "
          />
        </div>

        {/* Name & Title */}
        <div className="text-center md:text-left pb-2 md:pb-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Gamaliel C. Octobre
          </h1>
          <p className="text-gray-600 text-sm md:text-base dark:text-white">
            An aspiring Web Developer
          </p>
        </div>
      </div>

      {/* About Me */}
      <div className="border border-gray-300 p-4 md:p-6 rounded-lg mt-6 md:mt-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">About Me</h1>
        <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base dark:text-white">
          Hi, I am Gamaliel C. Octobre from Danao. I am currently studying at
          Cordova Public College (CPC), where I am developing my knowledge in
          information technology and web development. I am an aspiring web
          developer who enjoys creating websites and working on small projects
          to practice my skills and gain experience. I am especially interested
          in front-end development and learning how to build clean, user-friendly
          designs. In my free time, I explore tutorials, coding resources, and
          new tools to improve my abilities. My goal is to continuously grow as
          a developer and one day work on real-world projects that can help
          people and businesses.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-col items-start border border-gray-300 rounded-lg p-4 md:p-6 gap-4 mt-6 md:mt-10">
        <h1 className="flex items-center gap-2 text-lg md:text-xl font-semibold">
          <Code size={20} />
          Tech Stack
        </h1>

        <div className="w-full">
          <h2 className="text-sm font-semibold">Front End</h2>
          <div className="flex flex-wrap gap-2 md:gap-3 mt-2">
            {["HTML", "CSS", "JavaScript", "Reactjs", "Nextjs", "TailwindCSS", "Shadcn"].map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 border border-gray-300 rounded-md text-gray-700 cursor-default transition hover:bg-gray-200 hover:shadow-md dark:text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}