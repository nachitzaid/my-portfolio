const projects = [
  {
    title: "Gestion des Prestataires",
    description: "This Angular-based project allows management of service providers, including creating, editing, and deleting records. It uses Angular Material components for the frontend.",
    imageUrl: "/angular-logo.png",
    tech: "Angular, TypeScript, Angular Material",
  },
  {
    title: "Gestion des Contacts",
    description: "A contact management system that allows the user to manage contacts in an easy-to-use interface. Built using Angular for the frontend and a Node.js backend.",
    imageUrl: "/nodejs-logo.png",
    tech: "Angular, Node.js",
  },
  {
    title: "Weather App (Python & Flask)",
    description: "A weather application built with Python and Flask that fetches weather data from a weather API and displays it to the user in an interactive way.",
    imageUrl: "/python-logo.png",
    tech: "Python, Flask, Weather API",
  },
  {
    title: "Aura Hotel Management",
    description: "Aura is a hotel management system built in Java, allowing users to manage hotel rooms, bookings, and customer interactions effectively.",
    imageUrl: "/java-logo.png",
    tech: "Java, Mongodb",
  },
];

export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-16 bg-black min-h-screen">
      <div className="text-center mb-24">
        <p className="text-purple-500 text-sm mb-2">Special Collections</p>
        <h2 className="text-white text-4xl font-bold mb-4">Our range of unique Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore exclusive projects with super convenience in collection discovery
          and curation.
        </p>
      </div>
      
      <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">
        <div className="flex items-center justify-center gap-4 absolute transform-style-3d rotate-x-12">
          {projects.map((project, index) => {
            const rotation = (index - (projects.length - 1) / 2) * 15;
            
            return (
              <div
                key={project.title}
                className="w-64 h-96 relative group"
                style={{
                  transform: `rotateY(${rotation}deg) translateZ(100px)`,
                  transition: 'all 0.5s ease-in-out',
                }}
              >
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm">
                  <div className="w-full h-full relative group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-2xl p-4"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-300">{project.tech}</p>
                      </div>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/75 p-6 flex items-center justify-center rounded-2xl">
                      <p className="text-white text-center text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}