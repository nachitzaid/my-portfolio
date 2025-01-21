import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Gestion des Prestataires",
      description:
        "This Angular-based project allows management of service providers, including creating, editing, and deleting records. It uses Angular Material components for the frontend.",
      imageUrl: "/angular-logo.png",
      tech: "Angular, TypeScript, Angular Material",
    },
    {
      title: "Gestion des Contacts",
      description:
        "A contact management system that allows the user to manage contacts in an easy-to-use interface. Built using Angular for the frontend and a Node.js backend.",
      imageUrl: "/nodejs-logo.png",
      tech: "Angular, Node.js",
    },
    {
      title: "Weather App (Python & Flask)",
      description:
        "A weather application built with Python and Flask that fetches weather data from a weather API and displays it to the user in an interactive way.",
      imageUrl: "/python-logo.png",
      tech: "Python, Flask, Weather API",
    },
    {
      title: "Aura Hotel Management",
      description:
        "Aura is a hotel management system built in Java, allowing users to manage hotel rooms, bookings, and customer interactions effectively.",
      imageUrl: "/java-logo.png",
      tech: "Java, MySQL",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="relative overflow-hidden">
        {/* Cards Container */}
        <div className="flex animate-oval-scroll items-center space-x-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group w-72 h-96 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:bg-gray-200"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={150}
                height={150}
                className="mx-auto mt-6"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-center">{project.title}</h3>
                <p className="text-sm text-gray-600 text-center mt-2">{project.tech}</p>
              </div>

              {/* Hover Description */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity p-6">
                <p className="text-white text-center">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
