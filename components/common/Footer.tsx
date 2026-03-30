import Link from "next/link";

const footerLinks = {
  pages: [
    { name: "Home",     url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About",    url: "/about" },
    { name: "Contact",  url: "/contact" },
  ],
  resources: [
    { name: "GitHub",   url: "https://github.com/imsoCOOKED101" },
    { name: "W3School", url: "https://www.w3schools.com/" },
  ],
  connect: [
    { name: "GitHub",   url: "https://github.com/imsoCOOKED101" },
    { name: "Facebook", url: "https://www.facebook.com/gamaliel10196/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 md:px-16 lg:px-32 py-8 mt-5">
      <div className="grid
        grid-cols-2      
        md:grid-cols-4 
        gap-8 md:gap-12 lg:gap-16
      ">

        {/* About — full width on phone */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-base md:text-lg font-bold">Gamaliel Octobre</h2>
          <p className="text-xs mt-2 text-gray-500">Aspiring Web Dev</p>
          <p className="text-xs text-gray-500">Sabang Danao Cebu, Philippines</p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-2 text-sm md:text-base">Pages</h3>
          <ul className="space-y-1">
            {footerLinks.pages.map((link) => (
              <li key={link.name}>
                <Link href={link.url} className="hover:text-blue-500 text-xs transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2 text-sm md:text-base">Resources</h3>
          <ul className="space-y-1">
            {footerLinks.resources.map((link) => (
              <li key={link.name}>
                <a href={link.url} className="hover:text-blue-500 text-xs transition" target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold mb-2 text-sm md:text-base">Connect</h3>
          <ul className="space-y-1">
            {footerLinks.connect.map((link) => (
              <li key={link.name}>
                <a href={link.url} className="hover:text-blue-500 text-xs transition" target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-xs md:text-sm text-gray-500">
        © 2026 Gamaliel Octobre. All rights reserved.
      </div>
    </footer>
  );
}