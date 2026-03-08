const footerLinks = {
  pages: [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ],
  resources: [
    { name: "GitHub", url: "https://github.com/imsoCOOKED101" },
    { name: "W3School", url: "https://www.w3schools.com/"},
  ],
  connect: [
    { name: "GitHub", url: "https://github.com/imsoCOOKED101" },
    { name: "Facebook", url: "https://www.facebook.com/gamaliel10196/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-50 py-2 mt-5">
      <div className="container mx-auto md:px-5 grid grid-cols-1 md:grid-cols-4 gap-40">

        {/* About */}
        <div className="whitespace-nowrap">
          <h2 className="text-lg font-bold">Gamaliel Octobre</h2>
          <p className="text-xs mt-2">Aspiring Web Dev</p>
          <p className="text-xs">Sabang Danao Cebu, Philippines</p>
        </div>

        {/* Pages */}
        <div >
          <h3 className="font-semibold mb-2">Pages</h3>
          <ul className="space-y-0">
            {footerLinks.pages.map((link) => (<li key={link.name}><a href={link.url} className="hover:text-blue-500 text-xs">{link.name}</a></li>))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-0">
            {footerLinks.resources.map((link) => (<li key={link.name}><a href={link.url} className="hover:text-blue-500 text-xs" target="_blank">{link.name}</a></li>))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <ul className="space-y-0">
            {footerLinks.connect.map((link) => (<li key={link.name}><a href={link.url} className="hover:text-blue-500 text-xs" target="_blank">{link.name}</a></li>))}
          </ul>
        </div>
      </div>
        
      <div className="text-center text-sm text-gray-500 mt-10">© 2026. All rights reserved.</div>
    </footer>
  );
}
